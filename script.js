// ===============================
// HOME PAGE
// ===============================

function findParking() {

    const location =
        document.getElementById("location").value.trim();


    if (location === "") {

        alert("Please enter your location.");

        return;
    }


    // Save location

    localStorage.setItem(
        "userLocation",
        location
    );


    // Open parking page

    window.location.href = "parking.html";
}



// ===============================
// PARKING PAGE
// ===============================

function selectParking(parkingName) {

    // Save selected parking

    localStorage.setItem(
        "selectedParking",
        parkingName
    );


    // Open booking page

    window.location.href = "booking.html";
}



// ===============================
// BOOKING PAGE
// ===============================

let selectedSlotNumber = null;


function selectSlot(element, slotNumber) {

    // Remove previous selection

    const slots =
        document.querySelectorAll(".slot.available");


    slots.forEach(function(slot) {

        slot.classList.remove("selected");

    });


    // Select current slot

    element.classList.add("selected");


    selectedSlotNumber = slotNumber;


    document.getElementById(
        "selectedSlot"
    ).textContent =
        "Slot " + slotNumber;
}



// ===============================
// CONFIRM BOOKING
// ===============================

function confirmBooking() {

    const name =
        document.getElementById("userName").value.trim();


    const vehicle =
        document
            .getElementById("vehicleNumber")
            .value.trim();


    const date =
        document.getElementById("bookingDate").value;


    const time =
        document.getElementById("bookingTime").value;


    if (name === "") {

        alert("Please enter your name.");

        return;
    }


    if (vehicle === "") {

        alert("Please enter your vehicle number.");

        return;
    }


    if (date === "") {

        alert("Please select a date.");

        return;
    }


    if (time === "") {

        alert("Please select a time.");

        return;
    }


    if (selectedSlotNumber === null) {

        alert("Please select a parking slot.");

        return;
    }


    // Save booking information

    localStorage.setItem(
        "customerName",
        name
    );


    localStorage.setItem(
        "vehicleNumber",
        vehicle
    );


    localStorage.setItem(
        "bookingDate",
        date
    );


    localStorage.setItem(
        "bookingTime",
        time
    );


    localStorage.setItem(
        "selectedSlot",
        selectedSlotNumber
    );


    // Hide form

    document.querySelector(
        ".booking-form"
    ).style.display = "none";


    // Show confirmation

    document.getElementById(
        "confirmation"
    ).classList.remove("hidden");

}



// ===============================
// BACK TO HOME
// ===============================

function goHome() {

    window.location.href = "index.html";

}



// ===============================
// LOAD SELECTED PARKING
// ===============================

window.addEventListener(
    "DOMContentLoaded",
    function() {

        const parkingName =
            localStorage.getItem(
                "selectedParking"
            );


        const parkingTitle =
            document.getElementById(
                "parkingTitle"
            );


        if (
            parkingTitle &&
            parkingName
        ) {

            parkingTitle.textContent =
                "Book Parking - " +
                parkingName;

        }

    }
);