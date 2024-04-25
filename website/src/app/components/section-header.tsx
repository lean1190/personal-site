import clsx from 'clsx';

interface Props {
    title: string;
    subtitle?: string;
}

export default function SectionHeader({ title, subtitle }: Props) {
    const titleStyles = clsx(
        'px-6 text-center text-5xl font-bold leading-tight sm:px-0',
        {
            'mb-4': subtitle,
            'mb-12': !subtitle
        }
    );

    return (
        <>
            <h2 className={titleStyles}>{title}</h2>
            {subtitle ? <p className="mb-12 px-6 text-center text-xl font-normal leading-tight text-slate-400 sm:px-0">{subtitle}</p> : null}
        </>
    );
}
