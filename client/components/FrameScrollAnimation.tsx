import { useEffect, useRef, useState } from 'react';

interface FrameScrollAnimationProps {
  frameCount: number;
  frameBasePath: string;
  framePrefix?: string;
  frameExtension?: string;
  className?: string;
}

export default function FrameScrollAnimation({
  frameCount,
  frameBasePath,
  framePrefix = 'frame_',
  frameExtension = '.jpg',
  className = ''
}: FrameScrollAnimationProps) {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const containerRef = useRef<HTMLDivElement>(null);
  const [isLoaded, setIsLoaded] = useState(false);
  const [loadProgress, setLoadProgress] = useState(0);
  const imagesRef = useRef<HTMLImageElement[]>([]);
  const currentFrameRef = useRef(0);
  const targetFrameRef = useRef(0);
  const animationFrameRef = useRef<number>();

  // Preload all frames
  useEffect(() => {
    const images: HTMLImageElement[] = [];
    let loadedCount = 0;

    const preloadImages = async () => {
      const promises = Array.from({ length: frameCount }, (_, i) => {
        return new Promise<void>((resolve) => {
          const img = new Image();
          const frameNumber = String(i).padStart(4, '0');
          img.src = `${frameBasePath}/${framePrefix}${frameNumber}${frameExtension}`;
          
          img.onload = () => {
            loadedCount++;
            setLoadProgress(Math.round((loadedCount / frameCount) * 100));
            resolve();
          };
          
          img.onerror = () => {
            console.error(`Failed to load frame: ${img.src}`);
            resolve(); // Still resolve to continue loading
          };
          
          images[i] = img;
        });
      });

      await Promise.all(promises);
      imagesRef.current = images;
      setIsLoaded(true);
    };

    preloadImages();
  }, [frameCount, frameBasePath, framePrefix, frameExtension]);

  // Render frame to canvas
  const renderFrame = (frameIndex: number) => {
    const canvas = canvasRef.current;
    const ctx = canvas?.getContext('2d');
    
    if (!canvas || !ctx || !imagesRef.current[frameIndex]) return;

    const img = imagesRef.current[frameIndex];
    
    // Set canvas size to match image dimensions
    if (canvas.width !== img.naturalWidth || canvas.height !== img.naturalHeight) {
      canvas.width = img.naturalWidth;
      canvas.height = img.naturalHeight;
    }

    ctx.clearRect(0, 0, canvas.width, canvas.height);
    ctx.drawImage(img, 0, 0);
  };

  // Smooth animation loop
  useEffect(() => {
    if (!isLoaded) return;

    const smoothRender = () => {
      const diff = targetFrameRef.current - currentFrameRef.current;
      
      // Smooth interpolation
      if (Math.abs(diff) > 0.1) {
        currentFrameRef.current += diff * 0.15; // Smooth factor
      } else {
        currentFrameRef.current = targetFrameRef.current;
      }

      const frameIndex = Math.round(currentFrameRef.current);
      renderFrame(frameIndex);

      animationFrameRef.current = requestAnimationFrame(smoothRender);
    };

    smoothRender();

    return () => {
      if (animationFrameRef.current) {
        cancelAnimationFrame(animationFrameRef.current);
      }
    };
  }, [isLoaded]);

  // Scroll handler
  useEffect(() => {
    if (!isLoaded) return;

    const container = containerRef.current;
    if (!container) return;

    const handleScroll = () => {
      // Get the parent section element (the one with height: 300vh)
      const section = container.closest('section');
      if (!section) return;

      const rect = section.getBoundingClientRect();
      const sectionHeight = rect.height;
      const windowHeight = window.innerHeight;
      
      // Calculate how far we've scrolled through the section
      // When section.top = 0, we're at the start of the section
      // When section.top = -(sectionHeight - windowHeight), we're at the end
      const scrollProgress = -rect.top / (sectionHeight - windowHeight);
      
      // Clamp between 0 and 1
      const clampedProgress = Math.min(Math.max(scrollProgress, 0), 1);
      
      // Map to frame index (continuous, no pauses)
      targetFrameRef.current = clampedProgress * (frameCount - 1);
    };

    // Initial render
    renderFrame(0);
    handleScroll();

    window.addEventListener('scroll', handleScroll, { passive: true });
    window.addEventListener('resize', handleScroll, { passive: true });

    return () => {
      window.removeEventListener('scroll', handleScroll);
      window.removeEventListener('resize', handleScroll);
    };
  }, [isLoaded, frameCount]);

  return (
    <div ref={containerRef} className={`relative w-full h-full ${className}`}>
      {!isLoaded && (
        <div className="absolute inset-0 flex flex-col items-center justify-center bg-gradient-to-br from-colonial-light-bg to-white z-10">
          <div className="text-center space-y-4">
            <div className="w-16 h-16 border-4 border-colonial-gold border-t-transparent rounded-full animate-spin mx-auto"></div>
            <p className="text-colonial-navy font-semibold text-lg">Loading Animation</p>
            <p className="text-colonial-gray text-sm">{loadProgress}%</p>
          </div>
        </div>
      )}
      <canvas
        ref={canvasRef}
        className="w-full h-full object-cover"
        style={{ opacity: isLoaded ? 1 : 0 }}
      />
    </div>
  );
}
