const initialState={};

const formReducer=(state=initialState,action)=>{
  switch(action.type){
    case "SUBMIT":
        return action.payload;
    default:
        return state;
  }  
}
export default formReducer;