import { Loader } from '@googlemaps/js-api-loader';

export const loadGoogleMaps = () => new Loader({
    apiKey: process.env.NEXT_PUBLIC_GOOGLE_MAPS_API_KEY ?? '',
    version: 'weekly'
});
