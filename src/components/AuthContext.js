import React, { createContext, useState, useEffect } from 'react';
export const AuthContext = createContext();

function AuthContextProvider(props) {
    const [acceptedFname, setAcceptedFname] = useState('');
    const [acceptedLname, setAcceptedLname] = useState('');
    const [acceptedEmail, setAcceptedEmail] = useState('');
    const [password, setPassword] = useState('');
    const [accepted, setAccepted] = useState(false)
    const [loginError, setLoginError] = useState('')
    const [loginAccount, setLoginAccount] = useState('')

    useEffect(() => {
        if(localStorage.getItem('loginFName')) {
            setAccepted(true);
            setAcceptedFname(localStorage.getItem('loginFName'))
            setAcceptedLname(localStorage.getItem('loginLName'))
        }
    }, [])

    console.log(localStorage)

    return (
        <AuthContext.Provider value={{acceptedFname, setAcceptedFname, acceptedLname, setAcceptedLname, acceptedEmail, setAcceptedEmail, accepted, setAccepted, loginError, setLoginError, loginAccount, setLoginAccount}}>
            {props.children}
        </AuthContext.Provider>
    )
}

export default AuthContextProvider
