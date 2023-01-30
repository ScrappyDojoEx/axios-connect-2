import React from 'react';
import axios from 'axios';

const register_URL = "http://127.0.0.1:8080/register"

export default function Register(){
    const [username, setUsername] = React.useState('');
    const [password, setPassword] = React.useState('');

    const handleUsernameChange = (e) => {
        setUsername(e.target.value);
    }

    const handlePasswordChange = (e) => {
        setPassword(e.target.value);
    }

    const register = () => {
        axios
            .post(register_URL, {
                username: username,
                password: password
            })
            .then((res) => {
                console.log(res.data);
            })
            .catch(error => {console.log(error)})
    }

    return(
        <>
            <table>
                <tr>
                    <td>Username:</td>
                    <td><input type = "text" onChange = {handleUsernameChange} /></td>
                </tr>

                <tr>
                    <td>Password:</td>
                    <td><input type = "password" onChange = {handlePasswordChange}/></td>
                </tr>
            </table>

            <button onClick = {() => {register()}}>Register</button>
        </>
    );
}