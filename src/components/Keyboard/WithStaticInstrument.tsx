import React, { FunctionComponent } from "react"
import { withInstrument } from "../../adapters/Soundfont/withInstrument"
import { useInstrument } from "../../state/Intrument/Context"
import useAudioContext from "../AudioContextProvider/useAudioContext"
import Keyboard from "./Keyboard"
import "./style.css"

const WrappedKeyboard = withInstrument(Keyboard)

export const KeyboardWithInstrument: FunctionComponent = () => {
  const AudioContext = useAudioContext()!
  const { instrument } = useInstrument()

  return <WrappedKeyboard AudioContext={AudioContext} instrument={instrument} />
}
