import React, {useEffect, useState} from "react";
type PropsType = {}

export const Clock: React.FC<PropsType> = (props) => {
    const [date, setDate] = useState(new Date())
    useEffect(() => {
     const intervalID=   setInterval(() => {
            setDate(new Date())
        }, 1000)
/////////////Будет самочищаться//////////////////////////////////////
        return()=>{
         clearInterval(intervalID);
        }
    }, [])

    const get2digitsString = (number: number) => {
        return number < 10 ? '0' + number : number;
    }//для минут,секунд,часов///////////////////////////////////

    return <div>
        <span>{get2digitsString(date.getHours())}</span>
        :
        <span>{get2digitsString(date.getMinutes())}</span>
        :
        <span>{get2digitsString(date.getSeconds())}</span>
    </div>
}