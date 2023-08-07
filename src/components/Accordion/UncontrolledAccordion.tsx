import React, {useReducer} from "react";
import {reducer, TOGGLE_COLLAPSED} from "./Reducer";

type AccordionPropsType = {
    titleValue: string
}

function UncontrolledAccordion(props: AccordionPropsType) {
    console.log('UARendering')

    const [state, dispatch] = useReducer(reducer, {collapsed:false})
        return <div>
            <AccordionTitle title={props.titleValue} onClick={()=> {
                dispatch({type: TOGGLE_COLLAPSED})
            }}/>
            {!state.collapsed && <AccordionBody />}
        </div>
}

type AccordionTitlePropsType = {
    title: string
    onClick: ()=> void

}

function AccordionTitle(props: AccordionTitlePropsType) {
   return <h3 onClick={()=>props.onClick()}>---{props.title}---</h3>
}

// type AccordionBodyType = {
//     collapsedMenu: boolean
// }

function AccordionBody() {
    console.log('ABRendering')
    return <ul>
        <li>1</li>
        <li>2</li>
        <li>3</li>
    </ul>
}

export default UncontrolledAccordion;

