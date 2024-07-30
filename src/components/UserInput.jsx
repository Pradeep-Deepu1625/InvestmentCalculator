import { useState } from "react"

export default function UserInput({onChangeInput,initialState}){
    // const [userInput,setUserinput] = useState({
    //     initialInvestment:10000,
    //     annualInvestment:1000,
    //     expectedReturn:10,
    //     duration:10
    // });
    // const handleChange = (event)=>{
        
    //     console.log(event)
    //     // setUserinput(prevState=>{
    //     //     return{
    //     //         ...prevState,
    //     //         [name] : value
    //     //     }
    //     // })
    //     console.log(userInput)
    // }
    // function handleChange(event){
    //     console.log(event);
    //     var name = event.target.name;
    //     var value = event.target.value;
    //     setUserinput(prevState=>{
    //         return{
    //             ...prevState,
    //             [name] :+value
    //         }
    //     })
    //     console.log(userInput)
    // }
    return(
        <section id="user-input">
            <div className="input-group">
                <p>
                    <label>
                        Initial Investment
                    </label>
                    <input name="initialInvestment" value={initialState.initialInvestment} type="number" onChange={(event)=>onChangeInput(event)} required/>
                </p>
                <p>
                    <label>
                        Annual Investment
                    </label>
                    <input name="annualInvestment" value={initialState.annualInvestment} type="number"  onChange={(event)=>onChangeInput(event)} required/>
                </p>
            </div>
            <div className="input-group">
                <p>
                    <label>
                        Expected Return
                    </label>
                    <input name="expectedReturn" value={initialState.expectedReturn} type="number"  onChange={(event)=>onChangeInput(event)} required/>
                </p>
                <p>
                    <label>
                        Duration
                    </label>
                    <input name="duration" value={initialState.duration} type="number"  onChange={(event)=>onChangeInput(event)} required/>
                </p>
            </div>
        </section>
    )
}