import { socialLink } from "../data";
import PageLink from "./PageLink";
function Footer() {
  return (
    <footer className="section footer">
      <PageLink parentClass="footer-links" itemClass="footer-link" />
      <ul className="footer-icons">
        {socialLink.map(({ id, href, icon }) => (
          <li key={id}>
            <a
              href={href}
              target="_blank"
              className="footer-icon"
              rel="noreferrer"
            >
              <i className={icon}></i>
            </a>
          </li>
        ))}
      </ul>
      <p className="copyright">
        copyright &copy; Backroads travel tours company
        <span id="date">{new Date().getFullYear()}</span> all rights reserved
      </p>
    </footer>
  );
}

export default Footer;
