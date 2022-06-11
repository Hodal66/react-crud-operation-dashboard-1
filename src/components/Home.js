import React, { useState, useEffect } from "react";
import axios from "axios";
import { Link } from "react-router-dom";

export default function Home() {

  const [myuser, setMyuser] = useState([]);

  const loadUsers = () => {
    axios.get("http://localhost:8000/users").then((res) => {
      setMyuser(res.data.reverse());
    });
  };
  useEffect(() => {
    loadUsers();
  },);
     // Now Delete data
  function Delete(id){
    axios.delete(`http://localhost:8000/users/${id}`)
    .then(
      loadUsers()
      );
  }
 

  return (
    <div className="w-full h-full flex flex-col py-10 px-8 ">
      <h1 className=" text-center font-extrabold text-5xl py-6 text-gray-700">
        Home page
      </h1>
      <div className="flex font-Montserrat w-[90%] justify-center items-center ml-20">
        <table className="w-full text-center overflow-hidden overflow-y-scroll">
          <thead className="bg-gray-800 text-white w-full ">
            <tr className=" flex justify-around py-5">
              <th>#</th>
              <th>Name</th>
              <th>Email</th>
              <th>Phone</th>
              <th className="w-1/4">Action</th>
            </tr>
          </thead>
          <tbody>
            {myuser.map((data, index) => (
              <tr
                className="flex justify-around py-5 border-b-4 border-gray-800 text-gray-400"
                key={index}
              >
                <td>{index + 1}</td>
                <td>{data.name}</td>
                <td>{data.email}</td>
                <td>{data.phone}</td>
                <td className="flex justify-center space-x-4 whitespace-nowrap">
                  <Link
                    to={`/users/${data.id}`}
                    className=" bg-gray-700 rounded-xl px-6 py-2"
                  >
                    View
                  </Link>
                 <Link to={`/edit-user/${data.id}`} className="bg-blue-500 text-white rounded-xl px-6 py-2">
                   Edit
                 </Link>

                  <button onClick={()=>Delete(data.id)} className="bg-red-500 text-white rounded-xl px-3 py-2">Delete</button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}
