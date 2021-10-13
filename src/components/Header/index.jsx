import './style.scss';

import background from '../../images/header.jpg'

export default function Header() {


    return (
        <header style={{backgroundImage: `url(${background})`}}>
            <h1 className="header__title">
                Ableton
            </h1>
        </header>
    )
}