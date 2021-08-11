import React , { useEffect,useContext,useReducer, useState } from 'react'
import userContext from '../context/user-context'


const Feedback=(props)=>{
    const {user} = useContext(userContext);

    const feedback=()=>{
        if(!user.FirstName){alert("Please sign up first")}
        else{
        props.history.push('/feedback')
        }
    }
    return (<div class="wrapper">
         <button onClick={feedback} >feedback</button>
    
    </div>)
}

export default Feedback

