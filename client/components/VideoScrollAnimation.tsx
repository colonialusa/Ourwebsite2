import { useEffect, useRef, useState } from 'react';

interface VideoScrollAnimationProps {
  videoSrc: string;
  className?: string;
}

export default function VideoScrollAnimation({
  videoSrc,
  className = ''
}: VideoScrollAnimationProps) {
  const videoRef = useRef<HTMLVideoElement>(null);
  const containerRef = useRef<HTMLDivElement>(null);
  const [isLoaded, setIsLoaded] = useState(false);
  const targetTimeRef = useRef(0);
  const currentTimeRef = useRef(0);
  const animationFrameRef = useRef<number>();

  useEffect(() => {
    const video = videoRef.current;
    const container = containerRef.current;
    if (!video || !container) return;

    // Video loaded
    const handleLoadedMetadata = () => {
      setIsLoaded(true);
      video.pause();
    };

    video.addEventListener('loadedmetadata', handleLoadedMetadata);

    // Smooth animation loop
    const smoothSeek = () => {
      if (!video.duration) {
        animationFrameRef.current = requestAnimationFrame(smoothSeek);
        return;
      }

      const diff = targetTimeRef.current - currentTimeRef.current;
      
      // Smooth interpolation with easing
      if (Math.abs(diff) > 0.001) {
        currentTimeRef.current += diff * 0.15; // Smooth factor
        video.currentTime = currentTimeRef.current;
      } else {
        currentTimeRef.current = targetTimeRef.current;
        video.currentTime = targetTimeRef.current;
      }

      animationFrameRef.current = requestAnimationFrame(smoothSeek);
    };

    // Start smooth animation loop
    smoothSeek();

    // Scroll handler - update target time only
    const handleScroll = () => {
      if (!video.duration) return;

      const rect = container.getBoundingClientRect();
      const windowHeight = window.innerHeight;
      
      const sectionTop = rect.top;
      const sectionBottom = rect.bottom;
      const sectionHeight = rect.height;
      
      // Section is in viewport
      if (sectionTop < windowHeight && sectionBottom > 0) {
        // Calculate scroll progress within the section
        const visibleTop = Math.max(0, windowHeight - sectionTop);
        const visibleBottom = Math.min(windowHeight, sectionBottom);
        const visibleHeight = visibleBottom - visibleTop;
        
        // Progress from 0 to 1 as section scrolls through viewport
        let scrollFraction = (windowHeight - sectionTop) / (windowHeight + sectionHeight);
        scrollFraction = Math.min(Math.max(scrollFraction, 0), 1);
        
        // Update target time (animation loop will smooth it)
        targetTimeRef.current = scrollFraction * video.duration;
      }
    };

    // Initial position
    video.currentTime = 0;
    targetTimeRef.current = 0;
    currentTimeRef.current = 0;
    handleScroll();

    window.addEventListener('scroll', handleScroll, { passive: true });
    window.addEventListener('resize', handleScroll, { passive: true });

    return () => {
      video.removeEventListener('loadedmetadata', handleLoadedMetadata);
      window.removeEventListener('scroll', handleScroll);
      window.removeEventListener('resize', handleScroll);
      if (animationFrameRef.current) {
        cancelAnimationFrame(animationFrameRef.current);
      }
    };
  }, []);

  return (
    <div ref={containerRef} className={`relative w-full h-full ${className}`}>
      {!isLoaded && (
        <div className="absolute inset-0 flex flex-col items-center justify-center bg-gradient-to-br from-colonial-light-bg to-white z-10">
          <div className="text-center space-y-4">
            <div className="w-16 h-16 border-4 border-colonial-gold border-t-transparent rounded-full animate-spin mx-auto"></div>
            <p className="text-colonial-navy font-semibold text-lg">Loading Video</p>
          </div>
        </div>
      )}
      <video
        ref={videoRef}
        src={videoSrc}
        className="w-full h-full object-cover"
        preload="auto"
        playsInline
        muted
      />
    </div>
  );
}
