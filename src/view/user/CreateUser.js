import React from 'react';

/** Components */
import Form from '../../components/forms/Form';

const formObj = {
    email: {
        inputType : 'input',
        type : 'email',
        label: 'ელ - ფოსტა *',
        name : 'email',
        required: true,
        value : null
    },
    password: {
        inputType : 'input',
        type : 'password',
        label: 'პაროლი *',
        name : 'password',
        required: true,
        value : null
    },
    name: {
        inputType : 'input',
        type : 'text',
        label: 'სახელი & გვარი',
        name : 'name',
        required: false,
        value : null
    },
    phone: {
        inputType : 'input',
        type : 'number',
        label: 'ტელ. ნომერი',
        name : 'phone',
        required: false,
        value : null
    },
    age: {
        inputType : 'input',
        type : 'number',
        label: 'ასაკი',
        name : 'age',
        required: false,
        value : null
    },
    address: {
        inputType : 'input',
        type : 'text',
        label: 'მისამართი',
        name : 'address',
        required: true,
        value : null
    },
    role_id: {
        inputType : 'select',
        label: 'როლი *',
        name : 'role_id',
        required: true,
        value : 4,
        options : [
            {
                id:1,
                title:'მოსწავლე'
            },
            {
                id:2,
                title:'მასწავლებელი'
            },
            {
                id:3,
                title:'დირექტორი'
            },
            {
                id:4,
                title:'ადმინისტრატორი'
            }
        ]
    }
};

const CreateUser = () => {
    return (
        <div id="wrapper">
            <div id="page-wrapper">
                <div className="row">
                    <div className="col-lg-12">
                        <h1 className="page-header"> </h1>
                    </div>
                    <div className="container-fluid">
                        <Form formData = { formObj } module = 'users' />
                    </div>
                </div>
            </div>
        </div>
    );
}

export default CreateUser;