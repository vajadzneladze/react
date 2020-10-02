import React from 'react';

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
                    <div className="col-lg-12">
                        <h1 className="page-header"> </h1>
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