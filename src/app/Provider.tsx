"use client";
import { useEffect, useRef } from "react";
import Scrollbar from "smooth-scrollbar";
// import * as barba from '@barba/core';

interface ScrollbarOffset {
  y: number;
}

export default function Provider({ children }: { children: React.ReactNode }) {
  const pageScrollRef = useRef<HTMLDivElement>(null);
  const onurRef = useRef<number>(0.1);

  useEffect(() => {
    // Update damping based on screen size
    onurRef.current = window.innerWidth <= 1024 ? 0.02 : 0.1;

    // Initialize scrollbar
    if (pageScrollRef.current) {
      const scrollbar = Scrollbar.init(pageScrollRef.current, {
        damping: onurRef.current,
      });

      // Handle fixed header
      const handleFixedHeader = (offset: ScrollbarOffset) => {
        const fixedHeader = document.querySelector('#fixed');
        if (fixedHeader && offset.y >= 45) {
          (fixedHeader as HTMLElement).style.top = `${offset.y}px`;
        } else {
          const header = document.querySelector('header');
          if (header) {
            (header as HTMLElement).removeAttribute('style');
          }
        }
      };

      // Add scroll listeners
      scrollbar.addListener(({ offset }) => {
        handleFixedHeader(offset);
      });

      // Cleanup function
      return () => {
        // Destroy scrollbar if it exists
        if (scrollbar) {
          scrollbar.destroy();
        }
      };
    }
  }, []);

  // useEffect(() => {
  //   // BARBA JS
  //   function delay(n = 500): Promise<void> {
  //     return new Promise((resolve) => {
  //       setTimeout(resolve, n);
  //     });
  //   }

  //   // Initialize Barba
  //   barba.init({
  //     transitions: [{
  //       async leave(data) {
  //         const done = this.async();
  //         await pageTransition();
  //         await delay(700);
  //         done();
  //       },

  //       async enter(data) {
  //         await ajaxLoad();
  //         scrollbar.scrollTo(0, 0, 0);
          
  //         const pageCover = document.querySelector('.page-cover');
  //         if (pageCover) {
  //           gsap.to(pageCover, {
  //             marginTop: '0px',
  //             autoAlpha: 1,
  //             delay: 0.4,
  //             ease: 'power3.out'
  //           });

  //           pageCover.classList.add('yoket');
  //           setTimeout(() => {
  //             pageCover.classList.remove('yoket');
  //           }, 1500);
  //         }
  //       },
  //     }],
  //   });

  //   function pageTransition(): gsap.core.Timeline {
  //     const pageCover = document.querySelector('.page-cover');
  //     if (!pageCover) return gsap.timeline();

  //     const tl = gsap.timeline({
  //       yoyo: false,
  //       reversed: false
  //     });

  //     tl.to(pageCover, {
  //       marginTop: '-50px',
  //       autoAlpha: 0,
  //       duration: 0.5,
  //       ease: 'power3.out'
  //     });

  //     return tl;
  //   }

  //   // Cleanup function
  //   return () => {
  //     barba.destroy();
  //   };
  // }, []);

  return (
    <div className="page-cover">
        <div id="page-scroll" ref={pageScrollRef}>
        {children}
        </div>
    </div>
  );
}