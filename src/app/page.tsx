import AboutMe from './components/about-me';
import Footer from './components/footer';
import Intro2 from './components/intro2';
import Sessions from './components/sessions/sessions';

export default async function Home() {
    return (
        <main className="text-white">
            <Intro2 />
            {/* <Intro />

            <Separator />
            <Reviews /> */}

            <Sessions />

            {/* <Separator /> */}
            <AboutMe />

            <Footer />
        </main>
    );
}
