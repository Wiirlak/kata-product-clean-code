export interface ProductInterface {
    id: number;
    name: string;
    description: string;
    category: number;
    details: [
        {
            name: string,
            value: string
        }
    ]
}