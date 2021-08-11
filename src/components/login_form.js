import React, {useReducer, useState, useContext} from 'react'
import userContext from '../context/user-context'
import userReducer from '../Reducers/userReducer'
import { Link } from "react-router-dom";


const Login_form=()=>{
// class Login_form extends React.Component {
    // constructor(props) {
    //   super(props);
    //   handleChange = handleChange.bind(this);
    //   this.state = { first_name:"",
    //   last_name:"",
    
    // index:1
    // }
    
    // }

const {user, dispatch} = useContext(userContext)

const [FirstName, setFirstName]=useState("")
const [LastName, setLastName]=useState("")
const [Phone, setPhone]=useState("")
const [Address, setAddress]=useState("")
const [Confirmation, setConfirmation]=useState("")
const [Summary, setSummary]=useState("")
const [Index, setIndex]=useState(1)

let full
switch(Index){
  case(1):
  full= (FirstName&&LastName)
  break
  case(2):
  full= (Phone&&Address)
  break
  case(3):
  full= (Confirmation&&Summary)
  break
}
console.log("full1:  ",full)

console.log("form>user:  ",user)
// console.log("form>dispatch:  ",dispatch)

  const  saveUser=()=>{
      const user={
        FirstName,
        LastName,
        Phone,
        Address,
        Confirmation,
        Summary
      }
    dispatch({type:'LOGIN',user}) 
    // window.location.href = '/'
   
    }
   const handleChange=(event)=> {
      switch(event.target.className){
      case("first_name"):
       setFirstName( event.target.value);
      break;
      case("last_name"):
       setLastName(event.target.value);
      break;

      case("Phone"):
       setPhone( event.target.value);
      break;
      case("Address"):
       setAddress(event.target.value);
      break;

      case("Confirmation"):
       setConfirmation( event.target.value);
      break;
      case("Summary"):
       setSummary(event.target.value);
      break;

    }
  }
 
    // render() {
      return (
       <div>
         { Index===1&& <div>
          First Name: 
            <input type="text" className="first_name" value={ FirstName} onChange={handleChange} />
            <br/>
            Last Name: 
            <input type="text" className="last_name" value={ LastName} onChange={handleChange} />
            </div>}

            {Index===2&& <div>
              Phone: 
            <input type="text" className="Phone" value={ Phone} onChange={handleChange} />
            <br/>
            Address: 
            <input type="text" className="Address" value={ Address} onChange={handleChange} />
            </div>}

            {Index===3&& <div>
              Confirmation: 
            <input type="text" className="Confirmation" value={ Confirmation} onChange={handleChange} />
            <br/>
            Summary: 
            <input type="text" className="Summary" value={ Summary} onChange={handleChange} />
            </div>}



            <br/>
            
           { Index===3&&full&& <button onClick={()=>{saveUser() }}><Link to='/startShopping'>save</Link></button>}
            

            <br/>
            { Index<3&&<button onClick={()=>{ full?setIndex(Index+1):alert("Please fill in all fields")}}>next</button>}
           { Index>1&& <button onClick={()=>{ setIndex(Index-1)}}>back</button>}
          </div>
      );
    }
  

  export default Login_form