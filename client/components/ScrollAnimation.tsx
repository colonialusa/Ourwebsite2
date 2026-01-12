import { useEffect, useRef, useState } from 'react';

interface ScrollAnimationProps {
  totalFrames?: number;
  framePrefix?: string;
  className?: string;
}

export default function ScrollAnimation({
  totalFrames = 80,
  framePrefix = '/frames/frame_',
  className = ''
}: ScrollAnimationProps) {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const [images, setImages] = useState<HTMLImageElement[]>([]);
  const [loadProgress, setLoadProgress] = useState(0);
  const frameIndexRef = useRef(0);
  const loadingRef = useRef(false);

  // Progressive loading - load frames in batches
  useEffect(() => {
    if (loadingRef.current) return;
    loadingRef.current = true;

    const loadedImages: HTMLImageElement[] = new Array(totalFrames);
    let loadedCount = 0;
    const batchSize = 10; // Load 10 frames at a time

    const loadBatch = (startIndex: number) => {
      const endIndex = Math.min(startIndex + batchSize, totalFrames);
      
      for (let i = startIndex; i < endIndex; i++) {
        const img = new Image();
        const frameNumber = i.toString().padStart(4, '0');
        img.src = `${framePrefix}${frameNumber}.jpg`;
        
        img.onload = () => {
          loadedCount++;
          setLoadProgress(Math.floor((loadedCount / totalFrames) * 100));
          
          if (loadedCount === totalFrames) {
            setImages(loadedImages);
          } else if (loadedCount === endIndex) {
            // Load next batch
            setTimeout(() => loadBatch(endIndex), 50);
          }
        };
        
        img.onerror = () => {
          loadedCount++;
          setLoadProgress(Math.floor((loadedCount / totalFrames) * 100));
          
          if (loadedCount === totalFrames) {
            setImages(loadedImages);
          } else if (loadedCount === endIndex) {
            setTimeout(() => loadBatch(endIndex), 50);
          }
        };
        
        loadedImages[i] = img;
      }
    };

    loadBatch(0);
  }, [totalFrames, framePrefix]);

  // Handle scroll animation
  useEffect(() => {
    if (images.length === 0 || !images[0]) return;

    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d', { alpha: false });
    if (!ctx) return;

    // Set canvas size
    const updateCanvasSize = () => {
      const container = canvas.parentElement;
      if (container) {
        const dpr = window.devicePixelRatio || 1;
        canvas.width = container.offsetWidth * dpr;
        canvas.height = container.offsetHeight * dpr;
        canvas.style.width = container.offsetWidth + 'px';
        canvas.style.height = container.offsetHeight + 'px';
        ctx.scale(dpr, dpr);
        renderFrame(frameIndexRef.current);
      }
    };

    updateCanvasSize();
    window.addEventListener('resize', updateCanvasSize);

    // Render specific frame
    const renderFrame = (frameIndex: number) => {
      if (!ctx || !images[frameIndex]) return;

      const img = images[frameIndex];
      if (!img.complete) return;

      const container = canvas.parentElement;
      if (!container) return;

      const canvasWidth = container.offsetWidth;
      const canvasHeight = container.offsetHeight;
      
      ctx.clearRect(0, 0, canvasWidth, canvasHeight);

      const canvasAspect = canvasWidth / canvasHeight;
      const imgAspect = img.width / img.height;

      let drawWidth, drawHeight, offsetX, offsetY;

      if (canvasAspect > imgAspect) {
        drawWidth = canvasWidth;
        drawHeight = canvasWidth / imgAspect;
        offsetX = 0;
        offsetY = (canvasHeight - drawHeight) / 2;
      } else {
        drawHeight = canvasHeight;
        drawWidth = canvasHeight * imgAspect;
        offsetX = (canvasWidth - drawWidth) / 2;
        offsetY = 0;
      }

      ctx.drawImage(img, offsetX, offsetY, drawWidth, drawHeight);
    };

    // Scroll handler with throttle
    let ticking = false;
    const handleScroll = () => {
      if (!ticking) {
        window.requestAnimationFrame(() => {
          const scrollTop = window.pageYOffset || document.documentElement.scrollTop;
          const maxScroll = document.documentElement.scrollHeight - window.innerHeight;
          const scrollFraction = Math.min(scrollTop / maxScroll, 1);
          
          const frameIndex = Math.min(
            Math.floor(scrollFraction * (totalFrames - 1)),
            totalFrames - 1
          );

          if (frameIndex !== frameIndexRef.current && images[frameIndex]) {
            frameIndexRef.current = frameIndex;
            renderFrame(frameIndex);
          }
          
          ticking = false;
        });
        ticking = true;
      }
    };

    renderFrame(0);
    window.addEventListener('scroll', handleScroll, { passive: true });

    return () => {
      window.removeEventListener('scroll', handleScroll);
      window.removeEventListener('resize', updateCanvasSize);
    };
  }, [images, totalFrames]);

  return (
    <div className={`relative w-full h-full ${className}`}>
      {loadProgress < 100 && (
        <div className="absolute inset-0 flex flex-col items-center justify-center bg-gradient-to-br from-colonial-light-bg to-white z-10">
          <div className="text-center space-y-4">
            <div className="w-16 h-16 border-4 border-colonial-gold border-t-transparent rounded-full animate-spin mx-auto"></div>
            <p className="text-colonial-navy font-semibold text-lg">Loading Animation</p>
            <div className="w-48 h-2 bg-gray-200 rounded-full overflow-hidden">
              <div 
                className="h-full bg-colonial-gold transition-all duration-300"
                style={{ width: `${loadProgress}%` }}
              ></div>
            </div>
            <p className="text-colonial-gray text-sm">{loadProgress}%</p>
          </div>
        </div>
      )}
      <canvas
        ref={canvasRef}
        className="w-full h-full"
      />
    </div>
  );
}
