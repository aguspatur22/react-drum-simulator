import { AudioClip } from "./types";

interface DrumProps {
  audioClip: AudioClip;
}

function Drum({ audioClip }: DrumProps) {
  return (
    <button className="drum-pad" id={`drum-${audioClip.key}`} onClick={() => {
      (document.getElementById(audioClip.key) as HTMLAudioElement).play();
      document.getElementById("display")!.textContent = audioClip.description;
    }}>
      <audio className="clip" src={audioClip.url} id={audioClip.key}></audio>
      {audioClip.key}
    </button>
  );
}

export default Drum;
