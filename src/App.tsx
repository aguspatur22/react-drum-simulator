import { AudioClip } from "./types";
import Drum from "./Drum";
import "./App.css";

const audioClips: AudioClip[] = [
  {
    key: "Q",
    url: "https://s3.amazonaws.com/freecodecamp/drums/Heater-1.mp3",
    description: "Heater-1",
  },
  {
    key: "W",
    url: "https://s3.amazonaws.com/freecodecamp/drums/Heater-2.mp3",
    description: "Heater-2",
  },
  {
    key: "E",
    url: "https://s3.amazonaws.com/freecodecamp/drums/Heater-3.mp3",
    description: "Heater-3",
  },
  {
    key: "A",
    url: "https://s3.amazonaws.com/freecodecamp/drums/Heater-4_1.mp3",
    description: "Heater-4",
  },
  {
    key: "S",
    url: "https://s3.amazonaws.com/freecodecamp/drums/Heater-6.mp3",
    description: "Clap",
  },
  {
    key: "D",
    url: "https://s3.amazonaws.com/freecodecamp/drums/Dsc_Oh.mp3",
    description: "Open-HH",
  },
  {
    key: "Z",
    url: "https://s3.amazonaws.com/freecodecamp/drums/Kick_n_Hat.mp3",
    description: "Kick-n'-Hat",
  },
  {
    key: "X",
    url: "https://s3.amazonaws.com/freecodecamp/drums/RP4_KICK_1.mp3",
    description: "Kick",
  },
  {
    key: "C",
    url: "https://s3.amazonaws.com/freecodecamp/drums/Cev_H2.mp3",
    description: "Closed-HH",
  },
];

const playSound = (e: React.KeyboardEvent<HTMLDivElement>) => {
  const clip = audioClips.find((clip) => clip.key === e.key.toUpperCase());
  if (clip) {
    (document.getElementById(clip.key) as HTMLAudioElement).play();
    document.getElementById("display")!.textContent = clip.description;
    document.getElementById(`drum-${clip.key}`)?.focus();
  } else {
    document.getElementById("display")!.textContent = "";
  }
};

function App() {
  return (
    <>
      <div className="container" id="drum-machine" onKeyDown={playSound}>
        <h1>Drum Simulator</h1>
        <div className="pad">
          <div className="drum-pads">
            {audioClips.map((clip) => (
              <Drum audioClip={clip} />
            ))}
          </div>
          <div id="display"></div>
        </div>
      </div>
    </>
  );
}

export default App;
