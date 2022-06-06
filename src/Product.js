import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { featchProducts, STATUS } from './redux/store/productslice'
import { add } from './redux/store/sliceF'
import {Table} from 'react-bootstrap'
import { useDeletBooksMutation, useGetbooksQuery , useUserLoginMutation} from './services/post'
import { setToken } from './services/authSlice'

 
const Product = () => {

  const dispatch = useDispatch()

     const {data =[] , isLoading, isError} = useGetbooksQuery()
const [userLogin] = useUserLoginMutation()
     const [deletBook, {isLoading:loading, isError:error} ] = useDeletBooksMutation()
       

      if (isLoading) return <h1 style={{marginTop:'200px'}}>loading....</h1>
           


// const dispatch = useDispatch()
    


//     useEffect(() => {
      
    


        // const fetchProducts = async () =>{
        //     const res = await fetch('http://localhost:4000/students')

        //     const data = await res.json()
              
        //   setProduct(data)
        // }

        //  fetchProducts()

 
    // }, [])




// if (status === STATUS.LOADING) {
    
//        return <h2>loading.....</h2>
// }
// if (status === STATUS.ERROR) {
    
//        return <h2>somthing worng.....</h2>
// }



  return (
    <div>
    <Table striped bordered hover size="sm">
  <thead>
    <tr>
      <th>id</th>
      <th>Name</th>

      <th>Email</th>
      <th>img</th>
      <th>button</th>
    </tr>
  </thead>
  <tbody>


  
  {
    data.map((item)=>(
      <tr>
      <td>{item.id}</td>
      <td>{item.name}</td>
      <td>{item.email}</td>
      <td><img src={item.img} alt="" /> </td>

      <td><button onClick={()=> deletBook(item.id)}  className='btn btn-danger'>delete</button> </td>
      </tr>
    ))
  }
 

 
  </tbody>
</Table>

 
      <button onClick={ async()=>{
       await userLogin({email: 'raisul#gmail.com', password:"123456"})
       dispatch(setToken('dskjfoewdsfds'))
      }}  className=' btn btn-primary'>login</button>

    </div>
  )
}

export default Product