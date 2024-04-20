export interface Review {
    id: number;
    review: string;
    reviewed_by: {
        name: string;
        title: string;
        profile_photo_url: string;
    }
}
