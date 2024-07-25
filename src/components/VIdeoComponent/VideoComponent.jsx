import React, { useState } from 'react';
import video from '../../images/videos/video.mp4'

const VideoComponent = () => {
  const [isVideoPlaying, setIsVideoPlaying] = useState(true);

  const handleButtonHover = () => {
    setIsVideoPlaying(false);
  };

  const handleButtonLeave = () => {
    setIsVideoPlaying(true);
  };

  return (
    <div className="relative w-full h-screen">
      <div className="w-full flex justify-center pt-2 absolute top-0">
        <video src={video} autoPlay loop className="w-11/12 absolute -z-50 opacity-80" muted={isVideoPlaying} />
      </div>
      <div
        className="button relative w-full h-screen flex items-center justify-center z-50"
        onMouseEnter={handleButtonHover}
        onMouseLeave={handleButtonLeave}
      >
        <button className="bg-transparent text-white text-3xl absolute z-50">Hello Button</button>
      </div>
    </div>
  );
};

export default VideoComponent;
