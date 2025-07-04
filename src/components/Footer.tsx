import Link from "next/link";

export function Footer() {
  return (
    <footer>
      <div className="container">
        <div className="footer-inner">
          <div className="copyright">
            <p>Copyright 2025 - All right reserved</p>
          </div>
          <ul className="social">
            <li><Link target="_blank" href="https://www.linkedin.com/in/abdurrahman-masdi">Linkedin</Link></li>
            <li><Link target="_blank" href="https://github.com/abdurrahmanmasdi">Github</Link></li>
          </ul>
        </div>
      </div>
    </footer>
  );
}
