import React from 'react'

const Search = () => {
  return (
    <div className='search'>
      <div className="searchForm">
        <input type="text" placeholder='find a user'/>
      </div>
      <div className="userChat">
        <img src="https://images.ctfassets.net/h6goo9gw1hh6/2sNZtFAWOdP1lmQ33VwRN3/24e953b920a9cd0ff2e1d587742a2472/1-intro-photo-final.jpg?w=1200&h=992&fl=progressive&q=70&fm=jpg" alt="" />
        <div className="userChatInfo">
            <span>Jane</span>
        </div>
      </div>
    </div>
  )
}

export default Search
