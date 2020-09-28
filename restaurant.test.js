const {Restaurant, Table} = require('./restaurant')

describe('restaurant', function() {
    test('has a name, image and city', function() {
        const restaurant = new Restaurant({name:'Flour & Grape', city:'Edinburgh'})
        // Restaurant has a name.
        expect(restaurant.name).toBe('Flour & Grape')
        // Restaurant has an image (default in constructor).
        expect(restaurant.image).toBe("https//image.url")
        // Restaurant has a city.
        expect(restaurant.city).toBe('Edinburgh')
    })

    test('there are two restaurants', function() {
        const restaurant1 = new Restaurant({name:'Hare & Tortoise', city:'Doncaster'})
        // There are two restaurants.
        expect(Restaurant.restaurants.length).toBe(2)
    })

    test('must have a name', function() {
        // Restaurant cannot be created without a name.
        expect(() => {new Restaurant({})}).toThrow()
    })

    test('must have a city', function() {
        // Restaurant cannot be created without a city.
        expect(() => {new Restaurant({})}).toThrow()
    })
})

describe('table', function() {
    test('has a number', function() {
        const table1 = new Table({tableNumber:'01'})
        // Table has a number.
        expect(table1.tableNumber).toBe('01')
    })

    test('must have a number', function() {
        // Restaurant cannot be created without a name.
        expect(() => {new Table({})}).toThrow()
    })
})


