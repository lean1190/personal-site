import { offers } from '../sessions/constants';
import OfferItem from './offer-item';

export default function OffersMatrix() {
    return (
        <div className="mx-auto grid gap-4 p-6 sm:my-12 sm:max-w-[860px] sm:grid-cols-2 sm:px-0">
            {offers.map((offer, index) => <OfferItem
                key={index}
                offer={offer}
            />)}
        </div>
    );
}
