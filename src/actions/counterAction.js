 export const increment=()=>{
    return{
        type:"INCREMENT",
        payload:{},
    }
 }

 export const decrement=()=>{
    return{
        type:"DECREMENT",
        payload:{},
    }
 }

 export const reset=()=>{
    return{
        type:"RESET",
        payload:{},
    }
 }

export const formSubmit=(user)=>{
    return{
        type:"SUBMIT",
        payload:user
    }
}