import React from 'react';
import { Link } from 'react-router-dom';

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
                    <div className="col-lg-12 page-title-box">
                        <h4 className="page-title">Languages</h4>

                        <div className="page-title-right">  
                            <ol className="breadcrumb m-0">
                                <li className="breadcrumb-item"><Link to="/">Dashboard</Link></li>
                                <li className="breadcrumb-item"><Link to='/localizations'>Languages</Link></li>
                                <li className="breadcrumb-item active">Create Language</li>
                            </ol>
                        </div>
                        <br/>
                        <hr/>
                    </div>
                    <div className="container-fluid">
                        <Form
                            formData={formObj}
                            module='localizations'
                        />
                    </div>
                </div>
            </div>
        </div>
    );
}

export default CreateLocalization;