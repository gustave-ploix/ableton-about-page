import { useState } from "react";
import "./style.scss";

export default function DropdownNavbar({ hide }) {
  // const [hide, setHide] = useState(true);

  return (
    <div className={hide ? "hided-dropdown-menu" : "showed-dropdown-navbar"}>
    {/* // <div className="showed-dropdown-navbar"> */}
      <div className="first-row">
        <div className="title-row">
          <h2>More on Ableton.com:</h2>
        </div>
        <div className="links-row">
          <p>
            <a href="#0">Blog</a>
          </p>
          <p>
            <a href="#0">Ableton for the Classroom</a>
          </p>
          <p>
            <a href="#0">Ableton for Colleges and Universities</a>
          </p>
          <p>
            <a href="#0">Certified Training</a>
          </p>
          <p>
            <a className="active-link" href="#0">
              About Ableton
            </a>
          </p>
          <p>
            <a href="#">Jobs</a>
          </p>
        </div>
      </div>

      <div className="second-row">
        <div className="title-row">
          <h2>More from Ableton:</h2>
        </div>
        <div className="links-row">
          <div className="link-card">
            <p>
              <a href="#0">
                <strong>Loop</strong>
                <br />
                Watch Talks, Performances and Features from Ableton's Summit for
                Music Makers
              </a>
            </p>
          </div>
          <div className="link-card">
            <p>
              <a href="#0">
                <strong>Learning Music</strong>
                <br />
                Learn the fundamentals of music making right in your browser.
              </a>
            </p>
          </div>
          <div className="link-card">
            <p>
              <a href="#0">
                <strong>Learning Synths</strong>
                <br />
                Get started with synthesis using a web-based synth and
                accompanying lesso
              </a>
            </p>
          </div>
          <div className="link-card">
            <p>
              <a href="#0">
                <strong>Making Music</strong>
                <br />
                Some tips from 74 Creative Strategies for Electronic Producers.
              </a>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
