let ticketPrice = 500;
let hotelPrice = 250;
let museumPrice = 120;

let dollarPrice = 11191;
let euroPrice = 11747.42;

ticketPrice = ticketPrice * dollarPrice;
hotelPrice = hotelPrice * dollarPrice;
museumPrice = hotelPrice * euroPrice;

let allSum = ticketPrice + hotelPrice + museumPrice;

let userMoney = prompt('Enter your amount of money in sums: ');

if (userMoney >= 32874737555) {
	console.log(`Oq yo'l Alisher`);
} else {
	console.log('Yana biroz kutish kerak');
}
