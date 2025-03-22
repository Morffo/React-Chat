import React from 'react'

const Message = () => {
  return (
    <div className='message owner'>
        <div className="messageInfo">
            <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQksR3Lt2Iy2rlmUKvJmc27GcXpe297gINhTA&s" alt="" />
            <span>just now</span>
        </div>
         <div className="messageContent">
            <p>Hello</p>
            <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQksR3Lt2Iy2rlmUKvJmc27GcXpe297gINhTA&s" alt="" /> 
         </div>
    </div>
  )
}

export default Message
