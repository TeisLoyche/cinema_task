/*Lägger alla checkboxar med namnet "checkbox" i variabeln.*/
let checkbox = document.getElementsByName("checkbox");

//Skapar en tom array där man kan spara de checkboxar som klickas i.
let seats = [];

//Lägger till ett click event på alla checkboxar, och lägger till varje checkbox man klickar på i den tomma arrayen.
for (let i = 0; i < checkbox.length; i++) {
  checkbox[i].addEventListener("click", () => {
    seats.push(checkbox[i].id);
  });
}

//Sparar ner arrayen i en local storage.
function saveSeats() {
  localStorage.selectedSeats = JSON.stringify(seats);
}

//Hämtar den sparade arrayen från local storage och visar upp dem.
function displaySeats() {
  document.getElementById("display").innerHTML = JSON.parse(
    localStorage.selectedSeats
  );
}

function confirmBooking() {
  alert(
    "Tickets successfully booked! Please check your email for confirmation. Enjoy the movie!"
  );
}
