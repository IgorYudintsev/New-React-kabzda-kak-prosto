import React, {useState} from 'react';
import { action } from '@storybook/addon-actions';
import Accordion from './Accordion'

export default {
    title: 'Accordion',
    component: Accordion,
};

export const RatingChanging = () => {
    let[accordionCollapsed,setAccordionCollapsed]=useState(false);
    return <Accordion titleValue={'MENU'} collapsed={accordionCollapsed} onChange={()=>{setAccordionCollapsed(!accordionCollapsed)}}/>
}
