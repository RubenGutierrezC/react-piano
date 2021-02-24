import clsx from "clsx";
import { ReactEventHandler } from "react";
import { NoteType } from "../../domain/note";
import { usePressObserve } from "../PressObserver/usePressObserver";
import './style.css'

interface KeyProps {
    type: NoteType
    label: string
    disabled?: boolean
    onUp: ReactEventHandler<HTMLButtonElement>
    onDown: ReactEventHandler<HTMLButtonElement>
}

export default function Key(props: KeyProps) {
    const { type, label, onDown, onUp, ...rest} = props

    const pressed = usePressObserve({
        watchKey: label,
        onStartPress: onDown,
        onFinishPress: onUp
    })

    return (
        <button
            className={clsx(`key key--${type}`, pressed && 'is-pressed')}
            type="button"
            onMouseDown={onDown}
            onMouseUp={onUp}
            {...rest}
        >
            {label}
        </button>
    )
}
