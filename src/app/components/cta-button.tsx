import { Button, Link } from '@nextui-org/react';
import clsx from 'clsx';

import { adplistLink, contactLink, homeLink, linkedinLink } from '../constants/links';
import { indigoGradient } from './gradients';

interface Props {
    link?: 'contact' | 'adplist' | 'linkedin' | 'home';
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
        linkedinLink;

    return (
        <Link
            href={urlLink}
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
