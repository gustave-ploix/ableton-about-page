import './style.scss';

import firstImg from '../../images/womans-working-on-ableton.jpg';
import secondImg from '../../images/people-on-a-conference.jpg';

export default function FourthImageSection() {


    return (
        <section className="fourth-img-section">
            <div className="purple-square">
                <img className="first-img" src={firstImg} alt="" />
                <img className="second-img" src={secondImg} alt="" />
            </div>
        </section>
    )
}