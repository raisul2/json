import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { add, remove } from './redux/store/sliceF'
import {Form, Button, Col, Row} from 'react-bootstrap'
import { useCreateBooksMutation,useGetbooksQuery } from './services/post'
import {useNavigate} from 'react-router-dom'


const Card = () => {
const hisory = useNavigate()
   const [createBook, data] = useCreateBooksMutation()

    //  const fetchBooks = useGetbooksQuery()



  const [state, setState] = useState({
     
       id:'',
       name:'',
       email:'' 

  })


 const  onValchange =(e) =>{

 
   setState({...state, [e.target.name]: e.target.value} )
       
 } 


 const createNewbook = async (e) =>{
          
  e.preventDefault()
   
   await createBook(state)
  //  fetchBooks.refetch()

   hisory('/')
   
 }

  const [loading, setLoading] = useState(false)
  const [image, setImage] = useState("")


 const uploadimg =  async e =>{
       
       const files = e.target.files
       const data = new FormData()
       data.append('file', files[0])

       data.append('upload_preset', 'gigiimg')
       setLoading(true)

       const res = await fetch("cloudinary://835546682349337:cyRlucK6KMPVUOsxHQsi4xfgaKI@raiusl")

     
 }

  return (
    <div style={{margin:'100px'}}>

    
    <form onSubmit={createNewbook} style={{display:'flex',flexDirection: 'column' , gap:'10px'}}>

   
 
        <input type="number" value={state.id}  placeholder="number" name='id'  onChange={ onValchange } />
        <input type="text" value={state.name}  placeholder="name"  name='name' onChange={ onValchange } />
        <input type="email"  value={state.email} placeholder="email"  name='email' onChange={ onValchange}  />
        <input type="file" name='file' onChange={uploadimg} />
   
        
        <button  className=" mt-5" >add user </button>
  
  </form>
        
      
     
    
    </div>
  )
}

export default Card