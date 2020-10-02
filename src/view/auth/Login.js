import React, { useEffect, useState } from 'react';

/** Service */
import API from '../../services/api';

/** Redux */
import { useDispatch } from 'react-redux';

const Login = ({ history }) => {

    const [ email , setEmail ] = useState('');
    const [ password , setPassword ] = useState('');

    const dispatch = useDispatch();

    const submitHandler = e => {
        e.preventDefault();

        const user = {
            email:email,
            password:password
        };
        
        API.post(`auth/login` , user)
        .then( res => {
            const data = res.data;

            if(data && data.access_token){

                localStorage.setItem('access_token',data.access_token);
                window.location.href = '/';
            }
        })
        .catch(err =>{
            console.log(err.message);
        })
    }

    useEffect(() => {
        
        const token = localStorage.getItem('access_token');

        if(token){
            window.location.href = '/'
        }
    }, [ history , dispatch ])
    

    return (
        <div className="container">
            <div className="row">
                <div className="col-md-4 col-md-offset-4">
                    <div className="login-panel panel panel-default">
                        <div className="panel-heading">
                            <h3 className="panel-title">Please Sign In</h3>
                        </div>
                        <div className="panel-body">
                            <form onSubmit = { submitHandler }>
                                <fieldset>
                                    <div className="form-group">
                                        <input className="form-control" required placeholder="E-mail" name="email" type="email" onChange = { e => setEmail(e.target.value) } autoFocus />
                                    </div>
                                    <div className="form-group">
                                        <input className="form-control" required placeholder="Password" name="password" type="password" onChange = {  e => setPassword(e.target.value)}  />
                                    </div>
                                    <button className="btn btn-lg btn-success btn-block">Login</button>
                                </fieldset>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Login;