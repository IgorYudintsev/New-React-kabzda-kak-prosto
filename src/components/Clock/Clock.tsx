import React, {useEffect, useState} from "react";
import {DigitalClockView} from "./DigitalClock";
import {AnalogClockView} from "./AnalogClock";

type PropsType = {
    mode?: 'digital' | 'analog'
}

export const Clock: React.FC<PropsType> = (props) => {
    const [date, setDate] = useState(new Date())
    useEffect(() => {
        const intervalID = setInterval(() => {
            setDate(new Date())
        }, 1000)
        return () => {
            clearInterval(intervalID);
        }
    }, [])

    let view;
    switch (props.mode) {
        case 'analog':
            view = <AnalogClockView date={date}/>//компонента
            break;
        case 'digital':
        default:
            view = <DigitalClockView date={date}/>//компонента
    }

    return (
        <div>{view}</div>
    )
}
//выносим в отдельные компоненты
export type ClockViewPropsType = {
    date: Date
}

