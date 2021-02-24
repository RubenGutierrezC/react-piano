import { FunctionComponent } from "react"
import { InstrumentContextProvider } from "../../state/Intrument/Provider"
import { InstrumentSelector } from "../InstrumentSelector/InstrumentSelector"
import { KeyboardWithInstrument } from "../Keyboard/WithStaticInstrument"

export const Playground: FunctionComponent = () => {
    return (
        <InstrumentContextProvider>
            <div className='playground'>
                <KeyboardWithInstrument />
                <InstrumentSelector />
            </div>
        </InstrumentContextProvider>
    )
}
