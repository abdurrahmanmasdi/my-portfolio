"use client"
import Link from "next/link";
import { useEffect, useState } from "react";
import { gsap } from "gsap";
import { useRef } from "react";
import { usePathname } from "next/navigation";

export function Navigation() {
  const headerRef = useRef<HTMLDivElement>(null);
  const hamburgerRef = useRef<HTMLDivElement>(null);

  const [activeLink, setActiveLink] = useState("/");
  const pathname = usePathname()
  
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
  
  
  useEffect(() => {
    setActiveLink(pathname);
  }, [pathname])
  
  
  
  return (
    <header ref={headerRef} id="fixed">
      <div ref={hamburgerRef} className="hamburger hamburger--elastic">
        <span className="hamburger-box">
          <span className="hamburger-inner"></span>
        </span>
      </div>
      <nav>
        <ul>
          <li onClick={() => setActiveLink("/")}><Link className={activeLink === "/" ? "active" : ""} href="/">Home</Link></li>
          <li onClick={() => setActiveLink("/resume")}><Link className={activeLink === "/resume" ? "active" : ""} href="/resume">Resume</Link></li>
          {/* <li onClick={() => setActiveLink("/portfolio")}><Link className={activeLink === "/portfolio" ? "active" : ""} href="/portfolio">Portfolio</Link></li> */}
        </ul>
      </nav>
    </header>
  );
}
