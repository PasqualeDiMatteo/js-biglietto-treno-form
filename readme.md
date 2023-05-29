# Calcolo del prezzo del biglietto del treno

## Traccia

---

Il programma dovrà chiedere all'utente il numero di chilometri che vuole percorrere e l'età del passeggero.
Sulla base di queste informazioni dovrà calcolare il prezzo totale del viaggio, secondo queste regole:
il prezzo del biglietto è definito in base ai km (0.21 € al km)
va applicato uno sconto del 20% per i minorenni
va applicato uno sconto del 40% per gli over 65.

MILESTONE 1:
Iniziamo implementando il programma senza alcuna estetica: usando esclusivamente due input e un bottone (non stilizzati), realizziamo le specifiche scritte sopra. La risposta finale (o output) sarà anch’essa da scrivere in console.

MILESTONE 2:
Solo una volta che il milestone 1 sarà completo e funzionante allora realizzeremo un form (non tag _form_) in pagina in cui l’utente potrà inserire i dati e visualizzare il calcolo finale con il prezzo.Il recap dei dati e l'output del prezzo finale, andranno quindi stampati in pagina (il prezzo dovrà essere formattato con massimo due decimali, per indicare i centesimi sul prezzo).

---

## Steps

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

---

## Bonus

1. Randomizzrare un numero per la carrozza dell'utente
2. Randomizzare un numero per il codice del biglietto
3. Utilizzare una _select_ invece di un _input_ per determinare l'età dell'utente
4. Implementare il reset del form tramite un bottone di reset
