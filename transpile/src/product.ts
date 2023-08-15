class Product {
    constructor(public name: string, public unitPrice: number) {
        this.name = name;
        this.price = unitPrice;
    }

    getDiscountedPrice(discount: number): number {
        return discount * this.unitPrice;
    }
}

const table = new Product("Table", 45);

console.log(table.getDiscountedPrice(5));