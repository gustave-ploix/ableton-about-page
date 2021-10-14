import './style.scss';

import firstImg from '../../images/man-with-a-marker.jpg';
import secondImg from '../../images/ableton-office.jpg';
import thirdImg from '../../images/live-session.jpg';

export default function() {


    return (
        <section className="second-img-section">
            <div className='green-bg'>
                <img src={firstImg} alt="man writing on a whiteboard." />
                <img src={secondImg} alt="ableton's office." />
            </div>
            <img className="thirdImg" src={thirdImg} alt="man and a woman using ableton live in their studio." />
        </section>
    )
}