export interface Tag {
    name: string;
    colorClass: string;
}

export interface Session {
    name: string;
    tags: Tag[];
    price: { euros: string, dollars: string };
    benefits: string[];
    link: string;
    isPopular?: boolean;
}
