import React from 'react';

/** Components */
import Table from '../../components/tables/Table';

const usersTableHeader = {
    id: '#',
    name: 'სახელი',
    email: 'ელ-ფოსტა',
    address: 'მისამართი',
    phone: 'ტელ. ნომერი',
    age: 'ასაკი',
    deposit: 'თანხა'
};

const User = ({ location }) => {

    return (
        <div id="wrapper">
            <div id="page-wrapper">
                <div className="row">
                    <div className="col-lg-12">
                        <h1 className="page-header"> </h1>
                    </div>
                    <div className="container-fluid">
                        <Table headers = { usersTableHeader } module = { 'users' } queryStr = { location.search }/>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default User;