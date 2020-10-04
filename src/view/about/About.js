import React from 'react';
import { Link } from 'react-router-dom';

/** Components */
import Table from '../../components/tables/Table';

const tableHeader = {
    item_id: '#',
    title: 'სათაური',
    description: 'მოკლე აღწერა',
    status: 'სტატუსი',
    file_id:'სურათის კოდი'
};

const About = ({ location , match}) => { 
    
    return ( 
        <div id="wrapper">
            <div id="page-wrapper">
                <div className="row">
                    <div className="col-lg-12 page-title-box">
                        <h4 className="page-title">About Us</h4>

                        <div className="page-title-right">  
                            <ol className="breadcrumb m-0">
                                <li className="breadcrumb-item"><Link to="/">Dashboard</Link></li>
                                <li className="breadcrumb-item active">About Us</li>
                            </ol>
                        </div>
                        <br/>
                        <hr/>
                    </div>
                    <div className="container-fluid">   

                        <Table 
                            headers = { tableHeader } 
                            module = { 'abouts' } 
                            queryStr = { location.search } 
                            lang = { match.params.lang ? match.params.lang : localStorage.getItem('lang') }/>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default About;