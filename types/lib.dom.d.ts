interface UmamiTracking {
    track: (event: string, payload?: any) => void
}

interface Window {
    umami: UmamiTracking;
}
