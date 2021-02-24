import { ChangeEvent, FunctionComponent } from "react"
import { InstrumentName } from "soundfont-player"
import { useInstrument } from "../../state/Intrument/Context"
import { options } from "./options"
import './style.css'

export const InstrumentSelector: FunctionComponent = () => {
    const { instrument, setInstrument } = useInstrument()
    const updateValue = ({ target }: ChangeEvent<HTMLSelectElement>) => setInstrument(target.value as InstrumentName)

    return (
        <select
            className='instruments'
            onChange={updateValue}
            value={instrument}
        >
            {options.map(({ label, value}) => (
                <option key={value} value={value}>
                    {value}
                </option>
            ))}
        </select>
    )
}
