'use client';

import { isServer } from '../environments/server';

const nullTracking = {
    track: () => undefined,
    indentify: () => undefined
};

export default function useTracking() {
    return isServer() || !window?.umami ? nullTracking : window?.umami;
}
