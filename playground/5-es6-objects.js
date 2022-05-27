const name = 'andrew'
const userAge = 27

const user = {
    name,
    age: userAge,
    location: 'Philadelphia'
}

console.log(user)

const product = {
    label: 'Red notebook',
    price: 3,
    stock: 201,
    salePrice: undefined,
    rating: 4.2,
}

// const label = product.label
// const stock = product.stock

// const {label, stock,price, salePrice, rating = 5} = product
// console.log(label)
// console.log(stock)
// console.log(rating)

const transaction = (type, {label, stock}) => 
{
console.log(type, label, stock)
}

transaction('Order: ', product)