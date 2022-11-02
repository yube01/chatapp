import React from 'react'
import Pic from "../Image/pic1.png"

const Register = () => {
  return (
    <div className="container">
        <div className="content">
            <span> <div className="title"> Chat App</div></span>
            <span> <div className="title2"> Register</div></span>
        
            <form>
            <input type="text" placeholder='display name'/>
            <input type="email" placeholder='email'/>
            <input type="password" placeholder='password'/>
            <input style ={{display:'none'}}type="file"  id = "file"/>
            <label htmlFor="file">
                <img src={Pic} alt="" />
                <span> Add image</span>
            </label>
            
            <button> Sign up</button>
        </form>

        <p> You have a account?   Login </p>
        
        
        
        </div>
       
    </div>
  )
}

export default Register