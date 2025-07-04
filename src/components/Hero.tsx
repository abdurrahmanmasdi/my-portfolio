import { FaRegCalendarAlt, FaWhatsapp } from "react-icons/fa";
import { MdLocationOn } from "react-icons/md";
import { ReactTyped } from "react-typed";



export function Hero() {
  return (
    <section className="hero">
      <div className="row">
        <div className="col-xl-3 col-lg-4 col-md-6 profile-pic">
          <div className="image clip-animation from-center" style={{backgroundImage: "url(/images/profissional.jpeg)"}}>
            <img src="/images/profile.jpg" alt="" />
          </div>
          <div className="social-links clip-animation">
            <ul>
              <li><a href="#" target="_blank">Fb.</a></li>
              <li><a href="#" target="_blank">Tw.</a></li>
              <li><a href="#" target="_blank">Ins.</a></li>
              <li><a href="#" target="_blank">Drb.</a></li>
            </ul>
          </div>
        </div>
        <div className="col-xl-9 col-lg-8 col-md-6 right-content">
          <h5 className="hi classic-animation" data-delay=".5">
            Hello Everyone <span>👋</span>
          </h5>
          <div className="spacer-15"></div>
          <h1 className="hero-big classic-animation" data-delay=".7">
            I'm Abdurrahman masdi<br />
            I am a <ReactTyped 
            className="ml-2 element"
                strings={["team player.", "problem solver.", "creative coder."]} 
                typeSpeed={40} 
                backSpeed={50}
                loop
                backDelay={2000}
            />
          </h1>
          <div className="spacer-30"></div>
          <hr className="clip-animation" data-delay="1" />
          <ul className="row profile-info clip-animation" data-delay="1">
            <li className="col-xl-4 col-lg-6 flex items-center gap-2">
              <FaRegCalendarAlt />
              <span>06.07.2002</span>
            </li>
            <li className="col-xl-4 col-lg-6">
              <a target="_blank" href="https://wa.me/987654321" className="flex items-center gap-2">
                <FaWhatsapp />
                <span>+90 539 341 50 90</span>
              </a>
            </li>
            <li className="col-xl-4 col-lg-6 flex items-center gap-2">
              <MdLocationOn />
              <span>istanbul, turkiye</span>
            </li>
          </ul>
        </div>
      </div>
      <div className="spacer-30"></div>
      <p className="clip-animation" data-delay="1.1">
        I'm a Creative Developer focused on interactive projects like web apps and dynamic websites. I spend most of my time crafting high-quality user experiences and continuously exploring new technologies to improve my development stack. I bring compelling designs to life with smooth transitions and animations, using modern tools to build fully interactive and responsive websites tailored to my clients' needs.
      </p>
    </section>
  );
}
