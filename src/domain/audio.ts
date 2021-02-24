import { Optional } from "./types";


export function accesContext(): Optional<typeof AudioContext> {
    return window.AudioContext || window.webkitAudioContext  || null
}