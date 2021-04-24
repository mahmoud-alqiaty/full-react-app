import React, { useState, useContext } from 'react';
import { NavLink } from 'react-router-dom';
import './SignUp.css'

function SignUp() {
    const [fname, setFname] = useState('');
    const [lname, setLname] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const handleSubmit = (e)=>{
        e.preventDefault();
        localStorage.setItem(email,[fname, lname, email, password])
        setFname('');
        setLname('');
        setEmail('');
        setPassword('');
        
    }
    return (
        <div className="sign_up">
            <div></div>
            <form onSubmit={handleSubmit}>
                <input type="text" placeholder="First Name" value={fname} onChange={e=>setFname(e.target.value)} required/>
                <input type="text" placeholder="Last Name" value={lname} onChange={e=>setLname(e.target.value)} required/>
                <input type="email" placeholder="Email" value={email} onChange={e=>setEmail(e.target.value)}required/>
                <input type="password" placeholder="password" value={password} onChange={e=>setPassword(e.target.value)} required/>
                <button type="submit">Sing Up</button>
                <p>Have an account already? <NavLink className="link_item" to="/src/components/Login.js">Login</NavLink></p>
            </form>
        </div>
    )
}

export default SignUp
