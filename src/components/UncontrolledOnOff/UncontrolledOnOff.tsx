import {useState} from "react";

type PropsType = {
    onChange: (on:boolean)=>void
}
export const UncontrolledOnOff = (props: PropsType) => {
    const [on, setOn] = useState(false)

    const onStyle = {
        width: '30px',
        height: '20px',
        border: '1px solid black',
        display: 'inline-block',
        padding: '2px',
        backgroundColor: on ? 'lightGreen' : 'white'
    }
    const offStyle = {
        width: '30px',
        height: '20px',
        border: '1px solid black',
        display: 'inline-block',
        marginLeft: '2px',
        padding: '2px',
        backgroundColor: on ? 'white' : 'red'
    }
    const indicateStyle = {
        width: '10px',
        height: '10px',
        borderRadius: '15px',
        border: '1px solid black',
        display: 'inline-block',
        marginLeft: '5px',
        backgroundColor: on ? 'lightGreen' : 'red'
    }
    const onClicked = () => {
            setOn(true)
            props.onChange(true)
    }
    const offClicked = () => {
            setOn(false)
            props.onChange(false)
    }
    return(
<div>
    <div style={onStyle} onClick={onClicked}> on </div>
    <div style={offStyle} onClick={offClicked}> off </div>
    <div style={indicateStyle} >    </div>
</div>
    )
}