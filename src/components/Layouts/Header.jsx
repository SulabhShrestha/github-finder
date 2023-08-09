import {NavLink} from "react-router-dom";
import {FaGithub} from "react-icons/fa"


function Header() {
    return (
      <nav className="navbar bg-base-100 mx-auto border-b-2">
        <div className="flex-1">
          <div className="logo">
            <FaGithub size="36px" className="inline-block" />
            <span>Github finder</span>
          </div>
        </div>
        <div className="flex-none">
          <ul className="menu menu-horizontal px-1">
            {[
              ["Home", "/"],
              ["About", "/team"],
            ].map(([title, url]) => (
              <NavLink
                to={url}
                className="rounded-lg px-3 py-2 text-slate-700 font-medium hover:bg-slate-100 hover:text-slate-900"
              >
                {title}
              </NavLink>
            ))}
          </ul>
        </div>
      </nav>
    );
}

export default Header;