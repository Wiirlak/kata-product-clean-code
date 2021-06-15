export class Product {
    constructor(
        public id: number,
        public name: string,
        public description: string,
        public category: number,
        public details: { name: string, value: string }[]
    ) {}
}