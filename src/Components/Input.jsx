import React from 'react'
import Img from "../Image/img.png"

import Attached from "../Image/Attached.jpg"
const Input = () => {
  return (
    <div className="input">
      <input type="text" placeholder='Type something' />
      <div className="send">
        <img src={Attached} alt="" />
        <input type="file" style={{display:"none"}} id="file" />
        <label htmlFor="file">
          <img src={Img} alt="" />
        </label>
        <button> Send </button>
        </div>
    </div>
  )
}

export default Input