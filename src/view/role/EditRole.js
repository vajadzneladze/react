import React, { useCallback, useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

/** Components */
import Form from '../../components/forms/Form';

/** Services */
import API from '../../services/api';

const formObj = {
    title: {
        inputType : 'input',
        type : 'text',
        label: 'სათაური *',
        name : 'title',
        required: true,
        value : null
    },
    description: {
        inputType : 'textarea',
        type : 'text',
        label: 'მოკლე აღწერა',
        name : 'description',
        required: false,
        value : null
    },
};

const EditRole = ({ match }) => {

    const [ data , setData ] = useState(null);
    



    const fetchData = useCallback(() => {
            
            API.get(`roles/${match.params.id}`).then(res => {

                const resData = res.data.data;
                const apiData = { ...formObj };

                if(resData){
                    Object.keys(resData).forEach( item => {
                        if( apiData[item] ){
                            apiData[item].value = resData[item] ? resData[item] : '';
                        }

                    })

                    setData(apiData);
                }

            })
        },
        [ match.params.id ],
    )

    useEffect(() => {

        fetchData();
    }, [ fetchData ])

    return (
        <div id="wrapper">
            <div id="page-wrapper">
                <div className="row">
                    <div className="col-lg-12 page-title-box">
                        <h4 className="page-title">Edit Role</h4>

                        <div className="page-title-right">  
                            <ol className="breadcrumb m-0">
                                <li className="breadcrumb-item"><Link to="/">Dashboard</Link></li>
                                <li className="breadcrumb-item"><Link to='/roles'>Roles</Link></li>
                                <li className="breadcrumb-item active">Edit Role</li>
                            </ol>
                        </div>
                        <br/>
                        <hr/>
                    </div>
                    <div className="container-fluid">
                        {data ? <Form
                            formData={data}
                            module='roles'
                            method='update'
                            id={match.params.id} /> : null}
                    </div>
                </div>
            </div>
        </div>
    );
}

export default EditRole;