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
    youtube: {
        inputType : 'input',
        type : 'text', 
        label: 'ვიდეოს წყარო',
        name : 'youtube',
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
                    title:'აქტიური'
                },
                {
                    id:0,
                    title:'შეჩერებული'
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

const CreateSlide = ({ match }) => {
    return (
        <div id="wrapper">
            <div id="page-wrapper">
                <div className="row">
                    <div className="col-lg-12">
                        <h1 className="page-header"> </h1>
                    </div>
                    <div className="container-fluid">
                        <Form formData={formObj}
                            module='slides'
                            lang = { match.params.lang ? match.params.lang : localStorage.getItem('lang') }
                        />
                    </div>
                </div>
            </div>
        </div>
    );
}

export default CreateSlide;