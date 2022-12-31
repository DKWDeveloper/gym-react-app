import React from 'react'
import { useState } from 'react';


const mystyle = {
    position: "absolute",
    top: "50%",
    left: "50%",
    transform: "translate(-50%, -50%)"
};

function LocalStorage() {
    const [name, setName] = useState('');
    const [pwd, setPassword] = useState('');

    function handle() {
        localStorage.setItem('Name', name);
        localStorage.setItem('Password', pwd)

        console.log(localStorage);
        console.log("pwd", localStorage)
    }

    function remove() {
        localStorage.removeItem('Name');
        localStorage.removeItem('Password');

    }





    return (
        <div style={mystyle}>
            <h1>LocalStorage</h1>
            <input type="text" value={name} onChange={(e) => setName(e.target.value)} /><br /><br />
            <input type="password" value={pwd} onChange={(e) => setPassword(e.target.value)} /><br /><br />
            <button type='button' onClick={handle}>Submit</button>


            {localStorage.getItem('Name') && (<div>Name: <p>{localStorage.getItem('Name')}</p></div>)}
            {localStorage.getItem('Password') && (<div>Password: <p>{localStorage.getItem('Password')}</p></div>)}
            <div>
                <button onClick={remove}>Remove</button>
            </div>
        </div>
    )
}

export default LocalStorage