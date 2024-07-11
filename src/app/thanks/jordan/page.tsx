import Card from '../components/card';

export default function Jordan() {
    return <Card
        hi="Hi Jordan!"
        backgroundClasses="bg-gradient-to-b from-pink-100 to-pink-400"
        paragraphs={[
            'Thank you very much for trusting me with your job-hunting preparation.',
            'Let\'s get that job! :)'
        ]}
    />;
}
