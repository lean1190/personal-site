import Card from '../components/card';

export default function Svetlana() {
    return <Card
        hi="Hi Svetlana!"
        backgroundClasses="bg-gradient-to-b from-red-100 to-red-300"
        paragraphs={[
            'Thanks for trusting me in this moment of your life.',
            'You have the strength and the skills you need. Believe in yourself :)'
        ]}
    />;
}
