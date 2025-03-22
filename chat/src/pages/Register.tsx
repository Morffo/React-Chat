import React, { useState } from 'react'

import Add from "../assets/img.png"
import { createUserWithEmailAndPassword } from "firebase/auth";
import {auth} from "../firebase"

const Register = () => {
    const [err, setErr] = useState(false)
    const handleSubmit = async (e) => {
        
        e.preventDefault()
        const displayName = e.target[0].value;
        const email = e.target[1].value;
        const password = e.target[2].value;
        const file = e.target[3].files[0];


        try {

        
        const res = await createUserWithEmailAndPassword(auth, email, password)
        }catch(err){
            setErr(true)

        }
    }

  return (
    <div className='form-container'>
        <div className="form-wrapper">
            <span className="logo">Lama Chat</span>
            <span className="title">Register</span>

            <form onSubmit={handleSubmit}>
                <input type="text" placeholder="username"/>
                <input type="email" placeholder="email"/>
                <input type="password" placeholder="password"/>
                <input type="file" id="file" style={{display: "none"}}/>
                <label htmlFor='file'>
                    <img src={Add} alt="" />
                    <span>Add and avatar</span>
                </label>
                <button>Sign up</button>
                {err && <span>Something went wrong, sorry</span>}
            </form>
            <p>You do have an account? Login</p>
        </div>
    </div>
  )
}

export default Register
