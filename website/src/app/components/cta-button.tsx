import { Button, Link } from '@nextui-org/react';
import clsx from 'clsx';

import { adplistLink, contactLink } from '../constants/links';
import { indigoGradient } from './gradients';

interface Props {
    link?: 'contact' | 'adplist';
    text?: string;
    size?: 'md' | 'lg';
    variant?: 'primary' | 'secondary'
    icon?: React.ReactNode
}

export default function CtaButton({
    link = 'contact',
    text = 'Book now',
    size = 'md',
    variant = 'primary',
    icon = null
}: Props) {
    const isPrimary = variant === 'primary';
    const urlLink = link === 'contact' ? contactLink : adplistLink;

    return (
        <Link
            href={urlLink}
            target="_blank"
            rel="nofollow"
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
