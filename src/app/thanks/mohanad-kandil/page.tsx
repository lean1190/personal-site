import Card from '../components/card';

export default function Mo() {
    return <Card
        hi="Hi Mo!"
        backgroundClasses="bg-gradient-to-b from-yellow-100 to-yellow-500"
        paragraphs={[
            'Thank you very much for trusting me with your preparation.',
            'Have fun practicing behavioral science techniques :)'
        ]}
    />;
}
