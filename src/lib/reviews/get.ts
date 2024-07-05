import ky from 'ky';

import { shuffle } from '../arrays';
import { Review, Statistics } from './types';

export async function getShuffledReviews({
    userId,
    limit = 20,
    offset = 0
}: {
    userId: string
    limit?: number,
    offset?: number
}): Promise<Review[]> {
    const { results }: {
        results: Review[]
    } = await ky.get(`https://api2.adplist.org/core/review/?user_id=${userId}&offset=${offset}&limit=${limit}&filter_keywords=`).json();

    return shuffle(results);
}

export function getStatistics(userId: string): Promise<Statistics[]> {
    return ky.get(`https://api2.adplist.org/core/user-community-statistics/?identity_id=${userId}`).json();
}
