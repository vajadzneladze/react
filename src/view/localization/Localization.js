import React from 'react';
import { Link } from 'react-router-dom';

/** Components */
import Table from '../../components/tables/Table';

const tableHeader = {
    id: '#',
    title: 'სათაური',
    abbreviation: 'აბრევიატურა',
    native: 'მშობლიური',
    locale: 'ლოკალური აღნიშვნა',
    status: 'ტატუსი',
    default: 'ძირითადი',
    
}; 
 
const Localization = ({ location }) => {
    
    return (
        <div id="wrapper">
            <div id="page-wrapper">
                <div className="row">
                    <div className="col-lg-12 page-title-box">
                        <h4 className="page-title">Languages</h4>

                        <div className="page-title-right">  
                            <ol className="breadcrumb m-0">
                                <li className="breadcrumb-item"><Link to="/">Dashboard</Link></li>
                                <li className="breadcrumb-item active">Languages</li>
                            </ol>
                        </div>
                        <br/>
                        <hr/>
                    </div>
                    <div className="container-fluid">

                        <Table 
                            headers = { tableHeader } 
                            module = { 'localizations' } 
                            queryStr = { location.search } 
                        />
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Localization;