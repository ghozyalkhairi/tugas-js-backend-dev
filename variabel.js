// Menggunakan var
var varVariable = "Ini adalah variable var";
console.log(varVariable);

// Menggunakan let
let letVariable = "Ini adalah variable let";
console.log(letVariable);

// Menggunakan const
const constVariable = "Ini adalah variable const";
console.log(constVariable);

// Reassign var
varVariable = "Var bisa di reassign";
console.log(varVariable);

// Reassign let
letVariable = "Let juga bisa di reassign";
console.log(letVariable);

// Reassign const (akan menyebabkan error)
try {
  constVariable = "Coba reassign const";
} catch (error) {
  console.error("Error: ", error.message);
}

// Demonstrasi block scoping dengan let dan const
if (true) {
  let blockScopedLet = "Variable let di block scope";
  const blockScopedConst = "Variable let di block scope";
  console.log(blockScopedLet);
  console.log(blockScopedConst);
}

// Mengakses let/const di luar block (akan menyebabkan error)
try {
  console.log(blockScopedLet);
} catch (error) {
  console.error("Error: ", error.message);
}

try {
  console.log(blockScopedConst);
} catch (error) {
  console.error("Error: ", error.message);
}

// Tipe data primitif
const angka = 42; // number
const teks = "Halo, Dunia!"; // string
const benar = true; // boolean
const tidakTerdefinisi = undefined; // undefined
const tidakAdaNilai = null; // null
const simbol = Symbol("simbol"); // symbol
const besarAngka = 12345678901234567890n; // bigint

console.log("\nTipe Data Primitif:");
console.log("Angka:", angka);
console.log("Teks:", teks);
console.log("Benar:", benar);
console.log("Undefined:", tidakTerdefinisi);
console.log("Null:", tidakAdaNilai);
console.log("Symbol:", simbol.toString());
console.log("BigInt:", besarAngka);

// Tipe data non-primitif
const array = [1, 2, 3, 4]; // array
const objek = { nama: "Budi", umur: 25 }; // object
const fungsi = function () {
  return "Saya fungsi!";
}; // function
const tanggal = new Date(); // date

console.log("\nTipe Data Non-Primitif:");
console.log("Array:", array);
console.log("Objek:", objek);
console.log("Fungsi:", fungsi());
console.log("Tanggal:", tanggal);

// Operator aritmatika
const a = 10;
const b = 5;

console.log("\nOperator Aritmatika:");
console.log("Penjumlahan (a + b):", a + b);
console.log("Pengurangan (a - b):", a - b);
console.log("Perkalian (a * b):", a * b);
console.log("Pembagian (a / b):", a / b);
console.log("Modulus (a % b):", a % b);
console.log("Eksponensial (a ** b):", a ** b);

// Operator perbandingan
const x = 10;
const y = 20;

console.log("\nOperator Perbandingan:");
console.log("x > y:", x > y); // lebih besar
console.log("x < y:", x < y); // lebih kecil
console.log("x >= y:", x >= y); // lebih besar atau sama dengan
console.log("x <= y:", x <= y); // lebih kecil atau sama dengan
console.log("x == y:", x == y); // sama dengan
console.log("x != y:", x != y); // tidak sama dengan
console.log("x === y:", x === y); // identik (sama tipe dan nilai)
console.log("x !== y:", x !== y); // tidak identik
