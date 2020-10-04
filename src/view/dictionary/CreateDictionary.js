import React from 'react';
import { Link } from 'react-router-dom';

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
                    <div className="col-lg-12 page-title-box">
                        <h4 className="page-title">Create Translation</h4>

                        <div className="page-title-right">  
                            <ol className="breadcrumb m-0">
                                <li className="breadcrumb-item"><Link to="/">Dashboard</Link></li>
                                <li className="breadcrumb-item"><Link to='/dictionaries'>Translations</Link></li>
                                <li className="breadcrumb-item active">Create Translation</li>
                            </ol>
                        </div>
                        <br/>
                        <hr/>
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