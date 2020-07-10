import React, {useState} from "react";

type UnControledAcardionType = {
    titleValue: string,
}

function UnControlledAccordion(props: UnControledAcardionType) {
    let [collapsed, setCollapsed] = useState(false)
    return (
        <div>
            <UnControledAcardionTitle onClick={setCollapsed} collapsed={collapsed} title={props.titleValue}/>
            {collapsed && <UnControledAcardionBoby/>}
        </div>
    )
}

type UnControledAcardionTitleType = {
    title: string,
    onClick: (collapsed: boolean) => void
    collapsed: boolean
}

function UnControledAcardionTitle(props: UnControledAcardionTitleType) {
    return (
        <div><h3 onClick={() => props.onClick(!props.collapsed)}>{props.title}</h3></div>
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