import React from "react";
type ItemType={
    title:string
    value:any
}
type AccordionPropsType = {
    titleValue: string
    collapsed: boolean
    onChange: ()=>void
    items: ItemType[]
    onClick:(value:any)=>void
}

function Accordion(props: AccordionPropsType) {

        return <div>
            <AccordionTitle title={props.titleValue} onChange={props.onChange}/>
            {!props.collapsed && <AccordionBody items={props.items} onClick={props.onClick}/>}
        </div>
}

type AccordionTitlePropsType = {
    title: string
    onChange: ()=>void
}

function AccordionTitle(props: AccordionTitlePropsType) {
    return <h3 onClick={props.onChange}>---{props.title}---</h3>
}

type AccordionBodyPropsType = {
items:ItemType[]
    onClick:(value:any)=>void
}

function AccordionBody(props: AccordionBodyPropsType) {
    return <ul>
        {props.items.map((el,index)=><li key={index} onClick={
            ()=>{props.onClick(el.value)}
        }>{el.title}</li>)}

    </ul>
}

export default Accordion;

