import React, { useEffect, useState } from 'react';

/** ui-components */
import Input from '../ui-components/input/Input';

/** Services */
import API from '../../services/api';
import { formObjToPostData } from '../../services/dataHandlerServices';


const Form = ({ formData , module , method = 'store' , id = 1 , lang = ''}) => {

    const [ data , setData ] = useState(null);


    const onChangeHandler = ( val, name ) => {

        if( name !== 'file'){
            setData({
                ...data,
                [ name ]: {
                    ...data[name],
                    value:val
                }
            })
        } else {

            let formData = new FormData();
            
            formData.append('file',val);
            formData.append('module',module)

            API.post('files',formData, {
                headers: {
                    "Content-Type": "multipart/form-data",
                }
            }).then(res => {
                const file = res.data;
                setData({
                    ...data,
                    fileId: {
                        ...data['fileId'],
                        value:file.id,
                        path: file.path
                    }
                })
                alert('სურათი ატვირთულია')
            }).catch(err => {
                alert('ფაილი არ აიტვირთა')
            })

        }
    }   

    const submitHandler = e => {
        e.preventDefault();

        let postData = formObjToPostData(data);
        let prefix = lang? `${lang}/`:'';

        if( method === 'store'){

            API.post(`${prefix}${module}`,postData).then(res => {
                alert('წარმატებით დაემატა');
            }).catch(err => {
                alert('ჩანაწერის დამატება ვერ მოხერხდა')
            })
        }

        if( method === 'update' ){

            API.patch(`${prefix}${module}/${id}`,postData).then(res => {
                alert('წარმატებით განახლდა')
            }).catch(err => {
                alert('ჩანაწერის არ შეინახა')
            })
        }
        
    }

    useEffect(() => {
        setData({ ...formData });
    }, [ formData ])


    return (
        <div className="row">
            <div className="col-lg-5"> 
                <h4 className = 'text-center'> ყურადღებით შეავსეთ ყველა აუცილებელი (*) ველი </h4>
                <hr/>
                <form className = 'text-center customFormStyle' onSubmit = { submitHandler }>
                    {
                        data ? 
                            Object.keys(data).map( item => {

                                return <Input data = { data[item] } key = { item }  onChangeHandler = { onChangeHandler }/>
                            }) : null
                    }
                    <button type = 'submit' className = 'btn btn-primary form-control'> გაგზავნა </button>
                </form>
            </div>
        </div>
    );
}


export default Form;