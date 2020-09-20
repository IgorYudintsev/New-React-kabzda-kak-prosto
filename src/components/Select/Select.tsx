import React, {useState, KeyboardEvent, useEffect} from "react";
import style from './Select.module.css'


type itemsType = {
    title: string
    value: any
}

type SelectPropsTYpe = {
    value?: any,
    onChange: (value: any) => void
    items: itemsType[]
}

export function Select(props: SelectPropsTYpe) {
    let [active, setActive] = useState(false);
    const [hoveredElementValue, setHoveredElementValue] = useState(props.value)
    const selectedItem = props.items.find(f => f.value === props.value)
    const hoveredItem = props.items.find(f => f.value === hoveredElementValue)
    useEffect(() => {
        setHoveredElementValue(props.value);
    }, [props.value])

    const showItem = () => setActive(!active)
    const onItemClicked = (value: any) => {
        props.onChange(value);
        showItem()
    }

    const onKeyUp = (e: KeyboardEvent<HTMLDivElement>) => {
        if (e.key === 'ArrowDown' || e.key === 'ArrowUp') {
            for (let i = 0; i < props.items.length; i++) {
                if (props.items[i].value === hoveredElementValue) {
                    const pretendentElementIndex = e.key === 'ArrowDown'
                        ? props.items[i + 1] : props.items[i - 1]
                    if (pretendentElementIndex) {
                        setHoveredElementValue(pretendentElementIndex.value);
                        return;
                    }
                }
            }
            if (!selectedItem) {
                props.onChange(props.items[0].value);
            }
        }
        if (e.key === 'Enter' || e.key === 'Escape') {
            setActive(false)
        }
    }

    return (
        <>
            <div className={style.select} onKeyUp={onKeyUp} tabIndex={0}>
                <span className={style.main} onClick={showItem}>{selectedItem && selectedItem.title}</span>
                {
                    active &&
                    <div className={style.items}>
                        {props.items.map(m => <div
                            onMouseEnter={() => {
                                setHoveredElementValue(m.value)
                            }}
                            className={style.item + " " + (hoveredItem === m ? style.selected : '')}
                            key={m.value}
                            onClick={() => onItemClicked(m.value)}
                        >{m.title}</div>)}
                    </div>
                }
            </div>
        </>
    )

}