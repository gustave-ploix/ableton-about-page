import "./style.scss";

import pushImg from '../../images/push-and-woman.jpg';
import booksImg from '../../images/woman-and-books.jpg'

export default function ImagesSection() {
  return (
    <section className="images-section">
      <img className="first-image" src={pushImg} alt="woman using Ableton Push on her desktop" />
      <div className="yellow-square">
        <img className="second-image" src={booksImg} alt="woman walking in front of a few books" />
      </div>
    </section>
  );
}
