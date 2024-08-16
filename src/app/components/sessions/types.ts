export interface Tag {
    name: string;
    colorClass: string;
}

export interface Offer {
    id: string;
    name: string;
    description?: string;
    tags: Tag[];
    price: { euros: string, dollars: string } | null;
    benefits: string[];
    link: string;
    isHighlight?: boolean;
}
