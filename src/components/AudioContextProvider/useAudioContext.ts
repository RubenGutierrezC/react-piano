import { useRef } from "react";
import { accesContext } from "../../domain/audio";
import { Optional } from "../../domain/types";

export default function useAudioContext(): Optional<AudioContextType> {
    const AudioCtx = useRef(accesContext())
    return AudioCtx.current
}
