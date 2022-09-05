class Service {
    constructor(name, price) {
        this.name = name
        this.price = price 
    }
    finalPrice() {
        return parseFloat((this.price).toFixed(2))
    }
}