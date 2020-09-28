const {Restaurant, Table, FoodMenu, FoodItem, DrinkMenu, DrinkItem} = require('./restaurant')

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

describe('food menu', function () {
    test('there is a food menu', function () {
        const setMenu = new FoodMenu({titleFood:'Set Menu'})
        // Restaurant has a food menu called 'Set Menu'.
        expect(setMenu.titleFood).toBe('Set Menu')
    })
})

describe('food item', function () {
    test('there is an item of food on the menu', function () {
        const chickenKiev = new FoodItem({foodItem:'Chicken Kiev'})
        // Restaurant has a food item called Chicken Kiev.
        expect(chickenKiev.foodItem).toBe('Chicken Kiev')
    })
})

describe('drink menu', function () {
    test('there is a drink menu', function () {
        const drinkMenu = new DrinkMenu({titleDrink:'Drink Menu'})
        // Restaurant has a drink menu called 'Drink Menu'
        expect(drinkMenu.titleDrink).toBe('Drink Menu')
    })
})

describe('drink item', function () {
    test('there is an item of drink on the menu', function () {
        const coke = new DrinkItem({drinkItem:'Coke'})
        // Restaurant has a food item called Chicken Kiev.
        expect(coke.drinkItem).toBe('Coke')
    })
})




