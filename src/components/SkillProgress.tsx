"use client";
import { useEffect } from "react";
import gsap from "gsap";

interface SkillProgressProps {
  title: string;
  percentage: number;
}

const SkillProgress: React.FC<SkillProgressProps> = ({ title, percentage }) => {
  useEffect(() => {
    const progress = document.querySelector(`.skill-${title.toLowerCase().replace(/\s+/g, '-')}`);
    if (progress) {
      gsap.to(progress, {
        width: `${percentage}%`,
        duration: 2,
        delay: 2,
        ease: 'power2.out'
      });
    }
  }, [percentage, title]);

  return (
    <li>
      <div className="bar-info">
        <h3>{title}</h3>
        <span>{percentage}%</span>
      </div>
      <div className="progress">
        <div className="percentage" data-percent={`${percentage}%`} id={`skill-${title.toLowerCase().replace(/\s+/g, '-')}`} />
      </div>
    </li>
  );
};

export default SkillProgress;
