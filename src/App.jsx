import Header from "./components/Header.jsx";
import Results from "./components/Results.jsx";
import UserInput from "./components/UserInput.jsx";
import { useState } from "react";
export default function App(){
    const [userInput,setUserinput] = useState({
        initialInvestment:10000,
        annualInvestment:1000,
        expectedReturn:10,
        duration:10
    });
    function handleChange(event){
        console.log(event);
        var name = event.target.name;
        var value = event.target.value;
        setUserinput(prevState=>{
            return{
                ...prevState,
                [name] :+value
            }
        })
        console.log(userInput)
    }
    const inputIsValid = userInput.duration >= 1;
    return(
        <>
            <Header></Header>
            <UserInput onChangeInput={handleChange} initialState={userInput}></UserInput>
            {inputIsValid && <Results input={userInput}></Results>}
            {!inputIsValid && <p className="center">Please enter a duration greater than zero....!</p>}
        </>
    )
}