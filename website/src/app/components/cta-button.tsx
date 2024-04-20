import { Button, Link } from '@nextui-org/react';
import clsx from 'clsx';

interface Props {
    link?: string;
    text?: string;
    size?: 'md' | 'lg';
}

const contactLink = 'https://calendly.com/leanvilas/confidence-session';

export default function CtaButton({ link = contactLink, text = 'Book now', size = 'md' }: Props) {
    return (
        <Link
            href={link}
            target="_blank"
            className="w-full"
        >
            <Button
                fullWidth
                variant="ghost"
                color="secondary"
                radius="sm"
                className={clsx({
                    'py-8 text-2xl': size === 'lg',
                    'py-6 text-xl': size === 'md'
                })}
            >
                {text}
            </Button>
        </Link>
    );
}
