"use client";
import { useEffect, useRef } from "react";
import { Chart, registerables, ChartConfiguration, ChartData, ChartType } from 'chart.js';
import gsap from "gsap";
import { Navigation } from "@/components";

Chart.register(...registerables);

const createChart = (canvasRef: React.RefObject<HTMLCanvasElement | null>, value: number, isDarkMode: boolean) => {
  if (!canvasRef.current) return null;

  const ctx = canvasRef.current.getContext('2d');
  if (!ctx) return null;

  const trackColor = isDarkMode ? '#363636' : '#000';
  const chartColor = '#D1ED5D';

  const data: ChartData<'doughnut'> = {
    datasets: [{
      data: [value, 100 - value],
      backgroundColor: [chartColor, trackColor],
      borderWidth: 0

    }]
  };

  const config: ChartConfiguration<'doughnut'> = {
    type: 'doughnut',
    data,
    options: {
      responsive: true,
      cutout: '80%',
      plugins: {
        legend: {
          display: false
        }
      }
    }
  };

  return new Chart(ctx, config) as Chart;
}

export default function Resume() {
  const chartRefs = {
    arabic: useRef<HTMLCanvasElement>(null),
    english: useRef<HTMLCanvasElement>(null),
    turkish: useRef<HTMLCanvasElement>(null),
  };

  useEffect(() => {
    const isDarkMode = document.body.classList.contains('dark-version');
    const charts = {
      arabic: createChart(chartRefs.arabic, 100, isDarkMode),
      english: createChart(chartRefs.english, 75, isDarkMode),
      turkish: createChart(chartRefs.turkish, 75, isDarkMode),
    };

    // Animate progress bars
    const progressBars = document.querySelectorAll('.skill-list .percentage');
    progressBars.forEach(bar => {
      const targetWidth = bar.getAttribute('data-percent');
      if (targetWidth) {
        gsap.to(bar, {
          width: targetWidth,
          duration: 2,
          delay: 2,
          ease: 'power2.out'
        });
      }
    });







    // Cleanup charts when component unmounts
    return () => {
      Object.values(charts).forEach(chart => {
        if (chart) {
          chart.destroy();
        }
      });
    };
  }, []);


  return (
    <div className="page-wrapper">

      <h5 className="underline-title">MY RESUME</h5>

      {/* Timeline Work */}
      <div className="spacer-90"></div>

      <div className="timeline-caption-outer">
        <div className="timeline-caption text-black">👨‍💻 <span className="!font-bold">Works Experiences</span></div>
      </div>

      <div className="timeline row">
        {/* item */}
        <div className="col-xl-6 col-lg-6 col-md-6 col-sm-12 timeline-item clip-animation from-top" data-duration="1.5">
          <div className="timeline-outer">
            <span className="mini-text">2010 - Present</span>
            <h5>Senior Frontend Engineer - TUR34</h5>
            <p className="little-p">I would gladly pay over 600 dollars for tavonline. Tavonline has really helped our business. I like tavonline more and more each day because it makes my life a lot easier.</p>
          </div>
        </div>

        {/* item */}
        <div className="col-xl-6 offset-xl-6 col-lg-6 offset-lg-6 col-md-6 offset-md-6 col-sm-12 timeline-item  clip-animation from-top" data-duration="1.5">
          <div className="timeline-outer">
            <span className="mini-text">2008 - 2010</span>
            <h5>React Developer - StartGate</h5>
            <p className="little-p"></p>
          </div>
        </div>

        {/* item */}
        <div className="col-xl-6 col-lg-6 col-md-6 col-sm-12 timeline-item clip-animation from-top" data-duration="1.5" >
          <div className="timeline-outer">
            <span className="mini-text">2005 - 2008</span>
            <h5>React Developer - ORGİNO MEDYA A.Ş.</h5>
            <p className="little-p"></p>
          </div>
        </div>

        {/* item */}
        <div className="col-xl-6 offset-xl-6 col-lg-6 offset-lg-6 col-md-6 offset-md-6 col-sm-12  timeline-item clip-animation from-top" data-duration="1.5" >
          <div className="timeline-outer">
            <span className="mini-text">2004 - 2008</span>
            <h5>Frontend Developer - ORGİNO MEDYA A.Ş.</h5>
            <p className="little-p"></p>
          </div>
        </div>
      </div>




      {/* Timeline */}
      <div className="spacer-120"></div>
      <div className="timeline-caption-outer">
        <div className="timeline-caption text-black">🎓 <span className="!font-bold">Education</span></div>
      </div>
      <div className="timeline row">
        {/* item */}
        <div className="col-xl-6 col-lg-6 col-md-6 col-sm-12 timeline-item clip-animation from-top" data-duration="1.5">
          <div className="timeline-outer">
            <span className="mini-text">2024 - 2028</span>
            <h5>Istanbul aydin University</h5>
            <p className="little-p">I’m currently studying Software Engineering at Aydın University, focusing on programming, algorithms, and system design through hands-on, project-based learning with modern technologies.</p>
          </div>
        </div>
        {/* item */}
        <div className="col-xl-6 offset-xl-6 col-lg-6 offset-lg-6 col-md-6 offset-md-6 col-sm-12 timeline-item clip-animation from-top" data-duration="1.5">
          <div className="timeline-outer">
            <span className="mini-text">2021</span>
            <h5>Web Development Bootcamp</h5>
            <p className="little-p">Completed an intensive Front-End Web Development Bootcamp focused on building modern, responsive web applications using HTML, CSS, JavaScript, and React. Gained hands-on experience through real projects and collaborative coding.</p>
          </div>
        </div>
      </div>






      <div className="spacer-60"></div>

      <div className="skills">
        <h5 className="underline-title classic-animation">My Skills</h5>
        <div className="spacer-60"></div>

        <div className="row">
          <div className="col-xl-1 col-lg-1 col-md-1 col-sm-1 col-1 classic-animation"  >
            <h2 className="skills-category">LANGUAGE</h2>
          </div>
          <div className="col-xl-11 col-lg-11 col-md-11 col-sm-11 col-11">
            <div className="row min-h-52 items-center">

              <div className="pie-chart col-xl-4 col-lg-4 col-md-4 col-sm-6 col-6 classic-animation max-h-28 flex flex-col justify-center items-center"  >
                <canvas ref={chartRefs.arabic} width="150" height="150" />
                <span className="percent">100</span>
                <div className="skills-description">
                  <h6>Arabic</h6>
                </div>
              </div>

              <div className="pie-chart col-xl-4 col-lg-4 col-md-4 col-sm-6 col-6 classic-animation  max-h-28 flex flex-col justify-center items-center"  >
                <canvas ref={chartRefs.english} width="150" height="150" />
                <span className="percent">75</span>
                <div className="skills-description">
                  <h6>English</h6>
                </div>
              </div>

              <div className="pie-chart col-xl-4 col-lg-4 col-md-4 col-sm-6 col-6 classic-animation max-h-28 flex flex-col justify-center items-center" >
                <canvas ref={chartRefs.turkish} width="150" height="150" />
                <span className="percent">75</span>
                <div className="skills-description">
                  <h6>Turkish</h6>
                </div>
              </div>

            </div>
          </div>
        </div>
        <div className="spacer-45"></div>
        <hr />
        <div className="spacer-45"></div>

        <h5 className="underline-title mb-5">Skills</h5>

        <div className="row">

          <div className="col-xl-1 col-lg-1 col-md-1 col-sm-1 col-1 classic-animation">
            <h2 className="skills-category"></h2>
          </div>

          <div className="col-xl-5 col-lg-5 col-md-5 col-sm-11 col-11 classic-animation"  >
            <ul className="skill-list">
              <li>
                <div className="bar-info">
                  <h3>Javascript</h3>
                  <span>95%</span>
                </div>
                <div className="progress">
                  <div className="percentage" data-percent="95%"></div>
                </div>
              </li>
              <li>
                <div className="bar-info">
                  <h3>Typescript</h3>
                  <span>95%</span>
                </div>
                <div className="progress">
                  <div className="percentage" data-percent="95%"></div>
                </div>
              </li>
              <li>
                <div className="bar-info">
                  <h3>Python</h3>
                  <span>55%</span>
                </div>
                <div className="progress">
                  <div className="percentage" data-percent="55%"></div>
                </div>
              </li>
              <li>
                <div className="bar-info">
                  <h3>Nodejs</h3>
                  <span>80%</span>
                </div>
                <div className="progress">
                  <div className="percentage" data-percent="80%"></div>
                </div>
              </li>



              <li>
                <div className="bar-info">
                  <h3>MongoDB</h3>
                  <span>80%</span>
                </div>
                <div className="progress">
                  <div className="percentage" data-percent="80%"></div>
                </div>
              </li>
              <li>
                <div className="bar-info">
                  <h3>Redis</h3>
                  <span>80%</span>
                </div>
                <div className="progress">
                  <div className="percentage" data-percent="80%"></div>
                </div>
              </li>
              <li>
                <div className="bar-info">
                  <h3>Jest</h3>
                  <span>65%</span>
                </div>
                <div className="progress">
                  <div className="percentage" data-percent="65%"></div>
                </div>
              </li>
              <li>
                <div className="bar-info">
                  <h3>Test-Driven Development (TDD)</h3>
                  <span>100%</span>
                </div>
                <div className="progress">
                  <div className="percentage" data-percent="100%"></div>
                </div>
              </li>
              <li>
                <div className="bar-info">
                  <h3>Nest.js</h3>
                  <span>75%</span>
                </div>
                <div className="progress">
                  <div className="percentage" data-percent="75%"></div>
                </div>
              </li>

              <li>
                <div className="bar-info">
                  <h3>GraphQL</h3>
                  <span>55%</span>
                </div>
                <div className="progress">
                  <div className="percentage" data-percent="55%"></div>
                </div>
              </li>
              <li>
                <div className="bar-info">
                  <h3>REST API</h3>
                  <span>100%</span>
                </div>
                <div className="progress">
                  <div className="percentage" data-percent="100%"></div>
                </div>
              </li>


              <li>
                <div className="bar-info">
                  <h3>Docker</h3>
                  <span>65%</span>
                </div>
                <div className="progress">
                  <div className="percentage" data-percent="65%"></div>
                </div>
              </li>
            </ul>
          </div>

          <div className="col-xl-1 col-lg-1 col-md-1 col-sm-1 col-1 classic-animation"  >
            <h2 className="skills-category"></h2>
          </div>
          <div className="col-xl-5 col-lg-5 col-md-5 col-sm-11 col-11 classic-animation"  >
            <ul className="skill-list">
              <li>
                <div className="bar-info">
                  <h3>React</h3>
                  <span>95%</span>
                </div>
                <div className="progress">
                  <div className="percentage" data-percent="95%"></div>
                </div>
              </li>
              <li>
                <div className="bar-info">
                  <h3>Nextjs</h3>
                  <span>95%</span>
                </div>
                <div className="progress">
                  <div className="percentage" data-percent="95%"></div>
                </div>
              </li>
              <li>
                <div className="bar-info">
                  <h3>Scss</h3>
                  <span>100%</span>
                </div>
                <div className="progress">
                  <div className="percentage" data-percent="100%"></div>
                </div>
              </li>
              <li>
                <div className="bar-info">
                  <h3>Git</h3>
                  <span>100%</span>
                </div>
                <div className="progress">
                  <div className="percentage" data-percent="100%"></div>
                </div>
              </li>
              <li>
                <div className="bar-info">
                  <h3>Progressive Web Applications (PWA)</h3>
                  <span>100%</span>
                </div>
                <div className="progress">
                  <div className="percentage" data-percent="100%"></div>
                </div>
              </li>
              <li>
                <div className="bar-info">
                  <h3>Storybook</h3>
                  <span>50%</span>
                </div>
                <div className="progress">
                  <div className="percentage" data-percent="50%"></div>
                </div>
              </li>
              <li>
                <div className="bar-info">
                  <h3>Vuejs</h3>
                  <span>80%</span>
                </div>
                <div className="progress">
                  <div className="percentage" data-percent="80%"></div>
                </div>
              </li>
              <li>
                <div className="bar-info">
                  <h3>shadcn Ui</h3>
                  <span>100%</span>
                </div>
                <div className="progress">
                  <div className="percentage" data-percent="100%"></div>
                </div>
              </li>
              <li>
                <div className="bar-info">
                  <h3>HTML5</h3>
                  <span>100%</span>
                </div>
                <div className="progress">
                  <div className="percentage" data-percent="100%"></div>
                </div>
              </li>
              <li>
                <div className="bar-info">
                  <h3>CSS3</h3>
                  <span>100%</span>
                </div>
                <div className="progress">
                  <div className="percentage" data-percent="100%"></div>
                </div>
              </li>
            </ul>
          </div>
        </div>

      </div>




    </div>
  )
}