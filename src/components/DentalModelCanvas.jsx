import React, { useEffect, useRef, useState } from 'react';

/**
 * High-performance DentalModelCanvas
 * Preloads the 150-frame WebP sequence and scrubs smoothly via canvas drawImage.
 * Uses source-crop to eliminate the bottom studio reflection edge, and soft blending
 * with pure white/ambient backdrops for seamless integration.
 */
export default function DentalModelCanvas({ frameIndex = 0, className = '' }) {
  const canvasRef = useRef(null);
  const imagesRef = useRef([]);
  const [loadedCount, setLoadedCount] = useState(0);
  const [initialLoaded, setInitialLoaded] = useState(false);
  const totalFrames = 150;

  // Preload frames with priority on keyframes (1, 56, 80, 109, 150)
  useEffect(() => {
    const keyframeIndices = [1, 56, 80, 109, 150];
    const loadedImages = new Array(totalFrames);
    let count = 0;

    const pad = (n) => String(n).padStart(3, '0');

    const loadImage = (i) => {
      return new Promise((resolve) => {
        const img = new Image();
        img.src = `/sequence/frame_${pad(i)}.webp`;
        img.onload = () => {
          loadedImages[i - 1] = img;
          count++;
          setLoadedCount(count);
          if (i === 1) setInitialLoaded(true);
          resolve(img);
        };
        img.onerror = () => {
          resolve(null);
        };
      });
    };

    // Load keyframes first
    Promise.all(keyframeIndices.map(loadImage)).then(() => {
      // Then load all remaining frames in batches
      const remaining = [];
      for (let i = 1; i <= totalFrames; i++) {
        if (!keyframeIndices.includes(i)) {
          remaining.push(i);
        }
      }

      const loadBatch = async () => {
        const batchSize = 10;
        for (let b = 0; b < remaining.length; b += batchSize) {
          const chunk = remaining.slice(b, b + batchSize);
          await Promise.all(chunk.map(loadImage));
        }
      };

      loadBatch();
    });

    imagesRef.current = loadedImages;
  }, []);

  // Render current frame to canvas
  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    const idx = Math.min(Math.max(Math.round(frameIndex), 0), totalFrames - 1);
    
    // Find closest loaded image if exact frame is still downloading
    let img = imagesRef.current[idx];
    if (!img) {
      for (let offset = 1; offset < totalFrames; offset++) {
        if (imagesRef.current[idx - offset]) {
          img = imagesRef.current[idx - offset];
          break;
        }
        if (imagesRef.current[idx + offset]) {
          img = imagesRef.current[idx + offset];
          break;
        }
      }
    }

    if (img && img.complete && img.naturalWidth > 0) {
      const dpr = Math.min(window.devicePixelRatio || 1, 2);
      const displayWidth = 960;
      // Crop 42 pixels from bottom of the 540p source to eliminate studio reflection edge
      const cropBottom = 44;
      const srcW = img.naturalWidth;
      const srcH = img.naturalHeight - cropBottom;
      const displayHeight = Math.round(displayWidth * (srcH / srcW));

      if (canvas.width !== displayWidth * dpr || canvas.height !== displayHeight * dpr) {
        canvas.width = displayWidth * dpr;
        canvas.height = displayHeight * dpr;
      }

      ctx.save();
      ctx.scale(dpr, dpr);
      ctx.imageSmoothingEnabled = true;
      ctx.imageSmoothingQuality = 'high';
      ctx.clearRect(0, 0, displayWidth, displayHeight);

      // Draw with bottom cropped
      ctx.drawImage(
        img,
        0, 0, srcW, srcH,
        0, 0, displayWidth, displayHeight
      );

      ctx.restore();
    }
  }, [frameIndex, loadedCount]);

  return (
    <div className={`relative flex items-center justify-center ${className}`}>
      {/* Fallback image before canvas initializes */}
      {!initialLoaded && (
        <img
          src="/sequence/frame_001.webp"
          alt="Dental Anatomy 3D Model"
          className="w-full h-auto object-contain blend-dental-canvas"
        />
      )}
      <canvas
        ref={canvasRef}
        style={{
          width: '100%',
          height: 'auto',
          maxWidth: '820px',
        }}
        className="blend-dental-canvas object-contain select-none pointer-events-none drop-shadow-sm transition-opacity duration-300"
      />
    </div>
  );
}
