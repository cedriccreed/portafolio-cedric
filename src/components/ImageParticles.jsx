const ImageParticles = () => {
  return (
    <div className="absolute inset-0 pointer-events-none">
      {/* Only orbiting particles around the image - no blinking */}
      <div className="absolute top-1/2 left-1/2 w-2 h-2 bg-cyan-400/60 rounded-full orbit-image-1"></div>
      <div className="absolute top-1/2 left-1/2 w-1.5 h-1.5 bg-blue-400/50 rounded-full orbit-image-2"></div>
      <div className="absolute top-1/2 left-1/2 w-1 h-1 bg-cyan-300/70 rounded-full orbit-image-3"></div>
      <div className="absolute top-1/2 left-1/2 w-2.5 h-2.5 bg-blue-500/40 rounded-full orbit-image-4"></div>
      <div className="absolute top-1/2 left-1/2 w-1.5 h-1.5 bg-cyan-500/55 rounded-full orbit-image-5"></div>

      {/* Static tech symbols - no animation */}
      <div className="absolute top-[20%] right-[10%] text-cyan-400/30 text-xs">&lt;/&gt;</div>
      <div className="absolute bottom-[20%] left-[10%] text-blue-400/30 text-xs">{ }</div>
      <div className="absolute top-[60%] right-[15%] text-cyan-300/30 text-xs">React</div>
      <div className="absolute bottom-[60%] left-[15%] text-blue-300/30 text-xs">JS</div>
    </div>
  );
};

export default ImageParticles;
