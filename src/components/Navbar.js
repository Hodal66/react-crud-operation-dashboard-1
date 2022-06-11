import React from 'react'
import { Link } from 'react-router-dom'
import {
  BrowserRouter as Router,
} from "react-router-dom";
function Navbar() {
  return (
      <>
      <Router>
    <div className='w-full h-full bg-blue-600 px-10 py-10 flex flex-row justify-between'>
      <Link to="/" className='text-white text-6xl font-semibold font-montserrat shadow-md shadow-slate-300'>crud</Link >
      <Link to="/add-user" className='bg-white py-5 px-20 text-blue-400 rounded-2xl font-extrabold shadow-blue-100'>Add Users</Link>
    </div>
    </Router>
    </>
  )
}

export default Navbar
