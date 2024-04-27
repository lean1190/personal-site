import Card from '../components/card';

export default function Malik() {
    return <Card
        hi="Hi Malik!"
        backgroundClasses="bg-gradient-to-b from-indigo-200 to-indigo-400"
        paragraphs={[
            'Thank you for trusting me as a guide for your career.',
            'Looking forward to seeing you in Germany 🇩🇪'
        ]}
    />;
}
