import {BrowserRouter as Router,Routes,Route } from "react-router-dom";
import{ Login } from "../components/Login/Login";
import { Home } from "../components/Home/Home"
import { Signup } from "../components/SignUp/SignUp";
import { auth } from "../firebase";
import { useState } from "react";
import { useEffect } from "react";


export function MyRoutes() {

    const [UserName, setUserName]=useState([])
    useEffect(()=>{
        auth.onAuthStateChanged((user)=> { if(user){
            setUserName(user.displayName)
        } else setUserName("")
    })
    },[])

    return ( 
        <Router>
            <Routes>
                <Route exact path="/" element={<Home name={UserName}/>} />
                <Route exact path="/login" element={<Login />} />
                <Route exact path="/signup" element={<Signup />} />

            </Routes>
        </Router>
     );
}

