export interface Course {
    id: number;
    name?: string;
    description?: string;
    price: number;
    date?: Date;
    soldOut?: boolean;
    img: string;
    onSale?: boolean;
}
