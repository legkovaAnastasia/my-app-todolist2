import {useState} from "react";

type PropsType = {
    on: boolean
    onChange: (no:boolean)=>void
}
export const OnOff = (props: PropsType) => {

    const onStyle = {
        width: '30px',
        height: '20px',
        border: '1px solid black',
        display: 'inline-block',
        padding: '2px',
        backgroundColor: props.on ? 'lightGreen' : 'white'
    }
    const offStyle = {
        width: '30px',
        height: '20px',
        border: '1px solid black',
        display: 'inline-block',
        marginLeft: '2px',
        padding: '2px',
        backgroundColor: props.on ? 'white' : 'red'
    }
    const indicateStyle = {
        width: '10px',
        height: '10px',
        borderRadius: '15px',
        border: '1px solid black',
        display: 'inline-block',
        marginLeft: '5px',
        backgroundColor: props.on ? 'lightGreen' : 'red'
    }
    return(
<div>
    <div style={onStyle} onClick={()=>{props.onChange(true)}}> on </div>
    <div style={offStyle} onClick={()=>{props.onChange(false)}}> off </div>
    <div style={indicateStyle} >    </div>
</div>
    )
}