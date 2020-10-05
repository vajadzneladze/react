import React, { useCallback, useEffect, useState } from 'react';

/** Style */
import './Input.css';

/** CKeditor for textArea */
import CKEditor from '@ckeditor/ckeditor5-react';
import ClassicEditor from '@ckeditor/ckeditor5-build-classic';


const Input = ({ data , onChangeHandler }) => {

    const [ template , setTemplate] = useState(null);

    const drawInputhandler = useCallback(() => {
        let inputTamplate  = ``;
            switch( data.inputType ){

                case 'input':
                    inputTamplate = <div className = 'form-group'>
                            <input 
                                className    = 'form-control'
                                type         = { data.type } 
                                name         = { data.name }
                                defaultValue = { data.value }
                                placeholder  = { data.label}
                                onChange     = { e => onChangeHandler( e.target.value, data.name ) }
                            />
                        </div>
                    break;

                case 'select': 
                    inputTamplate = <div className = 'form-group'>
                            <select 
                                className    = 'form-control' 
                                defaultValue = { data.value ? 1 : 0 } 
                                name         = { data.name } 
                                onChange     = { e => onChangeHandler( e.target.value, data.name ) }>
                                {
                                    data.options.map( item => {
                                        return <option 
                                                    key   = {item.id}  
                                                    value = { item.id } >  { item.title } </option>
                                    })
                                }
                            </select>
                        </div>
                    break;
                
                case 'textarea':
                    inputTamplate = <div className = 'form-group'>
                            <textarea 
                                className    = 'form-control'
                                name         = { data.name } 
                                onChange     = { e => onChangeHandler( e.target.value , data.name) }  
                                defaultValue = { data.value } 
                                placeholder  = { data.label } 
                                rows="5">
                            </textarea>
                        </div>
                    break;

                    case 'file':
                        inputTamplate = <div className = 'form-group'>
                                <input 
                                    type         = { data.type } 
                                    name         = { data.name }
                                    defaultValue = { data.value }
                                    onChange     = { e => onChangeHandler( e.target.files[0], data.name ) }
                                />
                            </div>
                        break;

                case 'CKEditor':
                    inputTamplate = <CKEditor
                                editor   = { ClassicEditor }
                                config   = {
                                            {
                                                ckfinder:{
                                                    uploadUrl:'http://127.0.0.1:800/api/files' 
                                                }
                                            }
                                        }
                                data     = { data.value }
                                onChange = { ( event, editor ) => {
                                    const data2 = editor.getData();
                                    onChangeHandler( data2 , data.name );
                                    // console.log( { event, editor, data } );
                                } }
                                // onInit={ editor => {
                                //     // You can store the "editor" and use when it is needed.
                                //     console.log( 'Editor is ready to use!', editor );
                                // } }
                                
                                // onBlur={ ( event, editor ) => {
                                //     console.log( 'Blur.', editor );
                                // } }
                                // onFocus={ ( event, editor ) => {
                                //     console.log( 'Focus.', editor );
                                // } }
                            />
                    break;

                default:
                    break;
            }

            setTemplate(inputTamplate);
        }, [ data , onChangeHandler])


    useEffect(() => {

        drawInputhandler();

    },[ drawInputhandler])

    return ( template )
}

export default Input;