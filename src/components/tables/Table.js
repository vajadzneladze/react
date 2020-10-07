import React, { useEffect, useState, useCallback, useRef } from 'react';
import { Link, withRouter } from 'react-router-dom';

/** Style */
import './Table.css';

/** Redux */
import { useSelector } from 'react-redux';

/** Services */
import API from '../../services/api';
import { queryStrToObj  , pagerHandler} from '../../services/dataHandlerServices';


const Table = ({ headers  , module , queryStr , history  , lang = ''}) => {

    const [ data , setData ] = useState(null);
    const [ pagerDesc , setPagerDeasc ] = useState({
        from  : '', 
        to    : '',
        total : 0,
        lastPage:1,
        current:1
    }) 
    const [ pages, setPages ] = useState([1]);
    const mountedRef = useRef(true);
    const tr = useSelector(state => state.dictionary.dictionary);


    const fetchData = useCallback(() => {

        let prefix = lang? `${lang}/`:'';

        API.get(`${prefix}${module}${queryStr}`).then(res => { 

                if(mountedRef.current){

                    const  { data  }  =  res.data

                    if(data){

                        setPagerDeasc({
                            from: data.from,
                            to:data.to,
                            total:data.total,
                            lastPage:data.last_page,
                            current:data.current_page
                        })   
                        setData(data.data);
                        setPages(pagerHandler(data.current_page, data.last_page));


                    }
                }
            });

        } , [ queryStr , module , lang ]
    );

    const deleteHandler = ( module , id ) => {

        const result = data.filter(item => item.id !== id);
        
        let prefix = lang? `${lang}/`:'';


        API.delete(`${prefix}${module}/${id}`).then(res => {
            setData(result);
            alert('ჩანაწერი წარმატებით წაიშალა')
        });
    }

    const filterHandler = ( filterName , filterValue ) => { 

        let { page , perPage , keyword} = queryStrToObj(queryStr);

        /** ნებისმიერი სხვა ფილტრის ცვლილების შემთხვევაში პირველი გვერდიდან იწყება ცხრილის გამოტანა */
        page = filterName !== 'page' ?  1 : filterValue;
        
        switch( filterName ){

            case 'keyword':
                keyword = filterValue !== '' ? filterValue: null;
                break;
            case 'perPage':
                perPage = filterValue > 0 ? filterValue : 10;
                break;
            default:
                break;
        }

        let redirect = `${module}?page=${page}&perPage=${perPage}${ keyword? '&keyword='+keyword:''}`;

        history.push(redirect);
    }

    const translate = str => {

        let translation = headers[str] ? headers[str] : '';

        if (tr[module] && tr[module][str]) {
            
            translation = tr[module][str];
        } else if (tr['global'] && tr['global'][str]) {
            
            translation = tr['global'][str];
        }

        return translation;
    }



    useEffect(() => {

        mountedRef.current = true;
        
        fetchData();

        return () => {
            mountedRef.current = false;
        }
    }, [queryStr, fetchData])
    

    return (
        <div className="row">
            <div className="col-lg-12">
                <div className="panel panel-default">
                    <div className="panel-heading text-right" > 
                        <Link to ={`${process.env.PUBLIC_URL}/${lang? lang: localStorage.getItem('lang')}/${module}/create`} className = 'btn btn-secondary addNewItem'> 
                            <i className="fa fa-plus-circle" aria-hidden="true"></i>
                            <span>ახლის დამატება </span>
                        </Link>
                    </div>
                    <div className="panel-body">
                        <div className = "row">
                            <div className = "col-lg-1 ">
                                <div className="form-group">
                                    <select className="form-control" onChange = { e => filterHandler('perPage',e.target.value) }>
                                        <option value = '10'>10</option>
                                        <option value = '20'>20</option>
                                        <option value = '30'>30</option>
                                        <option value = '40'>40</option>
                                        <option value = '50'>50</option>
                                    </select> 
                                </div>
                            </div>
                            <div className = "col-lg-9"></div>
                            <div className = "col-lg-2">
                                <div className="form-group input-group">
                                    <input type="text" className="form-control" onChange = { e => filterHandler('keyword',e.target.value) } />
                                    <span className="input-group-btn">
                                        <button className="btn btn-default" type="button">
                                            <i className="fa fa-search"></i>
                                        </button>
                                    </span>
                                </div>
                            </div>
                        </div>
                        <div className="table-responsive">
                            
                            <table className="table table-striped table-bordered table-hover" id="dataTables-example">
                                <thead>
                                    <tr>
                                        {
                                            Object.keys(headers).map(item => {
                                                return <th key = { item } > { translate(item) }  </th>
                                            })
                                        }
                                        <th>   </th>
                                    </tr>
                                </thead>
                                <tbody>
                                
                                    {
                                        data ? 

                                            data.map(item => {
                                                return <tr key = {item.id}>{ 
                                                    Object.keys(headers).map( (name,index) => {
                                                            return <td key = {index}>  {item[name]  ? item[name] : ''} </td>
                                                        })
                                                    }
                                                    <td className = 'col-12'>
                                                        <i className="fa fa-pencil-square editRow" onClick = { () => { history.push(`${process.env.PUBLIC_URL}/${lang? lang: localStorage.getItem('lang')}/${module}/${lang? item.item_id: item.id}/edit`) } }  aria-hidden="true"></i>
                                                        <i className="fa fa-trash-o delRow" aria-hidden="true" onClick = { () => deleteHandler(module , (lang? item.item_id : item.id)) }></i>
                                                    </td>
                                                </tr>
                                            })

                                        : null
                                    }
                                </tbody>
                            </table>
                        </div>


                        <div className = "row">
                            <div className = 'col-lg-6'><br/>
                                <div className="dataTables_info" id="dataTables-example_info" role="alert" aria-live="polite" aria-relevant="all">Showing { pagerDesc.from } to {pagerDesc.to} of {pagerDesc.total} entries</div>
                            </div> 


                            <div className = 'col-lg-6'>
                                <div className="dataTables_paginate paging_simple_numbers" id="dataTables-example_paginate">
                                    <ul className="pagination">
                                        <li className="paginate_button previous " aria-controls="dataTables-example" tabIndex="0" id="dataTables-example_previous">
                                            <span onClick = { e => filterHandler('page', pagerDesc.current > 1 ? pagerDesc.current - 1 : 1 )}> Previous </span>
                                        </li>
                                        { 
                                            pages.map(item => {
                                                return <li className = { `paginate_button ${ pagerDesc.current === item ? 'active' : null  } ` } key = { item }  >
                                                            <span onClick = { e => filterHandler('page',item) }>{ item } </span>
                                                        </li>
                                            })
                                        }
                                        
                                        <li className="paginate_button next" aria-controls="dataTables-example" tabIndex="0" id="dataTables-example_next">
                                            <span onClick = { e => filterHandler('page', pagerDesc.lastPage > pagerDesc.current ? pagerDesc.current + 1:pagerDesc.current ) }> Next </span>
                                        </li>
                                    </ul>
                                </div>
                            </div>

                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default withRouter(Table);