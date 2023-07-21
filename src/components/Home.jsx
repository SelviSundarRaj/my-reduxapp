import {useSelector } from "react-redux";

function Home(){

    const user=useSelector((state)=>state.form);
    return(
        <h1>welcome {user.userName} {user.passWord}</h1>
    )
}
export default Home;