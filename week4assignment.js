//All questions should be printed to your Browser's console using console.log()
    console.log(`//Create an array called ages that contains the following values: 3, 9, 23, 64, 2, 8, 28, 93
//Programmatically subtract the value of the first element in the array from the value in
//the last element of the array.
//Do not use numbers to reference the last element, find it programmatically.
//ages[7] - ages[0] is not allowed! 
//Add a new age to your array and repeat the step above to ensure it is dynamic.
//(works for arrays of different lengths).
//Use a loop to iterate through the array and calculate the average age.\n

`)

console.log(`
   const ages = [3, 9, 23, 64, 2, 8, 28, 93];

   let result = ages[ages.length - 1] - ages[0];
   console.log(result)

   ages.push(47);
   result = ages[ages.length - 1] - ages[0];
   console.log(result)

   let sum = 0;
   for (let i = 0; i < ages.length; i++){
   sum += ages[i];   }

   let average = sum / ages.length;
   console.log(average)
   
   `)
   console.log("code demonstrated")
   const ages = [3, 9, 23, 64, 2, 8, 28, 93];{

   let result = ages[ages.length - 1] - ages[0];
   console.log(result)

   ages.push(47);
   result = ages[ages.length - 1] - ages[0];
   console.log(result)

   let sum = 0;
   for (let i = 0; i < ages.length; i++){
   sum += ages[i];   }

   let average = sum / ages.length;
   console.log(average)}

console.log(`

`)



console.log(`//Create an array called names that contains the following values:
// 'Sam', 'Tommy', 'Tim', 'Sally', 'Buck', 'Bob'.
/////Use a loop to iterate through the array and calculate the average number of 
//letters per name.
//Use a loop to iterate through the array again and concatenate all the names together,
// separated by spaces.


`)
console.log(`const names = ['Sam', 'Tommy', 'Tim', 'Sally', 'Buck', 'Bob'];

let stringedNames = ' ';

let sum = 0;
for (let i = 0; i < names.length; i++){
sum += names[i].length;   }

let average = sum / names.length;
console.log(average)

for (let i = 0; i < names.length; i++){
    if (i !== 0){ stringedNames += ' '};    
    stringedNames += names[i];}

    console.log(stringedNames);
`)
console.log(`demonstraded code 

`)

let names = ['Sam', 'Tommy', 'Tim', 'Sally', 'Buck', 'Bob'];

let stringedNames = ' ';

let sum = 0;
for (let i = 0; i < names.length; i++){
sum += names[i].length;   }

let average = sum / names.length;
console.log(average)

for (let i = 0; i < names.length; i++){
    if (i !== 0){ stringedNames += ' '};    
    stringedNames += names[i];}

    console.log(stringedNames);




console.log(`//How do you access the last element of any array?
answer -    by using the length method length -1

`)

console.log(`//How do you access the first element of any array?
Answer -   by using the index method, the first element of an array is always 0

`)



console.log(`//Create a new array called nameLengths. Write a loop to iterate over the previously 
//created names array and add the length of each name to the nameLengths array.
//For example:
//let names = ["Kelly", "Sam", "Kate"];    // starting with this array
//let nameLengths = [5, 3, 4];             // create a new array\n


`)
console.log(`
names = ['Sam', 'Tommy', 'Tim', 'Sally', 'Buck', 'Bob']
    
let nameLengths = []

    for  (let i = 0; i < names.length; i++){
        nameLengths.push(names[i].length)
    }
    console.log(nameLengths)
    
    `)
console.log('demonstrated code')
names = ['Sam', 'Tommy', 'Tim', 'Sally', 'Buck', 'Bob']
    
let nameLengths = []

    for  (let i = 0; i < names.length; i++){
        nameLengths.push(names[i].length)
    }
    console.log(nameLengths)
    console.log(`
    
    `)

console.log(`//Write a loop to iterate over the nameLengths array and calculate the sum of all the 
//elements in the array.


`)

console.log(`
let newSum = 0
for (let i = 0; i < nameLengths.length; i++){
    newSum += nameLengths[i];  
} 
console.log(newSum)`)

console.log(`demonstraded code
`)

let newSum = 0
for (let i = 0; i < nameLengths.length; i++){
    newSum += nameLengths[i];  
} 
console.log(newSum)
console.log(`

`)
console.log(`//Write a function that takes two parameters, word and n, as arguments and returns 
//the word concatenated to itself n number of times. (i.e. if I pass in 'Hello' and 3, I would expect the function to return 'HelloHelloHello').
`)
console.log(`let myFunction = (word, n) => {
    let result = '';
    for (let i = 0; i < n; i++) {
      result += word;
    }
    return result;
  };console.log(myFunction(hello, 3))`)


console.log(`demonstrated code

`)  
let myFunction = (word, n) => {
    let result = '';
    for (let i = 0; i < n; i++) {
      result += word;
    }
    return result;
  };console.log(myFunction('hello', 3))
  console.log(`
  `)

