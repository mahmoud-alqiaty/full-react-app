import React, { useState, useEffect, useContext} from 'react';
import { NavLink } from 'react-router-dom';
import { AuthContext } from './AuthContext';
import "./Navbar.css";

function Navbar() {
    const [manu_icon, setManu_icon] = useState();
    const [listShow, setListShow] = useState(false)
    useEffect(() => {
        if(window.innerWidth < 786) {setManu_icon(true)}
        else {setManu_icon(false)}
    }, [])

    window.addEventListener('resize', ()=>{
        if(window.innerWidth < 686) {setManu_icon(true)}
        else {setManu_icon(false)}
    })
   

    const handleIconShow = ()=>{
        setListShow(!listShow)
    }

    const hideList = ()=>{
        setListShow(false)
    }

    const {acceptedFname, acceptedLname, acceptedEmail, setAcceptedEmail, accepted, setAccepted} = useContext(AuthContext);
    const handleLogOut = ()=>{
        if(localStorage.getItem('loginFName')) {
          localStorage.removeItem('loginFName');
          setAccepted(false);
        }
    }

    return (
        <>
            <nav className="navbar">
                <div className="navbar-container">
                    <div onClick={hideList}>
                        <NavLink to="/" className="navbar-logo" >
                            TRVL <i className="fas fa-rocket"></i>
                        </NavLink>
                    </div>

                    <ul className={listShow? "nav-list":"nav-list hiden"}>
                            <li><NavLink exact to="/" className="nav-item" onClick={hideList}>Home</NavLink></li>
                            <li><NavLink to="/Services"  className="nav-item"  onClick={hideList}>Services</NavLink></li>
                            <li><NavLink to="/Products"  className="nav-item" onClick={hideList}>Products</NavLink></li>
                        </ul>

                     <div className="login">
                        {accepted? <p><i>{acceptedFname} {acceptedLname} </i><button onClick={handleLogOut}>Log Out</button></p> : <button><NavLink className="link_item" to="/src/components/Login.js">Login</NavLink></button>}
                    </div>
                    
                    <div onClick={handleIconShow} className={`menu-icon ${manu_icon? "showed" : "hidden"}`}>
                        <i className= {listShow? "fas fa-times":"fas fa-bars"} />
                    </div>                   
                </div>
            </nav>
        
        </>
        
    )
}

export default Navbar
