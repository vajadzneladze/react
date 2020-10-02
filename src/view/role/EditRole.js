import React, { useCallback, useEffect,  useState } from 'react';

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
                        { data ? <Form formData = { data } module = 'roles' method = 'update'  id = {match.params.id}/> : null}
                    </div>
                </div>
            </div>
        </div>
    );
}

export default EditRole;