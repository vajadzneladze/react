import React from 'react';
import { Link } from 'react-router-dom';

/** Components */
import Form from '../../components/forms/Form';

const formObj = {
    email: {
        inputType : 'input',
        type : 'email', 
        label: 'ელ-ფოსტა *',
        name : 'email',
        required: true,
        value : null
    },
    working_hours: {
        inputType : 'input',
        type : 'text',
        label: 'სამუშაო საათები', 
        name : 'working_hours',
        required: false,
        value : null
    },
    contact_info: {
        inputType : 'textarea',
        type : 'text',
        label: 'მისამართი', 
        name : 'contact_info',
        required: false,
        value : null
    },
    phone: {
        inputType : 'input',
        type : 'text',
        label: 'ტელეფონი', 
        name : 'phone',
        required: false,
        value : null
    },
};

const CreateContact = ({ match }) => {
    return (
        <div id="wrapper">
            <div id="page-wrapper">
                <div className="row">
                    <div className="col-lg-12 page-title-box">
                        <h4 className="page-title">Create Contact</h4>

                        <div className="page-title-right">  
                            <ol className="breadcrumb m-0">
                                <li className="breadcrumb-item"><Link to="/">Dashboard</Link></li>
                                <li className="breadcrumb-item"><Link to='/contacts'>Contacts</Link></li>
                                <li className="breadcrumb-item active">Create Contact</li>
                            </ol>
                        </div>
                        <br/>
                        <hr/>
                    </div>
                    <div className="container-fluid">
                        <Form formData={formObj}
                            module='contacts'
                            lang = { match.params.lang ? match.params.lang : localStorage.getItem('lang') }
                        />
                    </div>
                </div>
            </div>
        </div>
    );
}

export default CreateContact;