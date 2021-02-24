/// <reference types="react-scripts" />

type AudioContextType = typeof AudioContext

interface Window extends Window {
    webkitAudioContext: AudioContextType
}

type SoundFontType = typeof SoundFont

