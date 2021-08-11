import React , { useEffect,useContext,useReducer, useState } from 'react'
import userContext from '../context/user-context'

const Shopping=(props)=>{
    const {user} = useContext(userContext);
    



    const shopping=()=>{
        if(!user.FirstName){alert("Please sign up first")}
        else{ 
        props.history.push('/startShopping')
        }
    }
    return (<div class="shop-btn">
       <div class="wrapper-shop">
        <button onClick={shopping} class="shopping">Start shopping</button>
    </div>
    </div>)
}

export default Shopping