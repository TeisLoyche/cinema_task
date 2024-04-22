/*document.addEventListener("DOMContentLoaded", function () {
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
