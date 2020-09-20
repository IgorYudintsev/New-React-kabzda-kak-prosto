import React, {useState} from 'react';
import {action} from '@storybook/addon-actions';
import Accordion from './Accordion'

export default {
    title: 'Accordion',
    component: Accordion,
};

const onClickCallBack = action('some item was clicked');

export const RatingChanging = () => {
    let [accordionCollapsed, setAccordionCollapsed] = useState(false);
    return <Accordion
        titleValue={'MENU'}
        collapsed={accordionCollapsed}
        onChange={() => {
            setAccordionCollapsed(!accordionCollapsed)
        }}
        items={[
            {value: 1, title: 'Dimich'},
            {value: 2, title: 'Igor'}
        ]}
        onClick={onClickCallBack}
    />
}
