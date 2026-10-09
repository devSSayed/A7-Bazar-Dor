export interface iProductsType {
    id: number;
    nameBn: string;
    categoryNameBn: string;
    unit: string;
    image: string;
    categoryIcon: string;
    today: number;
     yesterday: number,
    lastWeek: number,
    lastMonth: number,
    change: {
        dir: 'up' | 'down' | 'flat';
        pct: number;
    }
    markets: [{
        market: string,
        division: string,
        min: number,
        max: number
    }]
}