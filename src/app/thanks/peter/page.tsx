import Card from '../components/card';

export default function Peter() {
    return <Card
        hi="Hi Peter!"
        backgroundClasses="bg-gradient-to-b from-indigo-200 to-indigo-400"
        paragraphs={[
            'Thank you very much for trusting me with asking you the right questions',
            'I\'m sure you\'ll find the job you are looking for :)'
        ]}
    />;
}
