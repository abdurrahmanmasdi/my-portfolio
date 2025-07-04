"use client"
import Link from "next/link";
import { useEffect } from "react";
import { gsap } from "gsap";
import { useRef } from "react";

export function Navigation() {
  const headerRef = useRef<HTMLDivElement>(null);
  const hamburgerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const headerAnimation = gsap.timeline({ yoyo: false, reversed: true });
    headerAnimation.pause();

    if (headerRef.current) {
      const navItems = headerRef.current.querySelectorAll('nav ul li');
      headerAnimation.to(navItems, {
        autoAlpha: 1,
        x: 0,
        stagger: 0.05,
        ease: "power2.out" as const
      });
    }

    const handleNavigation = () => {
      if (headerAnimation.reversed()) {
        headerAnimation.play();
      } else {
        headerAnimation.reverse();
      }
      document.body.classList.toggle('header-is-active');
    };

    if (hamburgerRef.current) {
      hamburgerRef.current.addEventListener('click', handleNavigation);
    }

    const navLinks = document.querySelectorAll('header ul li a');
    navLinks.forEach(link => {
      link.addEventListener('click', handleNavigation);
    });

    return () => {
      if (hamburgerRef.current) {
        hamburgerRef.current.removeEventListener('click', handleNavigation);
      }
      navLinks.forEach(link => {
        link.removeEventListener('click', handleNavigation);
      });
    };
  }, []);

  return (
    <header ref={headerRef} id="fixed">
      <div ref={hamburgerRef} className="hamburger hamburger--elastic">
        <span className="hamburger-box">
          <span className="hamburger-inner"></span>
        </span>
      </div>
      <nav>
        <ul>
          <li><Link className="active" href="/">Home</Link></li>
          <li><Link href="/resume">Resume</Link></li>
          <li><Link href="/portfolio">Portfolio</Link></li>
          <li><Link href="/contact">Contact</Link></li>
        </ul>
      </nav>
    </header>
  );
}
