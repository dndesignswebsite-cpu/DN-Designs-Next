"use client"
import React, {useEffect, useState} from 'react'
import { useRouter } from "next/navigation";

function page() {


            const router = useRouter();
            let[email, setEmail] = useState("");
            let[password, setPassword] = useState("");


             function sbmt(e){
            e.preventDefault();
            console.log(email, password); 
    
            fetch("api/auth/login",{
                method:"POST",
                headers:{
                    "Content-Type":"application/json"
                },
                body:JSON.stringify({email, password})
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

        



        <button type="submit" className="btn btn-primary text-center">
          SignIn
        </button>
      </form>
    </div>
    
    </div>
  )
}

export default page
