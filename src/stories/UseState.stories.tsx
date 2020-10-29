import React, {useState} from "react";

export default {
    title: 'useState',
}



//setCounter получает функцию
function generateData(){
    return 1;
}

export const Example1 = () => {
    let [counter, setCounter] = useState(generateData);
    const changer=(state:number)=>{//state:number т.к на стр8 взвр. число
       return state+1
    }
    return (
        <div>
            <button onClick={() => setCounter(changer)}>+</button>
            {counter}
        </div>
    )
}

