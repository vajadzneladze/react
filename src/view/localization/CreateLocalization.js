import React from 'react';

/** Components */
import Form from '../../components/forms/Form';

const formObj = {
    title: {
        inputType : 'input',
        type : 'text', 
        label: 'სათაური',
        name : 'title',
        required: true,
        value : null
    },
    abbreviation: {
        inputType : 'input',
        type : 'text', 
        label: 'აბრევიატურა',
        name : 'abbreviation',
        required: false,
        value : null
    },
    native: {
        inputType : 'input',
        type : 'text', 
        label: 'მშობლიური',
        name : 'native',
        required: false,
        value : null
    },
    locale: {
        inputType : 'input',
        type : 'text', 
        label: 'ლოცაკური აღნიშვნა *',
        name : 'locale',
        required: false,
        value : null
    },
};

const CreateLocalization = () => {
    return (
        <div id="wrapper">
            <div id="page-wrapper">
                <div className="row">
                    <div className="col-lg-12">
                        <h1 className="page-header"> </h1>
                    </div>
                    <div className="container-fluid">
                        <Form formData={formObj}
                            module='localizations'
                        />
                    </div>
                </div>
            </div>
        </div>
    );
}

export default CreateLocalization;