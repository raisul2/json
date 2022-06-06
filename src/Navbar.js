import React from 'react'
import { Link } from 'react-router-dom'


 
const Navbar = () => {
 
  

  return (
    <div className=' navbar'>
           <h1>LOGO</h1>

           <div>
              <Link to='/'>All user</Link>
              <Link to='/add'>Add user</Link>
              <Link to='/tol'>TOl</Link>
                 
               <span>Card items: </span>
           </div>
    
    </div>
  )
}

export default Navbar