'use client';
import { useAutoAnimate } from '@formkit/auto-animate/react';
import { useImmer } from 'use-immer';
import { useInterval } from 'usehooks-ts';

import { Review } from '@/lib/reviews/types';


interface Props {
    reviews: Review[];
}

const visibleReviewsAtATime = 3;

export default function ReviewsList({ reviews }: Props) {
    const [parent] = useAutoAnimate();
    const [lastReviewIndex, setLastReviewIndex] = useImmer(visibleReviewsAtATime - 1);
    const [visibleReviews, setVisibleReviews] = useImmer(reviews.slice(0, visibleReviewsAtATime));

    useInterval(() => {
        const nextReviewIndex = lastReviewIndex === reviews.length - 1 ? 0 : lastReviewIndex + 1;
        setVisibleReviews((prev) => {
            prev.pop();
            prev.unshift(reviews[nextReviewIndex]);
        });

        setLastReviewIndex(nextReviewIndex);
    }, 2000);

    return (
        <ul ref={parent}>
            {visibleReviews.map(({ id, review, reviewed_by }) => (
                <li key={id}>{review} - {reviewed_by.name}</li>
            ))}
        </ul>
    );
}
