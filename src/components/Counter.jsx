import { useDispatch, useSelector } from 'react-redux';
import { decrement, increment } from '../actions/counterAction';



function Counter(){
    const counter=useSelector((state)=>state.counter); 
    const dispatch=useDispatch();
    return(
        <>
      <h2>Counter App</h2>
       <h4>{counter}</h4>
       
       <button onClick={()=>dispatch(increment())}>Increment</button>
       <br/>
       <button onClick={()=>dispatch(decrement())}>Decrement</button>
    
        </>
    )
}
export default Counter