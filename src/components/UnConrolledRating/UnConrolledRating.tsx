import React, {useState} from "react";

function UnConrolledRating() {
    let [value, setValue] = useState()

    return (
        <div>
            <Star setValue={setValue} value={1} selected={value > 0}/>
            <Star setValue={setValue} value={2} selected={value > 1}/>
            <Star setValue={setValue} value={3} selected={value > 2}/>
            <Star setValue={setValue} value={4} selected={value > 3}/>
            <Star setValue={setValue} value={5} selected={value > 4}/>
        </div>
    )
}

type StarType = {
    setValue: (value: number) => void,
    value: 1 | 2 | 3 | 4 | 5
    selected: boolean,

}

function Star(props: StarType) {
    return <span onClick={() => props.setValue(props.value)}>{props.selected ? <b>star</b> : 'star'}</span>
}

export default UnConrolledRating;
