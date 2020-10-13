import React, { useCallback, useEffect,  useState } from 'react';
import { Link } from 'react-router-dom';

/** Components */
import Form from '../../components/forms/Form';

/** Services */
import API from '../../services/api';


const formObj = {
    first_name: {
        inputType : 'input',
        type : 'text', 
        label: 'სახელი',
        name : 'first_name', 
        required: false,
        value : null
    },
    last_name: {
        inputType : 'input',
        type : 'text', 
        label: 'გვარი',
        name : 'last_name',
        required: false,
        value : null
    },
    company: {
        inputType : 'input',
        type : 'text', 
        label: 'კომპანია',
        name : 'company',
        required: false,
        value : null
    },
    position: {
        inputType : 'input',
        type : 'text', 
        label: 'პოზიცია',
        name : 'position',
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

const EditFeedback = ({ match }) => {

    const [ data , setData ] = useState(null);
    

    const fetchData = useCallback(() => {
            
            let lang = match.params.lang ? match.params.lang : 'ge';


            API.get(`${lang}/feedbacks/${match.params.id}`).then(res => {

                const resData = res.data.data; 
                const apiData = { ...formObj };
  
                if(resData){
                    Object.keys(resData).forEach( item => {
                        if (apiData[item]) {
                            apiData[item].value = resData[item] ? resData[item] : '';
                                              
                        }

                        if (item === 'file_id') {
                            apiData['fileId'].value = resData[item] ? resData[item] : '';
                            apiData['fileId'].path = resData.img.path ? resData.img.path : '';
                        }
                    })

                    setData(apiData);
                }

            })
        },
        [ match.params.id , match.params.lang ],
    )
    
    useEffect(() => {

        fetchData();
    }, [ fetchData ])

    return (
        <div id="wrapper">
            <div id="page-wrapper">
                <div className="row">
                    <div className="col-lg-12 page-title-box">
                        <h4 className="page-title">Edit feedback</h4>

                        <div className="page-title-right">  
                            <ol className="breadcrumb m-0">
                                <li className="breadcrumb-item"><Link to="/">Dashboard</Link></li>
                                <li className="breadcrumb-item"><Link to='/feedbacks'>Feedbacks</Link></li>
                                <li className="breadcrumb-item active">Edit feedback</li>
                            </ol>
                        </div>
                        <br/>
                        <hr/>
                    </div>
                    <div className="container-fluid">
                        { data ? <Form 
                                    formData = { data } 
                                    module = 'feedbacks' 
                                    method = 'update'  
                                    id = {match.params.id}
                                    lang = {match.params.lang }
                                    
                                    /> : null}
                    </div>
                </div>
            </div>
        </div>
    );
}

export default EditFeedback;