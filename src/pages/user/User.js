
import React,{useState,useEffect} from 'react'
import { useParams } from 'react-router-dom';
import axios from "axios";
function User() {
  const [myuser,setMyuser]=useState([]);

  useEffect(() =>{
    axios.get(`http://localhost:8000/users/${id}`)
    .then((res)=>{
      setMyuser(res.data);
    })
  })


const {id}=useParams()

  return (
    <>
    <div><h1 className='text-6xl  flex items-center justify-center text-blue-500 border-b-4 border-double'>User Details</h1></div>
    <div className='w-full h-full  flex items-center justify-center pt-10 text-4xl'>
     
      {
        myuser && (
         <>
          
          <div className='w-[700px] h-[300px] flex bg-gray-400  border-4 border-double border-gray-900 mt-24 px-6 py-4'>
            
            <div className='w-5/12 flex flex-col space-y-4'>
            <h2 className='text-gray-600 font-semibold font-Inter border-b-4 border-gray-900'> Name</h2>
            <h2 className='text-gray-600 font-semibold font-Inter border-b-4 border-gray-900'> Email</h2>
            <h2 className='text-gray-600 font-semibold font-Inter border-b-4 border-gray-900'> Phone</h2>
            <h2 className='text-gray-600 font-semibold font-Inter border-b-4 border-gray-900'> Website</h2>
            

            </div>
            <div className='w-5/12 flex flex-col space-y-4'>
            <h2 className='text-gray-600 font-semibold font-Inter border-b-4 border-gray-900'> {myuser.name}</h2>
            <h2 className='text-gray-600 font-semibold font-Inter border-b-4 border-gray-900'> {myuser.email}</h2>
            <h2 className='text-gray-600 font-semibold font-Inter border-b-4 border-gray-900'> {myuser.phone}</h2>
            <h2 className='text-gray-600 font-semibold font-Inter border-b-4 border-gray-900'> {myuser.website}</h2>
         

            </div>
          </div>
          </>
        )
      }
    
    </div>
    </>
  )
}

export default User;