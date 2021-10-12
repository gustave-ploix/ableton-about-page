import { useState } from "react";

import "./style.scss";

import DropdownNavbar from "../DropdownNavbar";

import logo from "../../images/logo.svg";

export default function Navbar() {

    const [hide, setHide] = useState(true);


  return (
    <nav>
      <div className="navbar-row">
        <div className="left">
          <img className="logo-svg" src={logo} alt="" />
          <p>
            <a className="nav-link" href="#">
              Live
            </a>
          </p>
          <p>
            <a className="nav-link" href="#">
              Push
            </a>
          </p>
          <p>
            <a className="nav-link" href="#">
              Link
            </a>
          </p>
          <p>
            <a className="nav-link" href="#">
              Shop
            </a>
          </p>
          <p>
            <a className="nav-link" href="#">
              Packs
            </a>
          </p>
          <p>
            <a className="nav-link" href="#">
              Help
            </a>
          </p>
          <p>
            <a className="nav-link" href="#"
                onClick={() => setHide(!hide)}
            >
              More {hide ? "+" : "-"}
            </a>
          </p>
        </div>

        <div className="right">
          <p>
            <a className="nav-link blue-link" href="#">
              Try Live for free
            </a>
          </p>
          <p>
            <a className="nav-link smaller-link" href="#">
              Account
            </a>
          </p>
          <p>
            <a className="nav-link smaller-link" href="#">
              Log Out
            </a>
          </p>
        </div>
      </div>
      <div className={hide ? "dropdown-row-closed" : "dropdown-row-open"}>
        <DropdownNavbar hide={hide} />
      </div>
    </nav>
  );
}
