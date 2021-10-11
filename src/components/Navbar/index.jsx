import "./style.scss";

import logo from "../../images/logo.svg";

export default function Navbar() {
  return (
    <nav>
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
          <a className="nav-link" href="#">
            More +
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
    </nav>
  );
}
