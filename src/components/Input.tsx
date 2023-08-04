import {ChangeEvent, useRef, useState} from "react";


export const UncontrolledInput=()=>{
    return <input/>
}
export const TrackValueOfUncontrolledInput=()=>{
    const [value, setValue]=useState('')
    const saveinput = (e: ChangeEvent<HTMLInputElement>)=>{
        const actualValue = e.currentTarget.value
        setValue(actualValue)
    }
    return <><input onChange={saveinput}/> - {value}</>
}
export const GetValueOfUncontrolledInputByBtnPress=()=>{
    const [value, setValue]=useState('')
    const inputRef=useRef<HTMLInputElement>(null)

    const save = () => {
        const el = inputRef.current as HTMLInputElement
        setValue(el.value)
    }
    return <><input ref={inputRef}/><button onClick={save}>save</button>actual value - {value}</>
}
export const ControlledInput=()=>{
    const [parentValue, setParentValue]=useState('')
    return <input value={parentValue} onChange={
        (e)=>{setParentValue(e.currentTarget.value)}}/>
}

export const ControlledCheckbox=()=>{
    const [parentValue, setParentValue]=useState(true)
    return <input type={'checkbox'} checked={parentValue} onChange={
        (e)=>{setParentValue(e.currentTarget.checked)}}/>
}
export const ControlledSelect=()=>{
    const [parentValue, setParentValue]=useState<string|undefined>(undefined)
    return <select value={parentValue} onChange={
        (e)=>{setParentValue(e.currentTarget.value)}}>
        <option>none</option>
        <option id={'1'}>Minsk</option>
        <option id={'2'}>Moskva</option>
    </select>
}