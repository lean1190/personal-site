interface Props {
    text: string;
}

export default function SectionHeader({ text }: Props) {
    return <h2 className="mb-12 text-center text-5xl font-bold">{text}</h2>;
}
