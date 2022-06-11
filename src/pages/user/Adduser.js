import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";
import axios from 'axios'
function Adduser() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");

  const data ={
      name:name,
      email:email,
      phone:phone,
  }
  const navigate = useNavigate();

  function Submit(e){
      e.preventDefault();

      axios.post("http://localhost:8000/users",data)
      .then(navigate("/"))


     

  }
  return (
    <div className="w-screen h-full justify-center items-center">
       <Link to="/" className='flex text-gray-200 bg-gray-500 px-4 mx-96 font-semibold font-Inter py-4 items-center justify-center'>Back To Home</Link>
      <form className="flex flex-col items-center">
        <h1 className="flex justify-center  m-8 text-6xl text-blue-500">
          Enter your Details
        </h1>

        <input
          value={name}
          onChange={(e) => setName(e.target.value)}
          text="text"
          placeholder="Enter Your Name"
          className="w-[70%] bg-white/10 text-4xl tont-Montserrat outline-none py-4 px-10 border-4 border-gray-300 mt-2 ml-16"
        ></input>
        <input
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          text="email"
          placeholder="Enter Your Email"
          className="w-[70%] bg-white/10 text-4xl tont-Montserrat outline-none py-4 px-10 border-4 border-gray-300 mt-2 ml-16"
        ></input>
        <input
          value={phone}
          onChange={(e) => setPhone(e.target.value)}
          text="phone"
          placeholder="Enter Your Phone"
          className="w-[70%] bg-white/10 text-4xl tont-Montserrat outline-none py-4 px-10 border-4 border-gray-300 mt-2 ml-16"
        ></input>
        <button
        onClick={Submit} 
        className="w-[70%] text-4xl tont-Montserrat outline-none py-4 px-10 border-4 border-blue-500 rounded-sm mt-2 font-Montserrat ml-16 bg-blue-500 text-yellow-50">
          Add User Now
        </button>
      </form>
    </div>
  );
}

export default Adduser;
