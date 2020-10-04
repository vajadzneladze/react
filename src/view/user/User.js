import React from 'react';
import { Link } from 'react-router-dom';

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
                    <div className="col-lg-12 page-title-box">
                        <h4 className="page-title">Users</h4>

                        <div className="page-title-right">  
                            <ol className="breadcrumb m-0">
                                <li className="breadcrumb-item"><Link to="/">Dashboard</Link></li>
                                <li className="breadcrumb-item active">Users</li>
                            </ol>
                        </div>
                        <br/>
                        <hr/>
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