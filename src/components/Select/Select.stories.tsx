import React, {useState} from 'react';
import {action} from '@storybook/addon-actions';
import {Select} from './Select'

export default {
    title: 'Select',
    component: Select,
};


export const VithValue = () => {
    const [value, setValue] = useState('2');
    return (
        <Select onChange={setValue}
                value={value}
                items={[
                    {value: '1', title: 'Minsk'},
                    {value: '2', title: 'Moscow'},
                    {value: '3', title: 'New-York'}
                ]}
        />
    )
}


export const WithoutValue = () => {
    const [value, setValue] = useState(null);
    return (
        <Select onChange={setValue}
                value={value}
                items={[
                    {value: '1', title: 'Minsk'},
                    {value: '2', title: 'Moscow'},
                    {value: '3', title: 'New-York'}
                ]}
        />
    )
}

