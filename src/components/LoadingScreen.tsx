"use client";
import React, { useState, useEffect } from 'react';

interface LoadingScreenProps {
  // Add any props here if needed in the future
}

const LoadingScreen: React.FC<LoadingScreenProps> = () => {
  const [loading, setLoading] = useState<boolean>(true);
  const [fadeOut, setFadeOut] = useState<boolean>(false);

  useEffect(() => {
    const handleLoad = (): void => {
      setTimeout(() => {
        setFadeOut(true);
        setTimeout(() => setLoading(false), 1200);
      }, 1000);
    };

    if (document.readyState === 'complete') {
      handleLoad();
    } else {
      window.addEventListener('load', handleLoad);
    }

    return () => window.removeEventListener('load', handleLoad);
  }, []);

  if (!loading) return null;

  return (
    <div
      className={`fixed inset-0 z-50 flex flex-col items-center justify-center overflow-hidden
      bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 ${
        fadeOut ? 'animate-fadeOut' : ''
      }`}
    >
      {/* Background Effects */}
      <div className="absolute inset-0 bg-grid-pattern opacity-10"></div>
      <div className="absolute inset-0 animate-pulse-slow">
        <div className="absolute inset-0 bg-gradient-to-t from-blue-500/10 via-transparent to-transparent"></div>
      </div>
      
      {/* Animated lines */}
      <div className="absolute inset-0 overflow-hidden">
        {[...Array(5)].map((_, i) => (
          <div
            key={i}
            className="absolute h-px w-full bg-gradient-to-r from-transparent via-blue-500/50 to-transparent animate-scanning"
            style={{
              top: `${20 * (i + 1)}%`,
              animationDelay: `${i * 0.5}s`
            }}
          ></div>
        ))}
      </div>

      {/* Hexagon Grid Pattern */}
      <div className="absolute inset-0 opacity-5 animate-pulse-slow">
        <div className="absolute inset-0 bg-hex-pattern"></div>
      </div>

      {/* Main Loader */}
      <div className="relative z-10 flex flex-col items-center">
        <div className="relative w-32 h-32">
          {/* Outer rotating hexagon */}
          <div className="absolute inset-0 animate-spin-slow">
            <svg className="w-full h-full" viewBox="0 0 100 100">
              <polygon
                points="50 3, 90 25, 90 75, 50 97, 10 75, 10 25"
                fill="none"
                stroke="rgba(59, 130, 246, 0.5)"
                strokeWidth="1"
                className="animate-pulse"
              />
            </svg>
          </div>

          {/* Middle rotating ring */}
          <div className="absolute inset-2 rounded-full border border-blue-500/30 animate-spin" style={{ animationDirection: 'reverse' }}></div>

          {/* Core loader */}
          <div className="absolute inset-4">
            {/* Pulsing background */}
            <div className="absolute inset-0 rounded-full bg-blue-500/20 animate-pulse"></div>
            
            {/* Spinning rings */}
            <div className="absolute inset-0 rounded-full border-4 border-t-blue-500 border-r-blue-400 border-b-blue-300 border-l-transparent animate-spin"></div>
            
            {/* Center core */}
            <div className="absolute inset-2 rounded-full bg-gradient-to-br from-blue-400 to-blue-600 animate-pulse">
              <div className="absolute inset-1 rounded-full bg-gray-900"></div>
            </div>
          </div>
        </div>

        {/* Loading text */}
        <div className="mt-8 text-xl font-light tracking-wider text-gray-300">
          <span className="inline-block animate-pulse">LOADING SYSTEM</span>
          <span className="inline-block w-1 h-1 ml-1 bg-blue-500 rounded-full animate-blink"></span>
        </div>

        {/* Progress line */}
        <div className="mt-4 w-48 h-px bg-gray-700 overflow-hidden">
          <div className="h-full w-full bg-blue-500 animate-progress"></div>
        </div>
      </div>
    </div>
  );
};

// Add required styles
if (typeof document !== 'undefined') {
  const style = document.createElement('style');
  style.textContent = `
    @keyframes fadeOut {
      from { opacity: 1; }
      to { opacity: 0; }
    }
    
    @keyframes scanning {
      from { transform: translateX(-100%); }
      to { transform: translateX(100%); }
    }

    @keyframes blink {
      0%, 100% { opacity: 0; }
      50% { opacity: 1; }
    }

    @keyframes progress {
      0% { transform: translateX(-100%); }
      100% { transform: translateX(100%); }
    }

    .animate-fadeOut {
      animation: fadeOut 1.2s ease-in-out forwards;
    }

    .animate-spin-slow {
      animation: spin 3s linear infinite;
    }

    .animate-pulse-slow {
      animation: pulse 4s cubic-bezier(0.4, 0, 0.6, 1) infinite;
    }

    .animate-scanning {
      animation: scanning 4s linear infinite;
    }

    .animate-blink {
      animation: blink 1s steps(1) infinite;
    }

    .animate-progress {
      animation: progress 2s linear infinite;
    }

    .bg-grid-pattern {
      background-image: linear-gradient(rgba(59, 130, 246, 0.2) 1px, transparent 1px),
        linear-gradient(90deg, rgba(59, 130, 246, 0.2) 1px, transparent 1px);
      background-size: 20px 20px;
    }

    .bg-hex-pattern {
      background-image: url("data:image/svg+xml,%3Csvg width='24' height='24' viewBox='0 0 24 24' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath fill='%233B82F6' fill-opacity='0.2' d='M12 0l12 6v12l-12 6L0 18V6z'/%3E%3C/svg%3E");
      background-size: 24px 24px;
    }
  `;
  document.head.appendChild(style);
}

export default LoadingScreen;