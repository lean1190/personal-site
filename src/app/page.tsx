import AboutMe from './components/about-me';
import Footer from './components/footer';
import Intro from './components/intro';
import Reviews from './components/reviews/reviews';
import Separator from './components/separator';
import Sessions from './components/sessions/sessions';

export default async function Home() {
    return (
        <main className="text-white">
            <Intro />

            <Separator />
            <Reviews />

            <Sessions />

            <Separator />
            <AboutMe />

            <Footer />
        </main>
    );
}
