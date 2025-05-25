import './style.scss';

export default function FooterComponent() {
    return <footer className="footer__wrapper">
        <div className="footer__bottom">
            <p className="footer__rights">
                2025 &copy; Wszelkie prawa zastrzeżone
            </p>

            <ul className="footer__list">
                <li className="footer__item">
                    Start
                </li>

                <li className="footer__item">
                    Polityka Prywatności
                </li>

                <li className="footer__item">
                    Regulamin
                </li>

                <li className="footer__item">
                    Usługi
                </li>

                <li className="footer__item">
                    Projekty
                </li>

                <li className="footer__item">
                    O nas
                </li>

                <li className="footer__item">
                    Kontakt
                </li>
            </ul>
        </div>
    </footer>
}