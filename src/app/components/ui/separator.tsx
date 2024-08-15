import { pinkBg } from '../../constants/colors';

interface Props {
    backgroundClasses?: string;
}

export default function Separator({ backgroundClasses = `${pinkBg} opacity-70` }: Props) {
    return <div className={`${backgroundClasses} h-[2px] w-full`}></div>;
}
