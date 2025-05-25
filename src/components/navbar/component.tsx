import { Link } from 'react-router-dom';
import './style.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBurger, faXmark } from '@fortawesome/free-solid-svg-icons';
import { useState } from 'react';

export default function NavbarComponent() {
    const [isVisible, setIsVisible] = useState<boolean>(false);



    return <>
        <div className={`navbar__box`} onClick={() => setIsVisible(prevState => !prevState)}>
            <FontAwesomeIcon icon={isVisible ? faXmark : faBurger} />
        </div>

        <nav className={`navbar__nav ${isVisible ? "navbar__nav--visible" : ""}`}>
            <div className="navbar__logo">
                <span className="navbar__logo--color-primary">Tech</span>Creators
            </div>

            <ul className="navbar__list">
                <li className="navbar__item">
                    Start
                </li>

                <li className="navbar__item">
                    Usługi
                </li>

                <li className="navbar__item">
                    Projekty
                </li>

                <li className="navbar__item">
                    O nas
                </li>
            </ul>

            <Link to="/#kontakt" className="navbar__link">
                Kontakt
            </Link>
        </nav>
    </>
}