"use client";

import { useEffect, useRef } from "react";

type HeroVideoProps = {
  src: string;
  className?: string;
  speed?: number;
  preload?: "none" | "metadata" | "auto";
  ariaLabel?: string;
};

export default function HeroVideo({
  src,
  className = "",
  speed = 0.7,
  preload = "auto",
  ariaLabel,
}: HeroVideoProps) {
  const videoRef = useRef<HTMLVideoElement>(null);

  useEffect(() => {
    const video = videoRef.current;

    if (!video) {
      return;
    }

    const playbackSpeed = Math.min(Math.max(speed, 0.1), 2);

    const startPlayback = () => {
      video.defaultMuted = true;
      video.muted = true;
      video.defaultPlaybackRate = playbackSpeed;
      video.playbackRate = playbackSpeed;

      void video.play().catch(() => {
        // Автозапуск может ждать первого взаимодействия только в строгих браузерах.
      });
    };

    const handleVisibilityChange = () => {
      if (!document.hidden) {
        startPlayback();
      }
    };

    video.addEventListener("loadeddata", startPlayback);
    video.addEventListener("canplay", startPlayback);
    document.addEventListener("visibilitychange", handleVisibilityChange);

    if (video.readyState >= HTMLMediaElement.HAVE_CURRENT_DATA) {
      startPlayback();
    }

    return () => {
      video.removeEventListener("loadeddata", startPlayback);
      video.removeEventListener("canplay", startPlayback);
      document.removeEventListener("visibilitychange", handleVisibilityChange);
    };
  }, [src, speed]);

  return (
    <video
      ref={videoRef}
      className={className}
      autoPlay
      muted
      loop
      playsInline
      preload={preload}
      disablePictureInPicture
      controlsList="nodownload noplaybackrate noremoteplayback"
      aria-label={ariaLabel}
      aria-hidden={ariaLabel ? undefined : true}
    >
      <source src={src} type="video/mp4" />
    </video>
  );
}
