import React , { useEffect,useContext,useReducer, useState } from 'react'
import { Link } from "react-router-dom";
import userContext from '../context/user-context'

const Login=(props)=>{
    const {user} = useContext(userContext);

    const Signup=()=>{
        props.history.push('/Login-form')
    }

    return (  <div class="login-btn">
    <div class="wrapper">
        <button disabled={user.FirstName} onClick={Signup}>Signup</button>
        {/* <button disabled={true} ><Link to="/Login-form">Signup</Link></button> */}

        </div></div>)
}

export default Login