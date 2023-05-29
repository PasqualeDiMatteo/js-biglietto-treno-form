console.log("JSOK");

/*
0. Costanti :
   - €/km
   - Age Senior
   - Age Minors
   - Discount for Senior
   - Discount for Minors
1. Chiedere all'utente i km che vuole percorrere
2. Chiedere all'utente il nome
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
const userName = document.getElementById("user-name");
const kilometers = document.getElementById("route");
const userAge = document.getElementById("age");
const generates = document.getElementById("generates");
const cancel = document.getElementById("cancel");

// 2. 3. Ask Km, Age, Name

generates.addEventListener("click", function () {
  const name = userName.value;
  console.log("il nome è: " + name);

  const km = kilometers.value;
  console.log("La tratta è di: " + km + "km");

  const age = userAge.value;
  console.log("Anni: " + age);

  // Calculate the Ticket Price

  let priceTicket = km * priceKm;
  console.log(priceTicket);

  let priceDiscounted = priceTicket;

  if (age < ageMinors) {
    priceDiscounted = priceTicket - (priceTicket * discountMinors) / 100;
  } else if (age > ageSenior) {
    priceDiscounted = priceTicket - (priceTicket * discountSenior) / 100;
  }

  console.log(priceDiscounted);
});
