"use client"
import { Hero, Services, Testimonials } from "@/components";

export default function Home() {
  return (
    <div className="page-wrapper">
      
      <Hero />
      <Services />
      <Testimonials />
    </div>
  );
}