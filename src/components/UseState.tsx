import React, {useMemo, useState} from "react";

function generateValue () {
    //diff.counting
    return 2342324213
}
export const UseStateExample = () => {
    const initialValue = useMemo(generateValue, [])
    const [counter, setCounter]=useState(generateValue)

    const changer =(state:number)=>{
        return state+1
    }
    return <div>
        <button onClick={()=> setCounter(changer)}> + </button>
        {counter}
    </div>
}
