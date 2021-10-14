import './style.scss';

export default function TextSection({title, text}) {


    return (
        <section className="text-section">
            <p className="text-section__title">
                {title}
            </p>
            <p className="text-section__text">
                {text}
            </p>
        </section>
    )
}