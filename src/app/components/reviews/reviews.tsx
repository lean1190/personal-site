import { lightBg, lightFontColor } from '@/app/constants/colors';
import { biroscript } from '@/app/fonts/fonts';
import { Review } from '@/lib/reviews/types';

import ReviewItem from './review-item';

interface Props {
    reviews: Review[]
}

export default async function Reviews({ reviews }: Props) {
    return (
        <article className={`${lightBg} ${lightFontColor} px-6 py-20 sm:px-0`}>
            <div className="mx-auto sm:max-w-[1268px]">
                <section className="mb-12 text-center">
                    <h5 className={`${biroscript.className} text-6xl leading-tight`}>This is why I do what I do 💜</h5>
                </section>
                <section>
                    <ul className="flex w-full flex-col flex-wrap justify-between gap-6 sm:flex-row">
                        {reviews.map((review, index) => (
                            <div key={review.id} className="w-full max-w-full sm:w-1/2 sm:max-w-[600px]">
                                <ReviewItem review={review} index={index} />
                            </div>
                        ))}
                    </ul>
                </section>
            </div>
        </article>
    );
}
