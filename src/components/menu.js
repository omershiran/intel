import React from 'react'
import Login from './login'
import Shopping from './shopping'
import Feedback from './feedbackButton'
import { useHistory } from 'react-router';



const Menu=()=>{

    const history = useHistory();
    return(
    <div>
    
<Login history={history}/>
<Shopping history={history}/>
<Feedback history={history}/>
    </div>
)

}


export default Menu