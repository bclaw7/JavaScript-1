// let js = 'amazing';
// console.log(40 + 8 + 23 - 10);

// let firstName = 'Byron';
// console.log(firstName);
// console.log(firstName);
// console.log(firstName);

// let javascriptIsFun = true;
// console.log(javascriptIsFun);

// console.log(typeof true);
// console.log(typeof javascriptIsFun);
// console.log(typeof 23);
// console.log(typeof 'Byron');

// javascriptIsFun = 'Yes!';
// console.log(typeof javascriptIsFun);

// let year;
// console.log(year);
// console.log(typeof year);

// year = 1991;
// console.log(typeof year);

// console.log(typeof null);

// let age = 30;
// age = 31;

// const birthYear = 1991;

// const now = 2037;
// const ageByron = now - 1983;
// const ageCosmo = now - 2020;
// console.log(ageByron, ageCosmo);

// console.log(ageByron * 2, ageByron / 10, 2 ** 3); // 2 **3 means 2 to the power of 3=2*2*2

// const firstName = 'Byron';
// const lastName = 'Lawlis';
// console.log(firstName + ' ' + lastName);

// // assignment operators
// let x = 10 + 5; // x = 15
// x += 10; // x = x + 10 = 25
// x *= 4; // x = x * 4 = 100
// x++; // x = x + 1 = 101
// x--; // 100
// console.log(x);

// // comparison operators
// console.log(ageByron > ageCosmo);
// console.log(ageByron >= 18);

// const isFullAge = ageCosmo >= 18;

// console.log(now - 1991 > now - 2020);

// let x, y;
// x = y = 20 - 10 - 5;
// console.log(x, y);

// const averageAge = (ageByron + ageCosmo) / 2;
// console.log(ageByron, ageCosmo, averageAge);

// const firstName = 'Byron';
// const job = 'developer';
// const birthYear = 1983;
// const year = 2020;

// const byron =
//   "I'm " + firstName + ', a ' + (year - birthYear) + ' year old ' + job + '!';
// console.log(byron);

// const byronNew = `I'm ${firstName}, a ${year - birthYear} year old ${job}!`;
// console.log(byronNew);

// console.log(`another string`);

// console.log(`string
// multiple
// lines,
// yay!`);

// const age = 15;

// if (age >= 18) {
//   console.log('Sarah can start driving license 🚙');
// } else {
//   const yearsLeft = 18 - age;
//   console.log(`Sarah is too young. Wait another ${yearsLeft} years.`);
// }

// const birthYear = 1983;
// let century;
// if (birthYear <= 2000) {
//   century = 20;
// } else {
//   century = 21;
// }
// console.log(century);

// type conversion
// const inputYear = '1991';

// console.log(Number(inputYear) + 18);

// //type coercion
// console.log(`I am 37 years old`);
// console.log('23' - '10' - 3);
// console.log('23' + '10' + 3);
// console.log('23' > '18');

// falsey truthy examples
// const money = 0;
// if (money) {
//   console.log("Don't spend it all!");
// } else {
//   console.log('You should get a job!');
// }

// let height;
// if (height) {
//   console.log('height is defined');
// } else {
//   console.log('height is undefined');
// }

// const age = 18;
// if (age === 18) {
//   console.log("You're an adult now");
// }

// const favorite = Number(prompt("What's your favorite number?"));
// console.log(favorite);
// console.log(typeof favorite);

// if (favorite === 23) {
//   console.log('23 is amazing');
// } else if (favorite === 7) {
//   console.log('7 is great');
// } else if (favorite === 5) {
//   console.log('5 is cool');
// } else {
//   console.log('number is not 7 or 23');
// }

// if (favorite !== 23) {
//   console.log('why not 23');
// }

// const hasDriversLicense = true;
// const hasGoodVision = true;
// console.log(hasDriversLicense && hasGoodVision);
// console.log(hasDriversLicense || hasGoodVision);
// console.log(!hasDriversLicense);

// if (hasDriversLicense && hasGoodVision) {
//   console.log('Sarah is able to drive');
// } else {
//   console.log('Someone else should drive');
// }

// const isTired = false;
// console.log(hasDriversLicense || hasGoodVision || isTired);

// if (hasDriversLicense && hasGoodVision && !isTired) {
//   console.log('Sarah is able to drive');
// } else {
//   console.log('Someone else should drive');
// }

// const day = 'friday';

// switch (day) {
//   case 'monday':
//     console.log('Plan course structure');
//     console.log('Go to coding meetup');
//     break;
//   case 'tuesday':
//     console.log('Prepare theory videos');
//     break;
//   case 'wednesday':
//   case 'thursday':
//     console.log('write code examples');
//     break;
//   case 'friday':
//     console.log('record videos');
//     break;
//   default:
//     console.log('not a valid day');
// }

// if (day === 'monday') {
//   console.log('plan course structure, go to coding meetup');
// } else if (day === 'tuesday') {
//   console.log('prepare theory videos');
// } else if (day === 'wednesday' || day === 'thursday') {
//   console.log('write code examples');
// } else if (day === 'friday') {
//   console.log('record videos');
// } else {
//   console.log('fun day!');
// }

const age = 15;
age >= 18
  ? console.log('i like to drink wine🍇')
  : console.log('i like to drink water🧊');

const drink = age >= 18 ? 'wine' : 'water';
console.log(drink);

let drink2;
if (age >= 18) {
  drink2 = 'wine';
} else {
  drink2 = 'water';
}
console.log(drink2);

console.log(`i like to drink ${age >= 18 ? 'wine' : 'water'}`);

const bill = 40;
const tip = bill >= 50 && bill <= 300 ? 15 / 100 : 20 / 100;
const total = bill * tip + bill;
console.log(`bill:${bill}, tip:${tip}, total:${total}`);
