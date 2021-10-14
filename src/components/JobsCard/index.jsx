import "./style.scss";

import desktopImg from "../../images/ableton-desks.jpg";

export default function JobsCard() {
  return (
    <section className="job-card">
      <div className="card">
        <img src={desktopImg} alt="" />
        <div className="text__card">
          <div className="text">
            <p>
              We’re really proud of the work we’ve done so far. But there’s so
              much more to come. If you’d like to be a part of it, please join
              us.
            </p>
            <p>
              <a href="#0">See latest jobs &gt;</a>
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
