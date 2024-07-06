'use client';
import { useAutoAnimate } from '@formkit/auto-animate/react';
import { useImmer } from 'use-immer';
import { useInterval } from 'usehooks-ts';

import { Review } from '@/lib/reviews/types';

import ReviewItem from './review-item';


interface Props {
    reviews: Review[];
}

const visibleReviewsAtATime = 3;

export default function ReviewsList({ reviews }: Props) {
    const [parent] = useAutoAnimate({ duration: 600, easing: 'ease-in-out' });
    const [lastReviewIndex, setLastReviewIndex] = useImmer(visibleReviewsAtATime - 1);
    const [visibleReviews, setVisibleReviews] = useImmer(reviews.slice(0, visibleReviewsAtATime));

    useInterval(() => {
        const isLastReview = lastReviewIndex === reviews.length - 1;
        const nextReviewIndex = isLastReview ? 0 : lastReviewIndex + 1;
        setVisibleReviews((prev) => {
            prev.pop();
            prev.unshift(reviews[nextReviewIndex]);
        });

        setLastReviewIndex(nextReviewIndex);
    }, 4000);

    return (
        <ul ref={parent} className="flex flex-col items-center justify-center">
            {visibleReviews.map((review, index) => (
                <ReviewItem key={review.id} review={review} index={index} />
            ))}
        </ul>
    );
}
