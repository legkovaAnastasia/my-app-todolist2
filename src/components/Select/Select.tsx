import React, {useState, KeyboardEvent, useEffect} from "react";
import s from './Select.module.css'

type ItemType = {
    title: string
    value: any
}
type SelectPropsType = {
    value?: any
    onChange: (value: any) => void
    items: ItemType[]
    // onClick: (value: any) => void
}

export function Select(props: SelectPropsType) {
    const [active, setActive] = useState(false)
    const [hoveredValue, setHoveredValue] = useState(props.value)
    const selected = props.items.find(el => el.value === props.value)
    const hoveredElement = props.items.find(el => el.value === hoveredValue)

    useEffect(() => {
        setHoveredValue(props.value)
    }, [props.value])
    const toggleItem = () => {
        setActive(!active)
    }
    const onItemClick = (value: any) => {
        props.onChange(value)
        toggleItem()
    }

    const onKeyUp = (e: KeyboardEvent<HTMLDivElement>) => {
        if (e.key === 'ArrowDown' || e.key === 'ArrowUp') {
            for (let i = 0; i < props.items.length; i++) {
                if (props.items[i].value === hoveredValue) {
                    const pretendentElem = e.key === 'ArrowDown'
                        ? props.items[i + 1]
                        : props.items[i - 1]
                    if (pretendentElem) {
                        props.onChange(pretendentElem.value)
                        return;
                    }
                }
            }
            if (!selected) {
                props.onChange(props.items[0].value)
            }
        }
        if (e.key === 'Enter' || e.key === 'Escape') {
            setActive(false)
        }
    }

    return <div>

        <div className={s.select} onKeyUp={onKeyUp} tabIndex={0}>
            <span className={s.main} onClick={toggleItem}>{selected && selected.title}</span>
            {
                active &&
                <div className={s.items}>
                    {props.items.map((el, index) =>
                        <div onMouseEnter={() => {
                            setHoveredValue(el.value)
                        }}
                             className={s.item + ' ' + (hoveredElement === el ? s.selected : '')}
                             key={index}
                             onClick={() => {
                                 onItemClick(el.value)
                             }}>
                            {el.title}
                        </div>)}
                </div>
            }
        </div>
    </div>
}

