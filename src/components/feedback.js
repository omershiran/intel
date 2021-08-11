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
        <div class="wrapper">
        <button onClick={logout}>Reset</button>
        </div>
        <br/>
        <br/><br/><br/><br/><br/>
        <br/><br/><br/><br/><br/>
        <button onClick={()=>{alert(`
        לצורך גילוי נאות, כמו שאמרתי בראיון את ה CSS  אני לא עושה בעצמי, וגם כאן לא עשיתי בעצמי 
        את ה JSX, REACT & JS אני עשיתי
        כולל הטמעת ה css בקוד הנוכחי
        `)}}>גילוי נאות</button>
        </div>
      </div>
       
        )
}

export default Feedback