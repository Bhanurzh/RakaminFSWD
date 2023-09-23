function createRandomArray(array) {
    for (let i = 1; i <= 100; i++) {
        const randomValue = Math.round(Math.random() * 50) + 1;
        array.push(randomValue);
    }
    return array;
}

function devideArrayByOddEvenIndex(array) {
    const arrayGenap = [];
    const arrayGanjil = [];

    for (let i = 0; i < array.length; i++) {
        if (i % 2 == 0) {
            arrayGenap.push(array[i]);
        } else {
            arrayGanjil.push(array[i]);
        }
    }

    return { arrayGenap, arrayGanjil };
}

function findMaxArray(array) {
    let max = 0;
    for (let i = 0; i < array.length; i++) {
        if (max < array[i]) {
            max = array[i];
        }
    }
    return max;
}

function findMinArray(array) {
    let min = 100;
    for (let i = 0; i < array.length; i++) {
        if (min > array[i]) {
            min = array[i];
        }
    }
    return min;
}

function sumArray(array) {
    let total = 0;
    for (let i = 0; i < array.length; i++) {
        total += array[i];
    }
    return total;
}

// Membuat array random dengan 100 index
const emptyArray = [];
const randomArray = createRandomArray(emptyArray);
console.log("Array dengan jumlah index 100\n", randomArray, "\n");

// Hasil Pembagian 2 Array berdasarkan index ganjil dan genap
const resultDevidedArray = devideArrayByOddEvenIndex(randomArray);
console.log("Array dengan jumlah index 50", resultDevidedArray, "\n")

// Array Genap
const maxArrGenap = findMaxArray(resultDevidedArray.arrayGenap);
const minArrGenap = findMinArray(resultDevidedArray.arrayGenap);
const totalArrGenap = sumArray(resultDevidedArray.arrayGenap);
const rataRataArrGenap = totalArrGenap / resultDevidedArray.arrayGenap.length;
console.log("Array Genap\nMax :", maxArrGenap, "\nMin :", minArrGenap, "\nTotal :", totalArrGenap, "\nRata-rata :", rataRataArrGenap, "\n\n");

// Array Ganjil
const maxArrGanjil = findMaxArray(resultDevidedArray.arrayGanjil);
const minArrGanjil = findMinArray(resultDevidedArray.arrayGanjil);
const totalArrGanjil = sumArray(resultDevidedArray.arrayGanjil);
const rataRataArrGanjil = totalArrGanjil / resultDevidedArray.arrayGanjil.length;
console.log("Array Ganjil\nMax :", maxArrGanjil, "\nMin :", minArrGanjil, "\nTotal :", totalArrGanjil, "\nRata-rata :", rataRataArrGanjil, "\n\n");

// Membandingkan Kedua Array
const comparisonResults = [];
if (minArrGenap > minArrGanjil) {
    comparisonResults.push("Min lebih besar array genap");
} else if (minArrGanjil > minArrGenap) {
    comparisonResults.push("Min lebih besar array ganjil");
} else {
    comparisonResults.push("Min memiliki nilai yang sama antara array genap dan ganjil");
}

if (maxArrGenap > maxArrGanjil) {
    comparisonResults.push("Max lebih besar array genap");
} else if (maxArrGanjil > maxArrGenap) {
    comparisonResults.push("Max lebih besar array ganjil");
} else {
    comparisonResults.push("Max memiliki nilai yang sama antara array genap dan ganjil");
}

if (totalArrGenap > totalArrGanjil) {
    comparisonResults.push("Total lebih besar array genap");
} else if (totalArrGanjil > totalArrGenap) {
    comparisonResults.push("Total lebih besar array ganjil");
} else {
    comparisonResults.push("Total memiliki nilai yang sama antara array genap dan ganjil");
}

if (rataRataArrGenap > rataRataArrGanjil) {
    comparisonResults.push("Rata-rata lebih besar array genap");
} else if (rataRataArrGanjil > rataRataArrGenap) {
    comparisonResults.push("Rata-rata lebih besar array ganjil");
} else {
    comparisonResults.push("Rata-rata memiliki nilai yang sama antara array genap dan ganjil");
}

// Hasil Membandingkan 2 Array
comparisonResults.forEach(result => {
    console.log(result);
});