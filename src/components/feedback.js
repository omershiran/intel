import React, {useReducer, useState, useContext} from 'react'

import userContext from '../context/user-context'



const Feedback=()=>{
    const {user, dispatch} = useContext(userContext)
const logout=()=>{
    dispatch({type:'LOGOUT'})
}
    return(
        <div class="right-col">
        <div class="content-wrapper">
        <button onClick={logout}>Reset</button>
        </div>
      </div>
       
        )
}

export default Feedback