import React, {useState} from "react";

export type onOffType={
    ValueOn:boolean,
    changeOn:()=>void
}

export function OnOff(props:onOffType) {

    const boxTrueStyle = {
        width: '40px',
        height: '20px',
        border: '1px solid black',
        display:'inline-block',
        backgroundColor:props.ValueOn ?'green' : 'white'
    }
    const boxFalseStyle = {
        width: '40px',
        height: '20px',
        border: '1px solid black',
        display:'inline-block',
        backgroundColor:!props.ValueOn ?'red' : 'white'
    }
    const indicatorStyle = {
        width: '10px',
        height: '10px',
        borderRadius: '5px',
        border: '1px solid black',
        display:'inline-block',
        marginLeft:'5px',
        backgroundColor:props.ValueOn ?'green' : 'red'
    }
    return (
        <div>
            <div onClick={()=>props.changeOn()} style={boxTrueStyle}>onn</div>
            <div onClick={()=>props.changeOn()} style={boxFalseStyle}>off</div>
            <div style={indicatorStyle}></div>
        </div>
    )
}

export default OnOff;