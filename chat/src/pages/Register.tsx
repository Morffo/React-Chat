import React from 'react'

import Add from "../assets/img.png"

const Register = () => {
  return (
    <div className='form-container'>
        <div className="form-wrapper">
            <span className="logo">Lama Chat</span>
            <span className="title">Register</span>

            <form>
                <input type="text" placeholder="username"/>
                <input type="email" placeholder="email"/>
                <input type="password" placeholder="password"/>
                <input type="file" id="file" style={{display: "none"}}/>
                <label htmlFor='file'>
                    <img src={Add} alt="" />
                    <span>Add and avatar</span>
                </label>
                <button>Sign up</button>
            </form>
            <p>You do have an account? Login</p>
        </div>
    </div>
  )
}

export default Register
