export interface Session {
    name: string;
    price: { euros: string, dollars: string };
    benefits: string[];
    isPopular?: boolean;
}
