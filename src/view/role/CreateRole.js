import React from 'react';

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
                    <div className="col-lg-12">
                        <h1 className="page-header"> </h1>
                    </div>
                    <div className="container-fluid">
                        <Form formData = { formObj } module = 'roles' />
                    </div>
                </div>
            </div>
        </div>
    );
}

export default CreateRole;