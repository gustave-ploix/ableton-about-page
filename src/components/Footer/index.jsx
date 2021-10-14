import "./style.scss";

import logoFooter from "../../images/logo-footer.svg";

export default function Footer() {
  return (
    <footer className="footer">
      <h1 className="footer__title">Ableton</h1>
      <div className="footer__cards-row">
        <div className="footer__card">
          <p>
            <a href="#0">Register Live or Push &gt;</a>
          </p>
          <p>
            <a href="#0">About ableton &gt;</a>
          </p>
          <p>
            <a href="#0">Jobs &gt;</a>
          </p>
          <div className="footer__icons-row">
            <div className="icon"></div>
            <div className="icon"></div>
            <div className="icon"></div>
            <div className="icon"></div>
          </div>
        </div>
        <div className="footer__card">
          <h3 className="footer__card-title">Education</h3>
          <p>
            <a href="#0">Offers for students and teachers &gt;</a>
          </p>
          <p>
            <a href="#0">Ableton for the Classroom &gt;</a>
          </p>
          <p>
            <a href="#0">Ableton for Colleges and Universities &gt;</a>
          </p>
        </div>
        <div className="footer__card">
          <h3 className="footer__card-title">Sign up to our newsletter</h3>
          <p>
            Enter your email address to stay up to date with the latest offers,
            tutorials, downloads, surveys and more. &gt;
          </p>
          <form>
            <input
              className="footer__card-input"
              placeholder="Email Adress"
              type="text"
              name="email"
            />
            <input
              className="footer__card-submit"
              type="submit"
              value="Sign Up"
            />
          </form>
        </div>
        <div className="footer__card">
          <h3 className="footer__card-title">Community</h3>
          <p>
            <a href="#0">Find Ableton User Groups &gt;</a>
          </p>
          <p>
            <a href="#0">Find Certified Training &gt;</a>
          </p>
          <p>
            <a href="#0">Become a Certified Trainer &gt;</a>
          </p>
        </div>
        <div className="footer__card">
          <h3 className="footer_card-title">Distributors</h3>
          <p>
            <a href="#0">Find Distributors &gt;</a>
          </p>
          <p>
            <a href="#0">Try Push in-store &gt;</a>
          </p>
        </div>
        <div className="footer__card">
          <h3 className="footer__card-title">Language and Location</h3>
          <select name="langage">
            <option value="en">English</option>
            <option value="de">Deutsch</option>
            <option value="fr">Francais</option>
            <option value="ja">日本語</option>
            <option value="cn">简体中文</option>
          </select>
          <select name="countries" id="">
            <option value="uk">England</option>
            <option value="fr">France</option>
            <option value="de">Germany</option>
          </select>
        </div>
      </div>
      <div className="footer__second-row">
        <div className="left">
          <p>
            <a href="#0">Contact Us</a>
          </p>
          <p>
            <a href="#0">Press Ressources</a>
          </p>
          <p>
            <a href="#0">Legals Infos</a>
          </p>
          <p>
            <a href="#0">Privacy Policy</a>
          </p>
          <p>
            <a href="#0">Cookies Settings</a>
          </p>
          <p>
            <a href="#0">Imprint</a>
          </p>
        </div>
        <div className="right">
          <p>Made in Berlin</p>
          <img src={logoFooter} alt="ableton logo for the footer" />
        </div>
      </div>
    </footer>
  );
}
