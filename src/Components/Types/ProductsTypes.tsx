export interface iProductsType {
    id: number;
    nameBn: string;
    categoryNameBn: string;
    unit: string;
    image: string;
    categoryIcon: string;
    today: number;
    change: {
        dir: 'up' | 'down' | 'flat';
        pct: number;
    }
}