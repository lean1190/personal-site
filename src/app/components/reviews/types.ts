export interface Review {
    id: number;
    review: string;
    reviewed_by: {
        name: string;
        title: string;
        profile_photo_url: string;
    }
}

export interface Statistics {
    minutes_learning: number;
    sessions_completed: number;
    average_attendance: number;
}
