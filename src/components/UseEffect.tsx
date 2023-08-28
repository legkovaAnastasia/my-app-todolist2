import React, {useEffect, useState} from "react";

// export const UseEffect = () => {
//     const [counter, setCounter] = useState(1)
//     useEffect(() => {
//         document.title = counter.toString()
//     }, [counter])
//
//     return <div>
//         <button onClick={() => setCounter(counter + 1)}> +</button>
//         hello, +{counter}
//     </div>
// }

// export const SetTimeOutUseEff = () => {
//     const [counter, setCounter] = useState(1)
//     useEffect(() => {
//         // setTimeout(()=>{
//         //     document.title=counter.toString()
//         // }, 2000)
//         setInterval(() => {
//             console.log('tick' + counter)
//             setCounter((state) => state +1)
//         }, 2000)
//     }, [])
//
//     return <div>
//         {/*<button onClick={()=> setCounter(counter+1)}> + </button>*/}
//         hello, counter {counter}
//     </div>
// }

type PropsType = {}
const getExtra0 = (num: number) => num < 10 ? '0' + num : num
export const SetTime: React.FC<PropsType> = () => {

    const [date, setDate] = useState(new Date())
    useEffect(() => {
       const intervalID = setInterval(() => {
            setDate(new Date())
        }, 1000);
       return ()=>{
           clearInterval(intervalID)
       }
    })
    const seconds = getExtra0(date.getSeconds())
    const minutes = getExtra0(date.getMinutes())
    const hours = getExtra0(date.getHours())
    return <div>
        <span>{hours}</span>
        :
        <span>{minutes}</span>
        :
        <span>{seconds}</span>
    </div>
}