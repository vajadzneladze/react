import React from 'react';

/** Components */
import Table from '../../components/tables/Table';

const rolesTableHeader = {
    id: '#',
    title: 'სახელი',
    description: 'აღწერა',
};

const Role = ({ location }) => {

    return (
        <div id="wrapper">
            <div id="page-wrapper">
                <div className="row">
                    <div className="col-lg-12">
                        <h1 className="page-header"> </h1>
                    </div>
                    <div className="container-fluid">
                        <Table headers = { rolesTableHeader } module = { 'roles' } queryStr = { location.search }/>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Role;