console.log(`//Write a function that takes two parameters, firstName and lastName, and returns
// a full name. The full name should be the first and the last name separated by a space.


`)
console.log(`
let fullName = (firstName, lastName) => firstName + ' ' + lastName
console.log(fullName('Ryan', 'David'))

`)
console.log(`demonstrated code
`)
let fullName = (firstName, lastName) => firstName + ' ' + lastName
console.log(fullName('Ryan', 'David'))
console.log(`

`)
console.log(`//Write a function that takes an array of numbers and returns true if the sum of all 
//the numbers in the array is greater than 100.


`)
console.log(`

let myArray = [25,50,75,100];

let arrayFunction = (arr) => {
    let sum = 0
    for (let num of arr)   {
        sum += num;
    }
    return sum > 100;
}
console.log(arrayFunction(myArray))

}

`)
console.log('demonstrated code')

let myArray = [25,50,75,100];

let arrayFunction = (arr) => {
    let sum = 0
    for (let num of arr)   {
        sum += num;
    }
    return sum > 100;
}
console.log(arrayFunction(myArray))
console.log(`

`)

console.log(`//Write a function that takes an array of numbers and returns the average of all 
//the elements in the array.


`)
console.log(`
let arrNumbers = [5, 10, 15, 20,];
let myNewFunction = (arrNumbers) => {    

    let sum = 0;
    for (let i = 0; i < arrNumbers.length; i++){
    sum += arrNumbers[i];   }

    
    let average = sum / arrNumbers.length;
    return average;
}
console.log(myNewFunction(arrNumbers))
`)
console.log(`demonstrated code`)
let arrNumbers = [5, 10, 15, 20,];
let myNewFunction = (arrNumbers) => {    

    let sum = 0;
    for (let i = 0; i < arrNumbers.length; i++){
    sum += arrNumbers[i];   }

    
    let average = sum / arrNumbers.length;
    return average;
}
console.log(myNewFunction(arrNumbers))
console.log(`

`)

console.log(`//Write a function that takes two arrays of numbers and returns true if the average
// of the elements in the first array is greater than the average of the elements in 
//the second array.


`)
console.log(`
let array1 = [5, 10, 15, 20,30];
let array2 = [23,13,55,22,82,30];

let thisNewFunction = (array1, array2) => {
    
        let sum1 = 0;

        for (let i = 0; i < array1.length; i++){
        sum1 += array1[i];}

        let array1Average = sum1 / array1.length;

        let sum2 = 0;

        for (let i = 0; i < array2.length; i++){
        sum2 += array2[i];}  

        let array2Average = sum2 / array2.length;

        return array1Average > array2Average

             
    }
    

    console.log(thisNewFunction(array1, array2))  

`)
console.log(`demonstrated code

`)

let array1 = [5, 10, 15, 20,30];
let array2 = [23,13,55,22,82,30];

let thisNewFunction = (array1, array2) => {
    
        let sum1 = 0;

        for (let i = 0; i < array1.length; i++){
        sum1 += array1[i];}

        let array1Average = sum1 / array1.length;

        let sum2 = 0;

        for (let i = 0; i < array2.length; i++){
        sum2 += array2[i];}  

        let array2Average = sum2 / array2.length;

        return array1Average > array2Average

             
    }
    

    console.log(thisNewFunction(array1, array2))  


console.log(`//Write a function called willBuyDrink that takes a boolean isHotOutside, 
//and a number moneyInPocket, and returns true if it is hot outside and if 
//moneyInPocket is greater than 10.50.


`)
console.log(`
let willBuyDrink = (isHotOutside, moneyInPocket) => {
    if (isHotOutside === true && moneyInPocket > 10.50) {
        return true
    } else return false;

}
console.log(willBuyDrink(true,12.00));
`)

console.log(`demonstrated code`)

let willBuyDrink = (isHotOutside, moneyInPocket) => {
    if (isHotOutside == true && moneyInPocket > 10.50) {
        return true
    } else return false;

}
console.log(willBuyDrink(true,12.00));

console.log(`

`)


console.log(`//Create a function of your own that solves a problem. In comments, write what the 
//function does and why you created it.


`)
console.log(`
let colorsAvailable = ['teak', 'driftwood', 'charcoal', 'estate grey']
let shingleSquaresInStock = 100
let moneyForRoof = 35000.00
let myRoofingFunction = (shingleColor, shingleSquaresNeeded, price) => {
    if (colorsAvailable.includes(shingleColor) && shingleSquaresNeeded <= shingleSquaresInStock && price < moneyForRoof) 
    {return 'The color is available, we have enough shingles in stock, the price is right, so lets get it started'}

    else return 'we need to wait until we have everything we need.'
}
console.log(myRoofingFunction('teak',50,25000))
`)
console.log(`demonstrated code

`)

let colorsAvailable = ['teak', 'driftwood', 'charcoal', 'estate grey']
let shingleSquaresInStock = 100
let moneyForRoof = 35000.00
let myRoofingFunction = (shingleColor, shingleSquaresNeeded, price) => {
    if (colorsAvailable.includes(shingleColor) && shingleSquaresNeeded <= shingleSquaresInStock && price < moneyForRoof) 
    {return 'The color is available, we have enough shingles in stock, the price is right, so lets get it started'}

    else return 'we need to wait until we have everything we need.'
}
console.log(myRoofingFunction('teak',50,25000))

console.log(`one more run with a different color choice one that is not in the array`)

console.log(`myRoofingFunction('white',50,25000)`)
console.log('demonstrated code')
console.log(myRoofingFunction('white',50,25000))


console.log('I chose to do this because I am a contractor, and I would love to produce and intelegent app someday.')