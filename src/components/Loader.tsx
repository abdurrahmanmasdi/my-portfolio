"use client";
import React, { useEffect, useRef } from 'react';
import { gsap } from 'gsap';

interface LoaderProps {
  className?: string;
}

const Loader: React.FC<LoaderProps> = ({ className = '' }) => {
  const loaderRef = useRef<HTMLDivElement>(null);
  const loadingRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const timeline = gsap.timeline();
    
    timeline
      .to('.js-circle', { strokeDashoffset: 0, duration: 0.7, delay: 1 })
      .to(loadingRef.current, { y: -100, autoAlpha: 0, duration: 0.7, delay: 0.7 })
      .to(loaderRef.current, { y: -3000, duration: 3, ease: 'easeOutExpo' });

    // Remove loader after animation completes
    timeline.eventCallback('onComplete', () => {
      loaderRef.current?.remove();
    });

    // Cleanup animation
    return () => {
      timeline.kill();
    };
  }, []);

  return (
    <div id="loader" ref={loaderRef} className="preloader">
      <div ref={loadingRef} className="loading">
        <div className="profile-image">

          <img src="images/profile-loader.jpeg" alt="" />
          
          <svg style={{ position: 'absolute' }} width="100px" height="100px" viewBox="0 0 100 100" preserveAspectRatio="none">
            <circle 
              className="js-circle circle" 
              cx="50" 
              cy="50" 
              r="48" 
              stroke="white" 
              strokeWidth="2" 
              fill="none"  
            />
            <circle 
              className="js-circle circletwo" 
              cx="50" 
              cy="50" 
              r="48" 
              stroke="white" 
              strokeWidth="2" 
              fill="none"  
            />
        </svg>
      </div>
    </div>
  </div>
  );
};

export {Loader};
