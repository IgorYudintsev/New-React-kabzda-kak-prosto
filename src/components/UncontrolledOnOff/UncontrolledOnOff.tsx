import React, {useState} from "react";

type UncontrolledOnOffType={
    onChange:(on:boolean)=>void
}

function UncontrolledOnOff(props:UncontrolledOnOffType) {
    let[on,setOn]=useState(false)

    const boxTrueStyle = {
        width: '40px',
        height: '20px',
        border: '1px solid black',
        display:'inline-block',
        backgroundColor:on ?'green' : 'white'
    }
    const boxFalseStyle = {
        width: '40px',
        height: '20px',
        border: '1px solid black',
        display:'inline-block',
        backgroundColor:!on ?'red' : 'white'
    }
    const indicatorStyle = {
        width: '10px',
        height: '10px',
        borderRadius: '5px',
        border: '1px solid black',
        display:'inline-block',
        marginLeft:'5px',
        backgroundColor:on ?'green' : 'red'
    }

    const OnClicked=()=>{
        setOn(true)
        props.onChange(true)
    }

    const OffClicked=()=>{
        setOn(false)
        props.onChange(false)
    }

    return (
        <div>
            <div  style={boxTrueStyle} onClick={OnClicked}>onn</div>
            <div  style={boxFalseStyle} onClick={OffClicked} >off</div>
            <div style={indicatorStyle}></div>
        </div>
    )
}

export default UncontrolledOnOff;