import { indigoGradient } from '../../constants/colors';

interface Props {
    backgroundClasses?: string;
}

export default function Separator({ backgroundClasses = indigoGradient }: Props) {
    return <div className={`${backgroundClasses} h-[2px] w-full`}></div>;
}
