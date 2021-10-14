import "./style.scss";

export default function VideoPlayer() {
  return (
    <section className="video-player">
      <iframe
        width="800"
        height="450"
        src="https://www.youtube.com/embed/1VMoSKnzzO8"
        title="YouTube video player"
        frameborder="0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
        allowfullscreen
      ></iframe>
    </section>
  );
}
