'use client';

import { loadGoogleMaps } from '@/lib/maps/loader';

const mapId = 'map';
export default function MapView() {
    loadGoogleMaps().then(async ({ library }) => {
        if (!library) {
            return;
        }

        const { Map } = library;
        new Map(document.getElementById(mapId) as HTMLElement, {
            center: { lat: 0, lng: 0 },
            zoom: 3,
            mapTypeId: 'roadmap'
        });
    });

    return <section id={mapId} className="h-full grow"></section>;
}
