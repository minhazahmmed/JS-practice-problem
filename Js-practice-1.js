//Problem-1: Unit convert- Inch to Feet,miles to km
//1feet = 12inch   and   1mile = 1.6km
function inchToFeet(inch){
    const feet= inch/12;
   return feet;
}
console.log(inchToFeet(75));

//If we see the output of this format ---> "---ft---inch"
function inchToFeet1(inch1){
const feet1=parseInt(inch1/12);
const inch2=inch1%12;
const result=feet1+ " ft "+ inch2 + " inch ";
return result;
}
console.log(inchToFeet1(75));

//---------------------------------------------------------------------

//Problem-2: Check weather the year is Leap Year or Not

function isLeapYear(year){
    if(year%400===0){
        return true;
    }
    else if(year%4===0 && year%100!==0){
        return true;
    }
    else {
        return false;
    }
}
console.log(isLeapYear(2000)); // true
console.log(isLeapYear(1900)); // false
console.log(isLeapYear(2024)); // true
console.log(isLeapYear(2023)); // false


//---------------------------------------------------------------------

//Problem-3: Calculate the average of odd numbers in an array

function oddAvg(numbers){
  const odd=[];
  for(const number of numbers)
{
  if(number%2===1){
    odd.push(number);
  }
}
let sum=0;
for(const number of odd){
  sum=sum+number;
}
const count = odd.length;
// //If we see sum and count separately
// // console.log(sum,count);
const avg=sum/count;

return avg.toFixed(3);
}
const item =[21,42,36,33,49];
console.log(oddAvg(item));

//---------------------------------------------------------------------

//Problem-4: Remove duplicate items from an array

function noDuplicate(array){
 const result=[];
 for(const items of array){
  if(result.includes(items)===false){
    result.push(items);
  }
 }
 return result;
}
const names=['abul', 'babul', 'cabul', 'abul', 'babul', 'dabul', 'kabul', 'cabul'];
const numbers = [1, 5, 61, 5, 87, 7, 5, 81, 61];
console.log(noDuplicate(names));
console.log(noDuplicate(numbers));

//---------------------------------------------------------------------

//Problem-5: Math,abs,round,ceil,floor and random value

const min = Math.min(45, 21, 65, 99, 126, 5, -99)
console.log(min);
const max = Math.max(45, 21, 65, 99, 126, 5, -99, 987);
console.log(max);

console.log(Math.PI)
console.log(Math.abs(5-10))
console.log(Math.round(2.25))
console.log(Math.round(2.85))
console.log(Math.floor(2.95))
console.log(Math.floor(2.99995))
console.log(Math.ceil(2.99995))
console.log(Math.ceil(2.00001))

console.log(Math.random())
console.log(Math.random()*10)
const rand = Math.round(Math.random()*10)
console.log(rand)

//---------------------------------------------------------------------

//Problem-6: JS date and time

const today = new Date();
const date = new Date('2062-10-19')
console.log(date.getMonth());
console.log(date.getDay());
const specificDate = new Date(2091, 0, 26)
console.log(specificDate)
specificDate.setMonth(10);
console.log(specificDate.toLocaleString('en-GB'));

//---------------------------------------------------------------------

//Problem-7: Swap variables, swap without temporary, destructuring

let a = 5;
let b = 7;

console.log(a, b);


const temp = a;
a = b;
b = temp;
console.log(a, b);

let x = 5; 
let y = 7; 

console.log(x, y);
[x, y] = [y, x];
console.log(x, y);
