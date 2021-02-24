import { MidiValue, notes } from "../../domain/note";
import { selectKey } from "../../domain/keyboard";
import './style.css'
import Key from "../Key/Key";

export interface keyboardProps {
    loading: boolean
    play: (note: MidiValue) => Promise<void>
    stop: (note: MidiValue) => Promise<void>
}

export default function Keyboard({loading, play, stop}: keyboardProps) {
    return (
        <div className='keyboard'>
            {
                notes.map(({ midi, type, index, octave }) => {
                    const label = selectKey(octave, index)
                    return (
                        <Key
                            key={midi}
                            type={type}
                            label={label}
                            disabled={loading}
                            onDown={() => play(midi)}
                            onUp={() => stop(midi)}
                        />
                    )

                })    
            }
        </div>
    )
}
