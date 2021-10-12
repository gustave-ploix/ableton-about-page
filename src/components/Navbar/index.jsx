import { useState } from "react";

import "./style.scss";

import DropdownNavbar from "../DropdownNavbar";
import JobNavbarFixed from "../JobNavbarFixed";

import logo from "../../images/logo.svg";

export default function Navbar() {
  const [hide, setHide] = useState(true);

  return (
    <nav>
      <div className="navbar">
        <div className="navbar-row">
          <div className="left">
            <img className="logo-svg" src={logo} alt="" />
            <p>
              <a className="nav-link" href="#0">
                Live
              </a>
            </p>
            <p>
              <a className="nav-link" href="#0">
                Push
              </a>
            </p>
            <p>
              <a className="nav-link" href="#0">
                Link
              </a>
            </p>
            <p>
              <a className="nav-link" href="#0">
                Shop
              </a>
            </p>
            <p>
              <a className="nav-link" href="#0">
                Packs
              </a>
            </p>
            <p>
              <a className="nav-link" href="#0">
                Help
              </a>
            </p>
            <p>
              <a className="nav-link" href="#0" onClick={() => setHide(!hide)}>
                More {hide ? "+" : "-"}
              </a>
            </p>
          </div>

          <div className="right">
            <p>
              <a className="nav-link blue-link" href="#0">
                Try Live for free
              </a>
            </p>
            <p>
              <a className="nav-link smaller-link" href="#0">
                Account
              </a>
            </p>
            <p>
              <a className="nav-link smaller-link" href="#0">
                Log Out
              </a>
            </p>
          </div>
        </div>
        <div className={hide ? "dropdown-row-closed" : "dropdown-row-open"}>
          <DropdownNavbar hide={hide} />
        </div>
      </div>

      <JobNavbarFixed />
    </nav>
  );
}
