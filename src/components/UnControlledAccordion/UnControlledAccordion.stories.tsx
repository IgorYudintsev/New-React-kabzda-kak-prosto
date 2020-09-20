import React, {useState} from 'react';
import { action } from '@storybook/addon-actions';
import UnControlledAccordion from './UnControlledAccordion'
import Rating from "../Rating/Rating";

export default {
    title: 'UnControlledAccordion',
    component: UnControlledAccordion,
};

export const UnControlledAccordion1 = () => {
    return <UnControlledAccordion titleValue={'USERS'} />
}