import React from 'react';
import { RiComputerLine, RiSettings3Line } from "react-icons/ri";
import { SiCcleaner } from "react-icons/si";
import { PiStrategy } from "react-icons/pi";
import { RiSeoLine } from "react-icons/ri";
import { BiMobileAlt } from 'react-icons/bi';

interface Service {
  icon: React.ReactElement;
  title: string;
  description?: string;
}

interface ServiceItemProps extends Service {
  className?: string;
}

function ServiceItem({ icon, title, className = '' }: ServiceItemProps) {
  return (
    <div className={`service-item ${className}`}>
      <span className="!text-5xl">{icon}</span>
      <h5 dangerouslySetInnerHTML={{ __html: title }} />
    </div>
  );
}

const services: Service[] = [
  {
    icon: <RiComputerLine className="" />,
    title: 'Web Sites and <br /> Platforms',
  },
  {
    icon: <BiMobileAlt className="" />,
    title: 'Mobile <br /> Applications',
  },
  {
    icon: <PiStrategy className="" />,
    title: ' Website Maintenance <br /> & Support',
  },
  {
    icon: <SiCcleaner className="" />,
    title: 'Code Refactoring <br /> & Cleanup',
  },
  {
    icon: <RiSeoLine className="" />,
    title: 'Seo <br /> Optimization',
  },
  {
    icon: <RiSettings3Line className="" />,
    title: 'Dashboard Systems <br /> support',
  }
];

export function Services() {
  return (
    <section className="services scale-animation" data-delay="1.3">
      <div className="spacer-45"></div>
      <div className="spacer-45"></div>
      <h5 className="underline-title">What I Do</h5>

      <div className="row services">
        <div className="spacer-60"></div>
        {services.map((service, index) => (
          <div key={index} className="col-xl-4 col-lg-4 col-md-6 col-sm-6">
            <ServiceItem {...service} />
          </div>
        ))}
      </div>
    </section>
  );
}
     