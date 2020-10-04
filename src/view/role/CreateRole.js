import React from 'react';
import { Link } from 'react-router-dom';

/** Components */
import Form from '../../components/forms/Form';

const formObj = {
    title: {
        inputType : 'input',
        type : 'text', 
        label: 'სათაური *',
        name : 'title',
        required: true,
        value : null
    },
    description: {
        inputType : 'textarea',
        type : 'text',
        label: 'მოკლე აღწერა', 
        name : 'description',
        required: false,
        value : null
    },
};

const CreateRole = () => {
    return (
        <div id="wrapper">
            <div id="page-wrapper">
                <div className="row">
                    <div className="col-lg-12 page-title-box">
                        <h4 className="page-title">Create Role</h4>

                        <div className="page-title-right">  
                            <ol className="breadcrumb m-0">
                                <li className="breadcrumb-item"><Link to="/">Dashboard</Link></li>
                                <li className="breadcrumb-item"><Link to='/roles'>Roles</Link></li>
                                <li className="breadcrumb-item active">Create Role</li>
                            </ol>
                        </div>
                        <br/>
                        <hr/>
                    </div>
                    <div className="container-fluid">
                        <Form
                            formData={formObj}
                            module='roles' />
                    </div>
                </div>
            </div>
        </div>
    );
}

export default CreateRole;