import React from "react";

type AccordionType={
    titleValue:string,
    collapsed:boolean,
    onChange:()=>void,
}

function Accordion(props:AccordionType) {
    return (
        <div>
            <AccordionTitle title={props.titleValue} AccordionOnChange={props.onChange}  />
            {props.collapsed &&<AccordionBoby/>}
        </div>
    )
}

type AccordionTitleType={
    title:string,
    AccordionOnChange:()=>void,

}

function AccordionTitle(props:AccordionTitleType) {
    return (
        <div><h3 onClick={()=>{props.AccordionOnChange()}}>{props.title}</h3></div>
    )
}

function AccordionBoby() {
    return (
        <div>
            <ul>
                <li>1</li>
                <li>2</li>
                <li>3</li>
            </ul>
        </div>
    )
}

export default Accordion;