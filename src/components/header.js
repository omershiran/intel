import React , { useEffect,useContext,useReducer, useState } from 'react'
import userContext from '../context/user-context'
import { Link } from "react-router-dom";
import logo from '../logo.svg';


const Header=()=>{

    const {user} = useContext(userContext);

console.log("header>user:  ",user)

    // return (<div style={{
    //     backgroundColor:"lightblue",
    //     display: "flex",
    //     flexDirection: "row",
        
    //     justifyContent: "space-between"
    //     }}>
    //     <Link to="/Login-form" > <img src={logo}  alt="logo" width="50" height="50" /></Link> 
    //     <div>Wine Online</div>  
    //       <div>{user.FirstName&&user.FirstName}</div>hello 

    // </div>)

return(
    <div className="header">
    <div className="header-wrapper">
        <div className="left">
          <p className="left-wrapper">LOGO</p>
        </div>
        <div className="center">
          <p className="wine-text">WINE ONLINE</p>
        </div>
        <div className="right">
          <p className="right-wrapper">Hello {user.FirstName&&user.FirstName}</p>
        </div>
      </div>
      </div>
)



}

export default Header