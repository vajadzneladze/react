import React, { useCallback, useEffect,  useState } from 'react';
import { Link } from 'react-router-dom';

/** Components */
import Form from '../../components/forms/Form';

/** Services */
import API from '../../services/api';

const formObj = {
    key: {
        inputType : 'input',
        type : 'text', 
        label: 'საკვანძო სიტყვა *',
        name : 'key',
        required: true,
        value : null
    },
    value: {
        inputType : 'input',
        type : 'text', 
        label: 'მნიშვნელობა',
        name : 'value',
        required: false,
        value : null
    },
    module: {
        inputType : 'input',
        type : 'text', 
        label: 'მოდული',
        name : 'module',
        required: false,
        value : null
    },
};

const EditDictionary = ({ match }) => {

    const [data, setData] = useState(null);

    const fetchData = useCallback(() => {
            
            let lang = match.params.lang ? match.params.lang : 'ge';


            API.get(`${lang}/dictionaries/${match.params.id}`).then(res => { 

                const resData = res.data.data;
                const apiData = { ...formObj };

                if(resData){
                    Object.keys(resData).forEach( item => {
                        if( apiData[item] ){
                            apiData[item].value = resData[item] ? resData[item] : '';
                        }

                    })
                    setData(apiData);
                }

            })
        },
        [match.params.lang, match.params.id ],
    )

    useEffect(() => {

        fetchData();
    }, [ fetchData ])

    return (
        <div id="wrapper">
            <div id="page-wrapper">
                <div className="row">
                    <div className="col-lg-12 page-title-box">
                        <h4 className="page-title">Edit Translation</h4>

                        <div className="page-title-right">  
                            <ol className="breadcrumb m-0">
                                <li className="breadcrumb-item"><Link to="/">Dashboard</Link></li>
                                <li className="breadcrumb-item"><Link to='/dictionaries'>Translations</Link></li>
                                <li className="breadcrumb-item active">Edit Translation</li>
                            </ol>
                        </div>
                        <br/>
                        <hr/>
                    </div>
                    <div className="container-fluid">
                        { data ? <Form 
                                    formData = { data } 
                                    module = 'dictionaries' 
                                    method = 'update'  
                                    id = {match.params.id}
                                    lang = {match.params.lang }
                                    /> : null}
                    </div>
                </div>
            </div>
        </div>
    );
}

export default EditDictionary;