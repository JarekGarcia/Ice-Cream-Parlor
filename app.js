const toppings = [
    {
        name: 'Sprinkles',
        price: 2,
        quantity: 0
    },
    {
        name: 'Chocolate Chips',
        price: 3,
        quantity: 0
    },
    {
        name: 'Gummy Worms',
        price: 2,
        quantity: 0
    }
]

const vessels = [
    {
        name: 'Waffle Cone',
        price: 3,
        quantity: 0
    },
    {
        name: 'Waffle Bowl',
        price: 4,
        quantity: 0
    },
    {
        name: 'Dipped Cone',
        price: 5,
        quantity: 0
    }

]

const iceCream = [
    {
        name: 'Vanilla',
        price: 3,
        quantity: 0
    },
    {
        name: 'Chocolate',
        price: 4,
        quantity: 0
    },
    {
        name: 'Strawberry',
        price: 4,
        quantity: 0
    }
]

function selectToppings(toppingsName) {

    const addTopping = toppings.find(topping => topping.name == toppingsName)

    addTopping.quantity++

    console.log('here is your topping', addTopping)
}

function selectVessels(vesselsName) {
    const addVessel = vessels.find(vessel => vessel.name == vesselsName)

    addVessel.quantity++

    console.log('here is your vessel', addVessel)
}

function selectIceCream(iceCreamName) {
    const addIceCream = iceCream.find(cream => cream.name == iceCreamName)

    addIceCream.quantity++

    console.log('here is your Ice Cream', addIceCream)

    drawCartToppings()
}

function drawCartToppings() {
    let content = ''

    toppings.forEach(topping => {
        if (topping.quantity > 0) {
            const toppingTotal = (topping.price * topping.quantity).toFixed(2)
            content += `<p>
            ${topping.name} | Qty: ${topping.quantity} | Price: ${toppingTotal}</p>`

            console.log(drawCartToppings)
        }
    })

}

// let calculateTotal = calculateTotal()

// const cartTotalElement = document.getElementById('cartTotal')

// cartTotalElement.innerText = calculateTotal.toFixed(2)



function calculateTotal() {
    let cartTotal = 0

    toppings.forEach(topping => {
        const itemTotal = topping.quantity * topping.price
        cartTotal += itemTotal
    })

    return cartTotal
}

function generateToppingsHTML() {
    let content = ''
    toppings.forEach(topping => {
        if (topping.quantity > 0) {
            const totalPrice = (topping.price * topping.quantity).toFixed(2)
            content += `<p>
            ${topping.name} | Qty: ${topping.quantity} | Price: $${totalPrice}</p>`
        }
    })
}
