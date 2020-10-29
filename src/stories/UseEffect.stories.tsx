import React, {useEffect, useState} from "react";
export default {
    title: 'useEffect demo',
}

export const SimpleExample = () => {

    let [counter, setCounter] = useState(1);
    console.log('SimpleExample');

    useEffect(() => {
        console.log(document);
        document.title = '+counter'
    })


    return (
        <div>
            Hellow,{counter}
            <button onClick={() => setCounter(counter + 1)}>+</button>
        </div>
    )
}

