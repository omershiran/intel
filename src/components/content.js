import React , { useEffect,useContext,useReducer, useState } from 'react'

import userContext from '../context/user-context'


   
const Content =()=>{
    
    const {user} = useContext(userContext);
    
    
   
return(
    <div class="right-col">
    <div class="content-wrapper">
      <h1 class="content-text">{!user.FirstName?"Content":"TBD"}</h1>
    </div>
  </div>
)
}
export default Content