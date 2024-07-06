import { sectionDarkGradient } from '../constants/colors';
import Header from './intro/header';
import Title from './intro/title';

export default function Intro() {
    return (
        <article className={`relative ${sectionDarkGradient} sm:items-center sm:justify-between`}>
            <Header />
            <Title />
        </article>
    );
}
