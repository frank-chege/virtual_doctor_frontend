import { useState } from "react";
import axios from 'axios'

function Login(){
    //states to manage input values
    const [email, ChangeEmail] = useState('')
    const [pwd, ChangePwd] = useState('')
    //data object
    const data = {email, pwd}
    //handle form submission
    const HandleSubmit = (e) => {
        //prevent reload
        e.preventDefault();
        //send data to the backend
        axios.post('http://127.0.0.1:5000/login', JSON.stringify(data), {
            headers: {
                'Content-Type': 'application/json'
            }
        })
        .then(res => console.log(res))
        .catch(error => console.log(console.log(error)
        ))
    };
    return (
        <div>
            <form onSubmit={ HandleSubmit }>
                <label>Email</label>
                <input 
                type="text"
                value={email}
                onChange={(e) => ChangeEmail(e.target.value)}
                />

                <label>Password</label>
                <input 
                type="password"
                value={pwd}
                onChange={(e) => ChangePwd(e.target.value)} />

                <button type="submit">Login</button>
            </form>
            <p>{ email }</p>
            <p>{ pwd }</p>
        </div>
    )
}

export default Login;