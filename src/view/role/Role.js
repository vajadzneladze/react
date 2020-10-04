import React from 'react';
import { Link } from 'react-router-dom';

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
                    <div className="col-lg-12 page-title-box">
                        <h4 className="page-title">Roles</h4>

                        <div className="page-title-right">  
                            <ol className="breadcrumb m-0">
                                <li className="breadcrumb-item"><Link to="/">Dashboard</Link></li>
                                <li className="breadcrumb-item active">Roles</li>
                            </ol>
                        </div>
                        <br/>
                        <hr/>
                    </div>
                    <div className="container-fluid">
                        <Table  headers={rolesTableHeader}
                                module={'roles'}
                                queryStr={location.search} />
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Role;