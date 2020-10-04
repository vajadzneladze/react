import React from 'react';
import { Link } from 'react-router-dom';

/** Components */
import Table from '../../components/tables/Table';

const tableHeader = {
    item_id: '#',
    email: 'ელ-ფოსტა',
    phone: 'ტელეფონი',
    working_hours: 'სამუშაო საათები',
    contact_info:'მისამართი'
};

const Contact = ({ location , match}) => {
    
    return (
        <div id="wrapper">
            <div id="page-wrapper">
                <div className="row">
                    <div className="col-lg-12 page-title-box">
                        <h4 className="page-title">Contacts</h4>

                        <div className="page-title-right">  
                            <ol className="breadcrumb m-0">
                                <li className="breadcrumb-item"><Link to="/">Dashboard</Link></li>
                                <li className="breadcrumb-item active">Contacts</li>
                            </ol>
                        </div>
                        <br/>
                        <hr/>
                    </div>
                    <div className="container-fluid">

                        <Table 
                            headers = { tableHeader } 
                            module = { 'contacts' } 
                            queryStr = { location.search } 
                            lang = { match.params.lang ? match.params.lang : localStorage.getItem('lang') }/>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Contact;