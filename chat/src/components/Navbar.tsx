import React from 'react'

const Navbar = () => {
  return (
    <div className='navbar'>
        <span className="logo">Lama chat</span>
        <div className="user">
            <img src="https://images.ctfassets.net/h6goo9gw1hh6/2sNZtFAWOdP1lmQ33VwRN3/24e953b920a9cd0ff2e1d587742a2472/1-intro-photo-final.jpg?w=1200&h=992&fl=progressive&q=70&fm=jpg" alt="" />
            <span>John</span>
            <button>logout</button>
        </div>
    </div>
  )
}

export default Navbar
