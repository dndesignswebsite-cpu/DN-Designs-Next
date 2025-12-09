"use client"
import React, {useEffect, useState} from 'react'
import { useRouter } from "next/navigation";


function TestCompApi() {
    const router = useRouter();
    let[name, setName] = useState('');
    let[email, setEmail] = useState("");
    let[password, setPassword] = useState("");
    let[role, setRole] = useState("user");
   

    function sbmt(e){
        e.preventDefault();
        console.log(name, email, password, role); 

        fetch("api/auth/register",{
            method:"POST",
            headers:{
                "Content-Type":"application/json"
            },
            body:JSON.stringify({name, email, password, role})
        })
        .then((res)=>{
            return res.json();
        })
        .then((data)=>{
            console.log(data);
            localStorage.setItem('token', data.token);
             router.push('/dashboard');
        })

    }

  return (
    <div>
    <div className="container mt-5">
      <form className="text-center" onSubmit={sbmt}>

        <div className="form-group my-4">
          <input
            type="text"
            className="form-control"
            placeholder="name"
            onChange={(e) => {
              setName(e.target.value);
            }}
            value={name}
          />
        </div>

        <div className="form-group my-4">
          <input
            type="email"
            className="form-control"
            placeholder="email"
            onChange={(e) => {
              setEmail(e.target.value);
            }}
            value={email}
          />
        </div>

         <div className="form-group my-4">
          <input
            type="password"
            className="form-control"
            placeholder="Password"
            onChange={(e) => {
              setPassword(e.target.value);
            }}
            value={password}
          />
        </div>

         

       


        <div className="form-group my-4">
          <select id="role" name="role" value={role} onChange={(e)=>{setRole(e.target.value)}}>
    <option value="admin">Admin</option>
    <option value="user">User</option>
    <option value="admin">admin</option>
      </select>
        </div>






        <button type="submit" className="btn btn-primary text-center">
          Signup
        </button>
      </form>
    </div>
    </div>
  )
}

export default TestCompApi
