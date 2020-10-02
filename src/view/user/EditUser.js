import React, { useCallback, useEffect,  useState } from 'react';

/** Components */
import Form from '../../components/forms/Form';

/** Services */
import API from '../../services/api';

const formObj = {
    email: {
        inputType : 'input',
        type : 'text',
        label: 'ელ - ფოსტა *',
        name : 'email',
        required: true,
        value : ''
    },
    name: {
        inputType : 'input',
        type : 'text',
        label: 'სახელი & გვარი',
        name : 'name',
        required: false,
        value : null
    },
    phone: {
        inputType : 'input',
        type : 'number',
        label: 'ტელ. ნომერი',
        name : 'phone',
        required: false,
        value : null
    },
    age: {
        inputType : 'input',
        type : 'number',
        label: 'ასაკი',
        name : 'age',
        required: false,
        value : null
    },
    address: {
        inputType : 'input',
        type : 'text',
        label: 'მისამართი',
        name : 'address',
        required: true,
        value : null
    },
    role_id: {
        inputType : 'select',
        label: 'როლი *',
        name : 'role_id',
        required: true,
        value : 3,
        options : [
            {
                id:1,
                title:'მოსწავლე'
            },
            {
                id:2,
                title:'მასწავლებელი'
            },
            {
                id:3,
                title:'დირექტორი'
            },
            {
                id:4,
                title:'ადმინისტრატორი'
            }
        ]
    }
};

const EditUser = ({ match }) => {

    const [ data , setData ] = useState(null);
    

    const fetchData = useCallback(() => {
            
            API.get(`users/${match.params.id}`).then(res => {

                const resData = res.data.result;
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
                    <div className="col-lg-12">
                        <h1 className="page-header"> </h1>
                    </div>
                    <div className="container-fluid">
                        { data ? <Form formData = { data } module = 'users' method = 'update'  id = {match.params.id}/> : null}
                    </div>
                </div>
            </div>
        </div>
    );
}

export default EditUser;