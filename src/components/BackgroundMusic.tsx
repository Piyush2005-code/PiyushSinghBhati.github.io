import { useState, useRef, useEffect } from "react";
import { Volume2, VolumeX } from "lucide-react";

const BackgroundMusic = () => {
  const [isPlaying, setIsPlaying] = useState(false);
  const [hasInteracted, setHasInteracted] = useState(false);
  const audioRef = useRef<HTMLAudioElement>(null);

  useEffect(() => {
    const audio = audioRef.current;
    if (audio) {
      audio.volume = 0.3;
      audio.loop = true;
    }
  }, []);

  const toggleMusic = () => {
    const audio = audioRef.current;
    if (audio) {
      if (isPlaying) {
        audio.pause();
      } else {
        audio.play();
      }
      setIsPlaying(!isPlaying);
      setHasInteracted(true);
    }
  };

  return (
    <>
      <audio ref={audioRef} src="/audio/background-music.mp3" preload="auto" />
      <button
        onClick={toggleMusic}
        className={`fixed bottom-6 right-6 z-50 p-3 glass-card glow-border transition-all duration-300 group ${
          isPlaying ? "bg-primary/20" : "bg-background/80"
        }`}
        aria-label={isPlaying ? "Mute music" : "Play music"}
      >
        {isPlaying ? (
          <Volume2 className="w-5 h-5 text-primary animate-pulse" />
        ) : (
          <VolumeX className="w-5 h-5 text-muted-foreground group-hover:text-primary transition-colors" />
        )}
        {!hasInteracted && (
          <span className="absolute -top-8 right-0 text-xs font-mono text-muted-foreground whitespace-nowrap bg-background/90 px-2 py-1 rounded">
            Click for music
          </span>
        )}
      </button>
    </>
  );
};

export default BackgroundMusic;
