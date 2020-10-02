import React from 'react';

/** Components */
import Form from '../../components/forms/Form';

const formObj = {
    title: {
        inputType : 'input',
        type : 'text', 
        label: 'სათაური',
        name : 'title',
        required: false,
        value : null
    },
    description: {
        inputType : 'textarea',
        type : 'text',
        label: 'აღწერა',
        name : 'description',
        required: false,
        value : null
    },
    content: {
        inputType : 'CKEditor',
        type : 'text',
        label: 'ვრცელი ინფო',
        name : 'content',
        required: false,
        value : null
    },
};

const CreateFrontBox = ({ match }) => {
    return (
        <div id="wrapper">
            <div id="page-wrapper">
                <div className="row">
                    <div className="col-lg-12">
                        <h1 className="page-header"> </h1>
                    </div>
                    <div className="container-fluid">
                        <Form formData={formObj}
                            module='frontboxes'
                            lang = { match.params.lang ? match.params.lang : localStorage.getItem('lang') }
                        />
                    </div>
                </div>
            </div>
        </div>
    );
}

export default CreateFrontBox;