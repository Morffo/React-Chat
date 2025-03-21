import React from 'react'
import cam from "../assets/cam.png"
import more from "../assets/more.png"
import add from "../assets/add.png"
import Messages from './Messages'
import Input from './Input'

const Chat = () => {
  return (
    <div className='chat'>
      <div className="chatInfo">
        <span>Jane</span>
        <div className="chatIcons">
            <img src={cam} alt="" />
            <img src={add} alt="" />
            <img src={more} alt="" />
        </div>
      </div>
      <Messages />
      <Input />

    </div>
  )
}

export default Chat
