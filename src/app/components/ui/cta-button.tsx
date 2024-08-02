import { Button, Link } from '@nextui-org/react';
import clsx from 'clsx';

import { indigoGradient } from '../../constants/colors';
import { meetLink } from '../../constants/links';

interface Props {
    link?: string;
    text?: string;
    size?: 'md' | 'lg';
    variant?: 'primary' | 'secondary'
    icon?: React.ReactNode
    rel?: 'nofollow' | 'author'
}

export default function CtaButton({
    link = meetLink,
    text = 'Book now',
    size = 'md',
    variant = 'primary',
    icon = null,
    rel = 'nofollow'
}: Props) {
    const isPrimary = variant === 'primary';

    return (
        <Link
            href={link}
            target="_blank"
            rel={rel}
            className="w-full"
        >
            <Button
                fullWidth
                variant={isPrimary ? 'solid' : 'ghost'}
                color="secondary"
                radius="sm"
                className={clsx({
                    [indigoGradient]: isPrimary,
                    'hover:text-white': isPrimary,
                    'h-[64px] text-lg sm:text-2xl': size === 'lg',
                    'h-[52px] text-lg sm:text-xl': size === 'md'
                })}
                startContent={icon}
                data-umami-event="CTA Button"
                data-umami-event-link={link}
            >
                {text}
            </Button>
        </Link>
    );
}
