import React from 'react'
import { Link } from 'react-router-dom';
const Forgotpassword = () => {
    return (
        <>
            <div className="loginComponent container">
                <form>
                    <h4>Forgot Password</h4>
                    <div class="mb-3">
                        <label for="exampleInputEmail1" class="form-label">Email address</label>
                        <div className='optverification'>
                        <input type="email" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" />
                        <button className='btn btn-secondary'>Send</button>
                        </div>
                    </div>
                    <div class="mb-3">
                        <label for="exampleInputotp" class="form-label">OTP</label>
                        <div className='optverification'>
                        <input type="number" class="form-control" id="exampleInputotp" />
                        <button className='btn btn-secondary'>Verify</button>
                        </div>
                    </div>
                    <div class="mb-3">
                        <label for="exampleInputPassword1" class="form-label">New Password</label>
                        <input type="password" class="form-control" id="exampleInputPassword1" />
                    </div>
                    <Link to="/login">
                    <p className='forgotP'>Login</p>
                    </Link>
                    <button type="submit" class="btn"  style={{backgroundColor:"#299863",color:'#fff'}}>Submit</button>
                </form>
            </div>
        </>
    )
}

export default Forgotpassword