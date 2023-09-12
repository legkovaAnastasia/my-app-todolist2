import React, {useEffect, useState} from "react";
import s from './AnalogClock.module.css'

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

type PropsType = {
    mode: 'analog' | 'digit'
}
const getExtra0 = (num: number) => num < 10 ? '0' + num : num
export const SetTime: React.FC<PropsType> = (props) => {

    const [date, setDate] = useState(new Date())
    const secondsStyle = {
        transform: `rotate(${date.getSeconds() * 6}deg)`
    };
    const minutesStyle = {
        transform: `rotate(${date.getMinutes() * 6}deg)`
    };
    const hoursStyle = {
        transform: `rotate(${date.getHours() * 30}deg)`
    };
    useEffect(() => {
        const intervalID = setInterval(() => {
            setDate(new Date())
        }, 1000);
        return () => {
            clearInterval(intervalID)
        }
    })
    const seconds = getExtra0(date.getSeconds())
    const minutes = getExtra0(date.getMinutes())
    const hours = getExtra0(date.getHours())
    return <div>
        {props.mode === 'digit' ? <>
                <span>{hours}</span>
                :
                <span>{minutes}</span>
                :
                <span>{seconds}</span>
            </> :
            <>
                Analog
                <div className={s.clock}>
                <div className={s["analog-clock"]}>
                    <div className={`${s.dial} ${s.seconds}`} style={secondsStyle} />
                    <div className={`${s.dial} ${s.minutes}`} style={minutesStyle} />
                    <div className={`${s.dial} ${s.hours}`} style={hoursStyle} />
                </div>
                </div>
            </>}
    </div>
}