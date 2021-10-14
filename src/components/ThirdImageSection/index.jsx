import './style.scss';

import fourthImg from '../../images/ableton-live-in-action.jpg';

export default function ThirdImageSection() {


    return(
        <section className="thirdImgSection">
            <img src={fourthImg} alt="Ableton live in action with the code behind." />
        </section>
    )
}