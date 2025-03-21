import React from 'react'

import Add from "../assets/img.png"

const Login = () => {
  return (
    <div className='form-container'>
        <div className="form-wrapper">
            <span className="logo">Lama Chat</span>
            <span className="title">Login</span>

            <form>
            <input type="email" placeholder="email"/>
                <input type="password" placeholder="password"/>
                
                <button>Sign in</button>
            </form>
            <p>You do not have an account? Register</p>
        </div>
    </div>
  )
}

export default Login
