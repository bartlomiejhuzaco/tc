import FooterComponent from '../../components/footer/component';
import NavbarComponent from '../../components/navbar/component';
import './style.scss';

export default function HomeScreen() {
    return <main className="main">
        <NavbarComponent />

        <section className="section section--background-black section--padding-vertical-30">
            <div className="home__wrapper">

            </div>
        </section>

        <section className="section section--background-white section--padding-vertical-30">

        </section>

        <section className="section section--background-black section--padding-vertical-30">
            
        </section>

        <FooterComponent />
    </main>
}