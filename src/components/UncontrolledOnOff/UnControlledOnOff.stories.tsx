import React, {useState} from 'react';
import { action } from '@storybook/addon-actions';
import UncontrolledOnOff from "./UncontrolledOnOff";

export default {
    title: 'UncontrolledOnOff',
    component: UncontrolledOnOff,
};

export const UncontrolledOnOff1 = () => {
    let[on,setOn]=useState(false);
    return <UncontrolledOnOff onChange={setOn} />
}

