export interface Tag {
    name: string;
    colorClass: string;
}

export interface Session {
    name: string;
    description?: string;
    tags: Tag[];
    price: { euros: string, dollars: string } | null;
    benefits: string[];
    link: string;
    isPopular?: boolean;
}
