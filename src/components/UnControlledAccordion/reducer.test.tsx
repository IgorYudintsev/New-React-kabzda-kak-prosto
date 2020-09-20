import React  from 'react';

import  {reducer, TOGGLE_COLLAPSED,stateType} from './reducer'


test('reducer should work',()=>{
     //data
const state:stateType={
    collapsed:false
}
    //action
 const newState=   reducer(state,{type: TOGGLE_COLLAPSED})

    //expection
    expect(newState.collapsed).toBe(true);
})