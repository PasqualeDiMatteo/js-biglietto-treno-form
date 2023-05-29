console.log("JSOK");

/*
1. Costanti :
- €/km
- Age Senior
- Age Minors
- Discount for Senior
- Discount for Minors
2. Chiedere all'utente i km che vuole percorrere
3. Chiedere all'utente l'età
4. Validazione
5. Calcolare il prezzo del bigietto
6. Applicare lo sconto
7. Calcolare il prezzo con lo sconto
8. Stampare il prezzo con lo sconto 
*/

// 1. Costants

const priceKm = 0.21;
const ageSenior = 65;
const ageMinors = 18;
const discountSenior = 40;
const discountMinors = 20;
// 2. 3. Ask Km and Age

const userAge = parseInt(prompt("How old is the passenger?", "35"));
const kilometers = parseInt(
  prompt("How many kilometers do you have to travel?", "600")
);

console.log(userAge + " Age");
console.log(kilometers + " Km");

// 4. Validation
let isValid = true;
let error = null;

if (!kilometers) {
  isValid = false;
  error = "Km must be a number greater than 0.\n";
}

if (!userAge || userAge < 1 || userAge > 104) {
  isValid = false;
  error += "You must enter an age ranging from 1 to 104.";
}

// 5. 6. 7. 8. Calculated the price of the ticket and the discounted ticket

if (!isValid) {
  alert(error);
} else {
  let priceTicket = kilometers * priceKm;
  console.log(priceTicket.toFixed(2));

  let priceDiscounted = priceTicket;

  if (userAge < ageMinors) {
    priceDiscounted = priceTicket - (priceTicket * discountMinors) / 100;
  } else if (userAge > ageSenior) {
    priceDiscounted = priceTicket - (priceTicket * discountSenior) / 100;
  }

  console.log(priceDiscounted.toFixed(2));
}
