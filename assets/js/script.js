// 1 uzduotis

let vardas = "Viktorija";
console.log(vardas.toUpperCase());

// 2 uzduotis

let number = "5";

function arLyginis(number) {
    if (number % 2 === 0) {
        console.log(number + " yra lyginis"); 
    } else {
        console.log(number + " yra nelyginis");
    }
}
arLyginis(number);

// 3 uzduotis


function verstiDoleriusIEurus() {
    const doleriai = parseFloat(prompt("Iveskite dolerius:"));

    if (isNaN(doleriai)) {
        alert("Iveskite skaiciu.");
        verstiDoleriusIEurus();
    }

    const euroKursas = 0.93;

    const eurai = doleriai * euroKursas;

    alert("$" + doleriai + " yra €" + eurai.toFixed(2) + ".");
}

verstiDoleriusIEurus();