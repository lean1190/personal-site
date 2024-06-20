import AboutMe from './components/about-me';
import Footer from './components/footer';
import Intro from './components/intro';
import Reviews from './components/reviews/reviews';
import Sessions from './components/sessions/sessions';
import Separator from './components/ui/separator';

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
