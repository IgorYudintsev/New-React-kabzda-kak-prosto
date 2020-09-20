 import React, {ChangeEvent, useRef, useState} from 'react';
// import { Button } from '@storybook/react/demo';

export default {
  title: 'Input',
  // component: OnOff,
};

export const UncontrolledInput = () => <input/>;
export const ControlledInputWithFixedValue = () => <input value={'IT-incubator'}/>;
 export const TrackValueOfUncontrolledInput = () => {
   const [value,setValue]=useState('')
   return <><input onChange={(event)=>{setValue(event.currentTarget.value)}}/>-{value}</>;
 }
 export const GetValueOfUncontrolledInputByButtonPress = () => {
   const [value,setValue]=useState('');
   const inputRef=useRef<HTMLInputElement>(null);

   const save=()=>{
     const element=inputRef.current as HTMLInputElement
     setValue(element.value)
   }
   return <><input ref={inputRef}/><button onClick={save}>save</button>- actual value: {value}</>;
 }

export const ControlledInput=()=>{
   const [parentValue,setParentValue]=useState('')
   return <input value={parentValue} onChange={(event => {setParentValue(event.currentTarget.value)})}/>
}

 export const ControlledSelect=()=>{
   const [parentValue,setParentValue]=useState<string|undefined>('2')
   const onChange=(e:ChangeEvent<HTMLSelectElement>)=>{
     setParentValue(e.currentTarget.value)
        }
   return <select value={parentValue} onChange={onChange}>
     <option>none</option>
     <option value={'1'}>Minsk</option>
     <option value={'2'}>Moscow</option>
     <option value={'3'}>Kiev</option>
   </select>
 }