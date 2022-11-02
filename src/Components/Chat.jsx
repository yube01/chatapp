import React from 'react'
import Cam from "../Image/cam.png"
import Add from "../Image/add.png"
import More from "../Image/more.png"
import Msgs from "./Msgs"
import Input from "./Input"

const Chat = () => {
  return (
    <div className="chat">
      <div className="chatInfo">
        <span> Yube</span>
        <div className="chatIcons">
          <img src={Cam} alt="" />
          <img src={ Add} alt="" />
          <img src={ More} alt="" />
          
        </div>
      
        
      </div>
        <Msgs/>
        <Input/>
      
            
    </div>
  )
}

export default Chat