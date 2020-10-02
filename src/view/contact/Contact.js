import React from 'react';

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
                    <div className="col-lg-12">
                        <h1 className="page-header"> </h1>
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