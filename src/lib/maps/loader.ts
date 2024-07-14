import { Loader } from '@googlemaps/js-api-loader';

import { isServer } from '../environments/server';

export const loadGoogleMaps = async () => {
    if (isServer()) {
        return { loader: null, library: null };
    }

    try {
        const loader = new Loader({
            apiKey: process.env.NEXT_PUBLIC_GOOGLE_MAPS_API_KEY ?? '',
            version: 'weekly'
        });
        await loader.importLibrary('maps');
        const library = await google.maps.importLibrary('maps') as google.maps.MapsLibrary;

        return { loader, library };
    } catch (error) {
        console.error('Google Maps failed to load', error);
        throw error;
    }
};
