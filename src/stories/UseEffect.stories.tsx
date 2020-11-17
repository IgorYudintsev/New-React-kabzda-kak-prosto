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

//часы
export const SetTimeoutExample = () => {
    let [date, setDate] = useState(new Date())
    useEffect(() => {
        setInterval(() => tick(), 1000);
    })

    function tick() {
        setDate(new Date());
    }

    return (
        <div>
            {date.toLocaleTimeString()}//выдаст 15:10:05
            {/*{date.getSeconds()}*/}
        </div>
    )
}
// export const SetTimeoutExample = () => {
//
//     let [date, setDate] = useState(new Date())
//     useEffect(() => {
//         setInterval(() => tick(), 1000);
//     })
//
//     function tick() {
//         setDate(new Date());
//     }
//
//     return (
//         <div>
//             {date.toLocaleTimeString()}
//         </div>
//     )
// }