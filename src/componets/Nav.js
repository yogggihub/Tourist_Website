import logo from "../assets/images/logo.svg";
import { socialLink } from "../data";
import PageLink from "./PageLink"
const Nav = () => {
  return (
    <nav className="navbar">
      <div className="nav-center">
        <div className="nav-header">
          <img src={logo} className="nav-logo" alt="backroads" />
          <button type="button" className="nav-toggle" id="nav-toggle">
            <i className="fas fa-bars"></i>
          </button>
        </div>
        {/* <!-- left this comment on purpose --> */}
        <PageLink parentClass="nav-links" itemClass="nav-link" />
        <ul className="nav-icons">
          {socialLink.map(({ id, href, icon }) => (
            <li key={id}>
              <a
                href={href}
                target="_blank"
                className="nav-icon"
                rel="noreferrer"
              >
                <i className={icon}></i>
              </a>
            </li>
          ))}
        </ul>
      </div>
    </nav>
  );
};
export default Nav;
