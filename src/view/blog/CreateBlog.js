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
        required: false,
        value : null
    },
    description: {
        inputType : 'CKEditor',
        type : 'text',
        label: 'აღწერა',
        name : 'description',
        required: false,
        value : null
    },
    status: {
        inputType : 'select',
        label: 'სტატუსი',
        name : 'status',
        required: true,
        value : 1,
            options : [
                {
                    id:1,
                    title:'active'
                },
                {
                    id:0,
                    title:'inactive'
                },
            ]
    },
    file: {
        inputType : 'file',
        type : 'file',
        label: 'ფაილის ატვირთვა *',
        name : 'file',
        required: true,
        value : null
    },
    fileId: {
        inputType : 'input',
        type : 'hidden',
        path : '',
        label: '',
        name : 'fileId',
        required: false,
        value : null
    },
};

const CreateBlog = ({ match }) => {
    return (
        <div id="wrapper">
            <div id="page-wrapper">
                <div className="row">
                    <div className="col-lg-12 page-title-box">
                        <h4 className="page-title">Create Post</h4>

                        <div className="page-title-right">  
                            <ol className="breadcrumb m-0">
                                <li className="breadcrumb-item"><Link to="/">Dashboard</Link></li>
                                <li className="breadcrumb-item"><Link to='/blogs'>Blog</Link></li>
                                <li className="breadcrumb-item active">Create Post</li>
                            </ol>
                        </div>
                        <br/>
                        <hr/>
                    </div>
                    <div className="container-fluid">
                        <Form formData={formObj}
                            module='blogs'
                            lang = { match.params.lang ? match.params.lang : localStorage.getItem('lang') }
                        />
                    </div>
                </div>
            </div>
        </div>
    );
}

export default CreateBlog;