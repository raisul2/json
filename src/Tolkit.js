import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { addUser, deletUser } from './tolkit/user'
const Tolkit = () => {
const dispathc  = useDispatch()
  const userList = useSelector((state)=> state.users.value)

  const [state, setState] = useState({

      id: userList[userList.length - 1].id + 1 ,
      name: "",
      username:""
  })
     
  const onValchange = (e)=>{
    setState({...state, [e.target.name]: e.target.value})
    
  }

  console.log(state)

    const  btnClickadd = () =>{
              
        dispathc(addUser(state))
 
         
    }

const delet =(id) =>{
   
  

  dispathc(deletUser(id))

}
  return (
    <div className='main'>
           <div className="adduser">
           
             
              <input type="text" placeholder='name' value={state.name} name='name' onChange={onValchange} />
              <input type="text" name='username'value={state.username} placeholder='username'
                  onChange={onValchange}
              />
                 <button onClick={btnClickadd} >add user</button>
           </div>
          <div className="displayuser">

           {
             userList.map((item)=>(
                <div className='box' >
                   <h1>{item.name}</h1>
                   <h1>{item.username}</h1>
                   <h3>{item.id}</h3>
                     <input type="text" name='username'value={state.username} placeholder='username'
                  onChange={onValchange}
              
                  />
                  
                  <button>update</button>
                  <button onClick={()=> delet(item.id)}>delet</button>

                </div>
             ))
           }
                
          </div>
    </div>
  )
}

export default Tolkit