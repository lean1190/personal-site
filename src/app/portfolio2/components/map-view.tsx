'use client';

import { loadGoogleMaps } from '@/lib/maps/client';

export default function MapView() {
    loadGoogleMaps().load().then(async () => {
        const { Map } = await google.maps.importLibrary('maps') as google.maps.MapsLibrary;

        new Map(document.getElementById('map') as HTMLElement, {
            center: { lat: 53.594484, lng: 9.998724 },
            zoom: 20
        });
    });

    return <section id="map" className="grow"></section>;
}
