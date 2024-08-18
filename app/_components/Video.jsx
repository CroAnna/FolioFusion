"use client";
import { useEffect, useRef, useState } from "react";

const Video = ({ pathMp4, pathOgg }) => {
  const [isInView, setIsInView] = useState(false);
  const videoRef = useRef();

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setIsInView(true);
            observer.disconnect();
          }
        });
      },
      {
        rootMargin: "0px 0px 20% 0px", // position when to load (0% is when it appears on the screen, 20% is before, -20% is after it appears on the screen)
      }
    );

    if (videoRef.current) {
      observer.observe(videoRef.current);
    }

    return () => {
      if (videoRef.current) {
        observer.unobserve(videoRef.current);
      }
    };
  }, []);

  return (
    <div ref={videoRef}>
      {isInView ? (
        <video
          controls
          preload="none"
          className="aspect-video border-4 rounded-3xl border-neutral-600 shadow-2xl w-[36rem]"
          autoPlay={true}
          muted={true}
          loop={true}
        >
          <source src={pathMp4} type="video/mp4" />
          <source src={pathOgg} type="video/ogg" />
          {/* ogg because mp4 doesn't work on Firefox */}
          Your browser does not support the video tag.
        </video>
      ) : (
        <p>Loading video...</p>
      )}
    </div>
  );
};

export default Video;
