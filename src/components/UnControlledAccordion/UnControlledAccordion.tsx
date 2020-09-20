import React, {useReducer} from "react";
import {reducer, TOGGLE_COLLAPSED} from "./reducer";

type UnControledAcardionType = {
    titleValue: string,
}

function UnControlledAccordion(props: UnControledAcardionType) {
    // let [collapsed, setCollapsed] = useState(false)
    let [state, dispatch] = useReducer(reducer, {collapsed:false})
    //dispatch-отправляет в редюсер инструкцию что делать
    //reducer-т.е вызываем функцию
    //{collapsed:false}-начальное значение
    return (
        <div>
            <UnControledAcardionTitle title={props.titleValue} onClick={() =>{
                dispatch({type: TOGGLE_COLLAPSED})}}/>
            {!state.collapsed && <UnControledAcardionBoby/>}
        </div>
    )
}

type UnControledAcardionTitleType = {
    title: string,
    onClick: () => void
   }

function UnControledAcardionTitle(props: UnControledAcardionTitleType) {
    return (
        <div><h3 onClick={() => props.onClick()}>{props.title}</h3></div>
    )
}

function UnControledAcardionBoby() {
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

export default UnControlledAccordion;