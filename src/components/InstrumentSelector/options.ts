import { InstrumentName } from "soundfont-player";
import instruments from "soundfont-player/names/musyngkite.json"

interface Option {
    value: InstrumentName
    label: string
}

type OptionList = Option[]
type IntrumentList = InstrumentName[]

function normalizeList(list: IntrumentList): OptionList {
    return list.map((intrument) => ({
        value: intrument,
        label: intrument.replace(/_/gi," ")
    }))
}

export const options = normalizeList(instruments as IntrumentList)