import React from "react";

type AccordionPropsType = {
    titleValue: string
    collapsed: boolean
}

function Accordion(props: AccordionPropsType) {

        return <div>
            <AccordionTitle title={props.titleValue}/>
            {!props.collapsed && <AccordionBody collapsedMenu={props.collapsed}/>}
        </div>
}

type AccordionTitlePropsType = {
    title: string
}

function AccordionTitle(props: AccordionTitlePropsType) {
    if (props.title === "Menu") {
        return <h3>Menu</h3>
    }
    if (props.title === "Users") {
        return <h3>Users</h3>
    } else return <div>---</div>
}

type AccordionBodyType = {
    collapsedMenu: boolean
}

function AccordionBody(props: AccordionBodyType) {
    if (props. collapsedMenu === true) {
        return <div></div>
    }
    return <ul>
        <li>1</li>
        <li>2</li>
        <li>3</li>
    </ul>
}

export default Accordion;

