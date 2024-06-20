import { Button, Link } from '@nextui-org/react';
import clsx from 'clsx';

import { indigoGradient } from '../../constants/gradients';
import { adplistLink, contactLink, homeLink, linkedinLink } from '../../constants/links';

interface Props {
    link?: 'contact' | 'adplist' | 'linkedin' | 'home' | string;
    text?: string;
    size?: 'md' | 'lg';
    variant?: 'primary' | 'secondary'
    icon?: React.ReactNode
    rel?: 'nofollow' | 'author'
}

export default function CtaButton({
    link = 'contact',
    text = 'Book now',
    size = 'md',
    variant = 'primary',
    icon = null,
    rel = 'nofollow'
}: Props) {
    const isPrimary = variant === 'primary';
    const urlLink =
        link === 'contact' ? contactLink :
        link === 'adplist' ? adplistLink :
        link === 'home' ? homeLink :
        link === 'linkedin' ? linkedinLink :
        link;

    return (
        <Link
            href={urlLink}
            target="_blank"
            rel={rel}
            className="w-full"
            data-umami-event="CTA Button"
            data-umami-event-link={link}
            data-umami-event-variant={variant}
            data-umami-event-text={text}
        >
            <Button
                fullWidth
                variant={isPrimary ? 'solid' : 'ghost'}
                color="secondary"
                radius="sm"
                className={clsx({
                    [indigoGradient]: isPrimary,
                    'hover:text-white': isPrimary,
                    'h-[64px] text-2xl': size === 'lg',
                    'h-[52px] text-xl': size === 'md'
                })}
                startContent={icon}
            >
                {text}
            </Button>
        </Link>
    );
}
