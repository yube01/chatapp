import React from 'react'


const Login = () => {
  return (
    <div className="container">
        <div className="content">
            <span> <div className="title"> Chat App</div></span>
            <span> <div className="title2"> Login</div></span>
        
            <form>

            <input type="email" placeholder='email'/>
            <input type="password" placeholder='password'/>
            
            <button> Login in</button>
        </form>

        <p> You don't have a account?  Register </p>
        
        
        
        </div>
       
    </div>
  )
}

export default Login