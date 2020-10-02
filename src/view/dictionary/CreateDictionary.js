import React from 'react';

/** Components */
import Form from '../../components/forms/Form';

const formObj = {
    key: {
        inputType : 'input',
        type : 'text', 
        label: 'საკვანძო სიტყვა *',
        name : 'key',
        required: true,
        value : null
    },
    value: {
        inputType : 'input',
        type : 'text', 
        label: 'მნიშვნელობა',
        name : 'value',
        required: false,
        value : null
    },
    module: {
        inputType : 'input',
        type : 'text', 
        label: 'მოდული',
        name : 'module',
        required: false,
        value : null
    },
};

const CreateDictionary = ({ match }) => {
    return (
        <div id="wrapper">
            <div id="page-wrapper">
                <div className="row">
                    <div className="col-lg-12">
                        <h1 className="page-header"> </h1>
                    </div>
                    <div className="container-fluid">
                        <Form formData={formObj}
                            module='dictionaries'
                            lang = { match.params.lang ? match.params.lang : localStorage.getItem('lang') }
                        />
                    </div>
                </div>
            </div>
        </div>
    );
}

export default CreateDictionary;