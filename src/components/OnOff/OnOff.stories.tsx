import React, {useState} from 'react';
import { action } from '@storybook/addon-actions';
import {OnOff,onOffType} from "./OnOff";
import Rating, {RatingValueType} from "../Rating/Rating";


export default {
    title: 'OnOff stories ',
    component: OnOff,
};

export const OnOffOn = () => {
    let[on,setOn]=useState<boolean>(false)
    return <OnOff ValueOn={true} changeOn={()=>setOn(true)} />
}

export const OnOffOff= () => {
    let[on,setOn]=useState<boolean>(false)
    return <OnOff ValueOn={false} changeOn={()=>setOn(false)} />
}

export const OnOffChanging = () => {
    let[on,setOn]=useState<boolean>(false)
    return <OnOff ValueOn={on} changeOn={()=>setOn(!on)} />
}


//===================================================
// import React, {useState} from 'react';
// import { action } from '@storybook/addon-actions';
// import {OnOff,onOffType} from "./OnOff";
//
//
// export default {
//     title: 'OnOff stories ',
//     component: OnOff,
// };
//
// export const OnMode = () =>{
//     let[on,setOn]=useState<boolean>(false)
//     return <OnOff ValueOn={on} changeOn={()=>setOn(!on) }/>;
// }