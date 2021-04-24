import React, { useState, useContext } from 'react';
import { NavLink } from 'react-router-dom';
import { AuthContext } from './AuthContext';
import './Login.css'

function Login() {
    const [email, setEmail] = useState()
    const [password, setPassword] = useState()
    const {acceptedFname, setAcceptedFname, acceptedLname, setAcceptedLname, acceptedEmail, setAcceptedEmail, accepted, setAccepted, loginError, setLoginError} = useContext(AuthContext)


    const handleLogin = (e)=>{
        e.preventDefault();

        for(let i=0; i<localStorage.length; i++){
            
            if(localStorage.key(i)===email){
                let x = localStorage.getItem(localStorage.key(i));
                if(x.split(",")[3]===password){
                    setAccepted(true);
                    setLoginError('');
                    setAcceptedFname(x.split(",")[0]);
                    setAcceptedLname(x.split(",")[1])
                    localStorage.setItem('loginFName', x.split(",")[0])
                    localStorage.setItem('loginLName', x.split(",")[1])
                    break;
                } else{
                    setLoginError('password is incorrect');
                }
                break;
                
            } else{
                setAccepted(false);
                setLoginError(`The Acoount is not found ..!, may be
                the entered Email or password is incorrect`);
            }
        }
        
    }
    return (
        accepted?   <h1>wellcome</h1>:
                    <div className="login_form">
                        <form onSubmit={handleLogin}>
                            <p>{loginError}</p>
                            <input type="email" placeholder="Email" onChange={e=>setEmail(e.target.value)}/>
                            <input type="password" placeholder="Password" onChange={e=>setPassword(e.target.value)}/>
                            <div className="checkbox_part">
                                <input type="checkbox" />
                                <label>Remember Me</label>
                            </div>
                            <button type="submit">Login</button>
                            <p>Haven't an account ? <NavLink className="link_item" to="/src/components/SignUp.js">Sign Up</NavLink> </p>
                        </form>
                    </div>


        )
}

export default Login
