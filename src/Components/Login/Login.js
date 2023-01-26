import React from 'react'
import './login.css'
import { Link , useHistory } from 'react-router-dom';
import { useState } from 'react';
const Login = () => {
    const history = useHistory();
    const [crediantial, setCrediantial] = useState({
        email: "",
        password: "",
    });
    const onchange = (e) => {
        setCrediantial({ ...crediantial, [e.target.name]: e.target.value });
    };
    const handleclick = (e) => {
        e.preventDefault();
        if(crediantial.email=="student@gmail.com" && crediantial.password=="student"){
            history.push("/studenthome")
        }
    }

    return (
        <>
            <div className="loginComponent container">
                <form onSubmit={handleclick}>
                    <h3>Login</h3>
                    <div class="mb-3">
                        <label for="exampleInputEmail1" class="form-label">Email address</label>
                        <input type="email" class="form-control" id="exampleInputEmail1" 
                        required
                        value={crediantial.email}
                        name="email"
                        onChange={onchange}/>
                    </div>
                    <div class="mb-3">
                        <label for="exampleInputPassword1" class="form-label">Password</label>
                        <input type="password" class="form-control" id="exampleInputPassword1" 
                               required
                               value={crediantial.password}
                               name="password"
                               onChange={onchange}/>
                    </div>
                    <Link to="/forgotpassword">
                    <p className='forgotP'>Forgot password?</p>
                    </Link>
                    
                    <button type="submit" class="btn" style={{backgroundColor:"#299863",color:'#fff'}}>Login</button>
                </form>
            </div>
            </>
    )
}

export default Login