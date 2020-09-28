class Restaurant {

    static restaurants = []

    constructor({name, image = "https//image.url", city}) {
        if (!name) throw new Error('Restaurant does not have a name')
        if (!city) throw new Error('Restaurant does not have a city')
        this.name = name
        this.image = image
        this.city = city
        this.constructor.restaurants.push(this)
    }
}

class Table {

    constructor({tableNumber}) {
        if (!tableNumber) throw new Error('Table does not have a number')
        this.tableNumber = tableNumber
    }
}

module.exports = {
    Restaurant:Restaurant,
    Table:Table
}
