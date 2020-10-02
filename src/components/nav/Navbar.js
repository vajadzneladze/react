import React, { useState } from 'react';
import { Link, withRouter } from 'react-router-dom';
import logo from '../../assets/img/logo.png';

/** Service */
import API from '../../services/api';

/** Redux */
import { useDispatch, useSelector } from 'react-redux';
import allActions from '../../redux/actions';


const Navbar = ({location , history}) => {

    const dispatch = useDispatch();
    const [childNav, setChildNav] = useState(false);
    
    const langStore = useSelector(state => state.dictionary);

    const logOutHandler = () => {

        API.post('auth/logout')
        .then(res=>{    
            const data = res.data;

            if(data && res.data.message){
                
                localStorage.removeItem('access_token');
                dispatch(allActions.userActions.logOut());
            }

            window.location.href = 'login';
        });
    }

    const changeLangHnadler = lang => {

        let { pathname, search } = location;
        let supportedLang = Object.keys(langStore.languages);

        pathname = pathname.split('/');

        if (pathname[1].length === 2)
        {
            if (supportedLang.includes(lang)) {
                
                pathname[1] = lang;
            } 
        } else {
            if (supportedLang.includes(lang)) {
                
                pathname[0] = `/${lang}`;
            } 
        }


        dispatch(allActions.dictionaryActions.setLocal(lang));
        localStorage.setItem('lang',lang)
        pathname = pathname.join('/')

        history.push(pathname+search);
    }
    
    return (
        <nav  className="navbar navbar-default navbar-fixed-top" role="navigation" style={{marginBottom : '0'}}>
            <div className="navbar-header">
                <button type="button" className="navbar-toggle" data-toggle="collapse" data-target=".sidebar-collapse">
                    <span className="sr-only">Toggle navigation</span>
                    <span className="icon-bar"></span>
                    <span className="icon-bar"></span>
                    <span className="icon-bar"></span>
                </button>
                <Link className="navbar-brand" to = "/">Control Panel</Link>
            </div>
            <ul className="nav navbar-top-links navbar-right">

                <li className="dropdown" style={{float:'right'}}>
                    <Link className="dropdown-toggle" data-toggle="dropdown" to=''>
                        <i className="fa fa-globe fa-fw"></i>  <i className="fa fa-caret-down"></i>
                    </Link>
                    <ul className="dropdown-menu dropdown-language">
                        {
                            Object.keys(langStore.languages).map(item => {
                                return <li key={item} onClick =  { () => changeLangHnadler(item) }> { langStore.languages[item] } </li>
                            })
                        }
                      
                    </ul>
                    
                </li>
                <li className="dropdown" style={{float:'right'}}>
                    <Link className="dropdown-toggle" data-toggle="dropdown" to=''>
                        <i className="fa fa-user fa-fw"></i>  <i className="fa fa-caret-down"></i>
                    </Link>
                    <ul className="dropdown-menu dropdown-user">
                        <li>
                            <Link to = '#' disabled> <i className="fa fa-user fa-fw"></i> User Profile</Link>
                        </li>
                        <li className="divider"></li>
                        <li>
                            <Link to = '' disable='disabled'  onClick = { logOutHandler }>
                                <i className="fa fa-sign-out fa-fw"></i> Logout</Link>
                        </li>
                    </ul>
                    
                </li>
            </ul>

            

            <div className="navbar-default navbar-static-side" role="navigation">
                <div className="sidebar-collapse">
                    <ul className="nav" id="side-menu">
                        <li className="sidebar-search">
                            <div className="input-group custom-search-form">
                                <input type="text" className="form-control" placeholder="Search..." />
                                <span className="input-group-btn">
                                <button className="btn btn-default" type="button">
                                    <i className="fa fa-search"></i>
                                </button>
                            </span>
                            </div>
                        </li>
                        {/* <li>
                            <Link to = '/'> <i className="fa fa-dashboard fa-fw"></i> &nbsp;მთავარი გვერდი</Link>
                        </li>
                        <li>
                            <Link to = '/users'> <i className="fa fa-users fa-fw"></i> &nbsp;მომხმარებლები </Link>
                        </li>
                        <li>
                            <Link to = '/subjects'> <i className="fa fa-book fa-fw"></i> &nbsp;საგნები</Link>
                        </li>
                        <li>
                            <Link to = '/news'> <i className="fa fa-desktop fa-fw"></i> &nbsp;სიახლეები </Link>
                        </li> */}
                        <li>
                            <Link to = {`${process.env.PUBLIC_URL}/${langStore.lang}/frontboxes`}> <i className="fa fa-play fa-fw"></i> &nbsp; boxes </Link>
                        </li>
                        <li>
                            <Link to = {`${process.env.PUBLIC_URL}/${langStore.lang}/slides`}> <i className="fa fa-play fa-fw"></i> &nbsp;სლაიდები </Link>
                        </li>
                        <li>
                            <Link to = {`${process.env.PUBLIC_URL}/${langStore.lang}/workingstyles`}> <i className="fa fa-coffee fa-fw"></i> &nbsp;მუშაობის სტილი </Link>
                        </li>
                        <li>
                            <Link to = {`${process.env.PUBLIC_URL}/${langStore.lang}/numbers`}> <i className="fa fa-sort-numeric-asc fa-fw"></i> &nbsp;საინტერესო ციფრები </Link>
                        </li>
                        <li>
                            <Link to = {`${process.env.PUBLIC_URL}/${langStore.lang}/blogs`}> <i className="fa fa-rss fa-fw"></i> &nbsp;ბლოგი </Link>
                        </li>
                        <li className = { childNav ? 'active' : '' } >
                            <Link to="#"><i className ="fa fa-cog" aria-hidden="true"> </i> &nbsp;პარამეტრები<span className ="fa arrow" onClick = { () => { setChildNav(!childNav) } }></span></Link>
                            <ul className={`nav nav-second-level collapse ${childNav ? 'in' : null}`} style={{ height: 'auto' }}>
                                {/* <li>
                                    <Link to = {`${process.env.PUBLIC_URL}/${langStore.lang}/roles`}> <i className="fa fa-eye fa-fw"></i> &nbsp;როლები </Link>
                                </li> */}
                                <li>
                                    <Link to = {`${process.env.PUBLIC_URL}/${langStore.lang}/localizations`}> <i className="fa fa-globe fa-fw"></i> &nbsp;ენები </Link>
                                </li>
                                <li>
                                    <Link to = {`${process.env.PUBLIC_URL}/${langStore.lang}/dictionaries`}> <i className="fa fa-book fa-fw"></i> &nbsp;ლექსიკონი </Link>
                                </li>  
                            </ul>
                        </li>
                        <li>
                            <Link to = {`${process.env.PUBLIC_URL}/${langStore.lang}/vacancies`}> <i className="fa fa-archive fa-fw"></i> &nbsp;ვაკანსიები </Link>
                        </li>
                        <li>
                            <Link to = {`${process.env.PUBLIC_URL}/${langStore.lang}/feedbacks`}> <i className="fa fa-bullhorn	 fa-fw"></i> &nbsp;ფიდბექი </Link>
                        </li>
                        <li>
                            <Link to = {`${process.env.PUBLIC_URL}/${langStore.lang}/abouts`}> <i className="fa fa-fa fa-info-circle  fa-fw"></i> &nbsp;ჩვენს შესახებ </Link>
                        </li>
                        <li>
                            <Link to = {`${process.env.PUBLIC_URL}/${langStore.lang}/contacts`}> <i className="fa fa-phone fa-fw"></i> &nbsp;კონტაქტი </Link>
                        </li>

                    </ul>
                </div>
            </div>
        </nav>
    );
}

export default  withRouter(Navbar);