
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { useState } from 'react';
import { formSubmit } from '../actions/counterAction';


function Form(){

  const auth=useSelector((state)=>state.auth);                    // useSlector instead of usestate
    const dispatch=useDispatch();
    const navigate=useNavigate();

  const[user,setUser]=useState({});

  const onInputChange=(e)=>{
     setUser({...user, [e.target.name]:e.target.value})
  }

  const login=()=>{
   dispatch(formSubmit(user))
   navigate('/home')
  }
    

   
    return(
        <>
         <h1>{auth && "welcome" }</h1>
       <div className=' container'>
       <label className=' form-label'>UserName</label>
      <input type="text" className=' form-control' placeholder="Enter Your username" 
        name='userName' value={user.userName} onChange={(e)=>onInputChange(e)} /> <br />
      <label className=' form-label'>Password</label>
      <input type="password" className=' form-control' placeholder="Enter Your password"
         name='passWord' value={user.passWord} onChange={(e)=>onInputChange(e)} />  <br />
          <button onClick={()=>login()}>Submit</button>
       </div>
     
       
      
       
        </>
    )
}
export default Form;