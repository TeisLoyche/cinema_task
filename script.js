/*Försöker bara testa med 2 säten till att börja med. Får det dock inte att fungera*/

/* 
document.addEventListener("DOMContentLoaded", function () {
  const seatData = [
    { id: "seat1-1", name: "seatOne" },
    { id: "seat1-2", name: "seatTwo" },
  ];

  const selectedSeats = {};

  seatData.forEach((seat) => {
    selectedSeats[seat.id] = { name: seat.name };
  });

  window.updateSeats = function (seatId) {
    const input = document.getElementById(`input-${seatId}`);
  };

  const seating = document.getElementById("seating");
  seating.addEventListener("submit", function (seat) {
    seat.preventDefault();
    const summary = document.getElementById("selectedSeats").innerHTML;
    alert(
      `Booking confirmed! Here are your seats: \n\n${summary.replace(
        /<\/?p>|<br>/g,
        "\n"
      )}`
    );

    document
      .querySelectorAll('#events input[type="number"]')
      .forEach((input) => (input.value = 0));
    Object.keys(selectedSeats).forEach((id) => {
      selectedSeats[id].total = 0;
    });

    document.getElementById(("selectedTickets".innerHTML = ""));
  });
}); */

/*Logga ett seat när man klickar*/

/* 
const selectedSeats = [];

function myFunction1() {
  const seat = document.getElementById("seat1-11");
  selectedSeats.push(seat);
}

function myFunction2() {
  const seat = document.getElementById("seat1-10");
  selectedSeats.push(seat);
}

function book() {
  selectedSeats.forEach((seat) => alert(seat));
}
*/

/*Lägger alla checkboxar med namnet "checkbox" i variabeln.*/
let checkbox = document.getElementsByName("checkbox");

//Skapar en tom array där man kan spara de checkboxar som klickas i.
let seats = [];

//Lägger till ett click event på alla checkboxar, och lägger till varje checkbox man klickar på i den tomma arrayen.
for (let i = 0; i < checkbox.length; i++) {
  checkbox[i].addEventListener("click", () => {
    seats.push(checkbox[i]);
  });
}

//Loggar ut samtliga objekt i arrayen.
function displaySeats() {
  console.log(seats);
}
