//Problem-1: Can you find out who will get the Strawberry
const a=50; 
const b=405;
if(a>b){
    console.log("a get the strawberry");

}
else {
    console.log("b get the strawberry");
}
// using function

function max(num1,num2){
    if(num1>num2){
        return "num1 get the strawberry";
    }
    else {
        return "num2 get the strawberry";
    }
}
const result = max(60,50);
console.log(result);

//---------------------------------------------------------------------

//Problem-2: Who is the tallest? Find max number in an array

function tallest(numbers){
    let max=numbers[0];
    for(number of numbers){
     if(number>max){
        max=number;
     }
    }
    return max;
}

const height=[60,56,70,80,23,45,60,70,65,90];
const maxValue=tallest(height);
console.log(maxValue);

//---------------------------------------------------------------------

//Problem-3: Use add and multiplication to calculate wood requirements

/*    requirements:
     perChairWood ---> 3cft;
     perTableWood ---> 5cft;
     perBedWood ---> 10cft */

function wood(chairQuantity, tableQuantity, bedQuantity){
    const perChairWood=3;
    const perTableWood=5;
    const perBedWood=10;

    const chairTotalWood = chairQuantity * perChairWood;
    const tableTotalWood = tableQuantity * perTableWood;
    const bedTotalWood = bedQuantity * perBedWood;

    const overallTotalWood = chairTotalWood + tableTotalWood + bedTotalWood;
    return overallTotalWood;
}

const Total = wood(3,2,1);
console.log(Total);

//---------------------------------------------------------------------

//Problem-4: Find the cheapest phone from an array of phone objects

function getCheapPhone(numbers){
    let min = numbers[0];
    for(const number of numbers){
        if(number.Price<min.Price){
            min=number;
        }
        
    }
    return min;
}

const phones=[
      {Name:'Samsung', Price:20000, Camera:'13mp', Color: 'Black'},
      {Name:'Xaomi', Price:18000, Camera:'13mp', Color: 'Black'},
      {Name:'Iphone', Price:100000, Camera:'13mp', Color: 'Black'},
      {Name:'Walton', Price:12000, Camera:'13mp', Color: 'Black'},

];
const cheap = getCheapPhone(phones);
console.log(cheap);

//---------------------------------------------------------------------

//Problem-5: Calculate the total cost of the products in a shopping cart

function shoppingCart(products){
    let total = 0;
    for(product of products){
        total=total + (product.Price*product.Quantity);
    }
    return total;
}
const products=[
    {Product:'Shirt', Price:700, Quantity: 2},
    {Product:'Pant', Price:1000, Quantity: 1},
    {Product:'Chiruni', Price:100, Quantity: 3}
];

const totalPrice = shoppingCart(products);
console.log(totalPrice);

//---------------------------------------------------------------------

//Problem-6: Discount price calculation

/**
 * upto 100: ---> 100
 * more than 101-200: --> 90
 * more than 200: --> 70
*/

function discountedPrice(quantity){
    if(quantity <= 100){
        const total = quantity * 100;
        return total;
    }
    else if(quantity <= 200){
        const total = quantity * 90;
        return total;
    }
    else {
        const total = quantity * 70;
        return total;
    }
}

const total = discountedPrice(201);
console.log(total);

//---------------------------------------------------------------------

//Problem-7: Simple calculator to call function inside a function

function add(num1, num2){
 const sum = num1 + num2;
 return sum;
}
function substract(num1, num2){
 const sub = num1 - num2;
 return sub;
}
function multiply(num1, num2){
 const mul = num1 * num2;
 return mul;
}
function division(num1, num2){
 const div = num1 / num2;
 return div;
}

function calculator(a,b,operator){
    if(operator==='sum')
    return add(a,b);    // Ekhane function er bhetor function ke call diyechi
    
    else if(operator==='sub')
        return substract(a,b);   // Ekhane function er bhetor function ke call diyechi

    else if(operator==='mul')
        return multiply(a,b);  // Ekhane function er bhetor function ke call diyechi

    else if(operator==='div')
        return division(a,b);   // Ekhane function er bhetor function ke call diyechi

    else 
        return "Please put correct operator";
}

const Calculator = calculator(5,3,'div');
console.log(Calculator);

//---------------------------------------------------------------------

//Problem-8: Handle unexpected function input parameter error

function multiply(num1, num2) {
    if (typeof num1 !== 'number' || typeof num2 !== 'number') {
        return 'Please provide a number'
    }
    const mult = num1 * num2;
    return mult;
}

// const result = multiply(5, 'seven');
// console.log(result);

function fullName(first, second) {
    if (typeof first !== 'string') {
        return 'First name should be a string';
    }
    else if (typeof second !== 'string') {
        return 'Second Name should be a string';
    }
    const full = first + ' ' + second;
    return full;
}

const full = fullName('Akmal')
// console.log(full);

function getPrice(product) {
    if (typeof product !== 'object') {
        return 'Please provide an object'
    }
    const price = product.price;
    return price;
}

// const price = getPrice({ name: 'chulkani dandi', price: 35, color: 'blue' })
const price = getPrice(5)
// console.log(price)

function getSecond(numbers) {
    if(Array.isArray(numbers) === false){
        return 'Please provide an array'
    }
    const second = numbers[1];
    return second;
}

const second = getSecond([45, 61, 2])
console.log(second)


