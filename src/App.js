import React, { useEffect, useState } from 'react'
import  axios from 'axios'
import Baseuel from './Baseuel'
import Product from './Product'
import {default as api} from './store/rtk'
import {useForm} from 'react-hook-form'
const App = () => {

//     const [students, setStudents] = useState([])
//   const [setStatus, setSetStatus] = useState()
//   // eslint-disable-next-line react-hooks/exhaustive-deps

//     useEffect(() => {
      
     
//         getAllstudent()
     


//     }, [])
    
//   async function getAllstudent(params) {
//       try {
//         const student = await axios.get("http://localhost:4000/students")
//         setStudents(student.data)
//          console.log(student.data)
//       } catch (error) {
//          console.log('somting is worng')
//       }     
//   }
 

//   const [adding, setAdding] = useState({
//     name:"",
//     email:""
//   })

//   function onTextCange(e) {
    
//       setAdding({
//         ...adding,
//         [e.target.name]: e.target.value
//       })
//   }

//  async function onFromsubmit(e) {
        
//       e.preventDefault()

//       try {
//          await axios.post("http://localhost:4000/students", adding)
//         setSetStatus(true)
//       } catch (error) {
//          console.log('somting is worng')
//       }  


//   }


//    if (setStatus) {
//         return <App/>
//    }

const { data, isSuccess, isFetching, isLoading, isError, refetch }  =  api.useGetCategoriesQuery()




const [addTranstion] = api.useAddTranstionMutation()
const [deletTranstion] = api.useDeletTranstionMutation()
const [updateTranstion] = api.useUpdateTranstionMutation()

const { register, handleSubmit , resetField  } = useForm()


const onSubmit = async (data)=>{
 
  if(!data) return{}
  await addTranstion(data).unwrap()
    
 
  console.log(data)

}
const delet = async ()=>{
 
  await deletTranstion(0)
      

}

const uda ={
  "id":'2',
   "name":"raiusl",
   "email":'riausl@gmail.com'
}

const update = async ()=>{
 
  await updateTranstion(uda)
      

}

let YOYO

  if(isLoading){
    YOYO =<div>loadin...</div>
  }
  if(isFetching){
   YOYO= <div>fetching..</div>
  } 
    
  if(isError) {

   YOYO = <div>error...</div>
  } 
  if(isSuccess) {
    

YOYO = data.map((item)=>(<h1>{item.name}, {item.id}</h1>))

  } 





console.log(data)
  return (
    <div>
       
       <form  onSubmit={handleSubmit(onSubmit)} >
        
         <input type="text"  {...register('name')}   />
         <input type="text"  {...register('email')}    />
       <button>add</button>
       </form>
    <button onClick={delet}>delet</button>
    <button onClick={update}>update</button>
   


    

    {
     YOYO
    }

   

    </div>
  )
}

export default App