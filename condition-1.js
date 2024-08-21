const readline = require("readline");

// Membuat interface untuk menerima input dari pengguna
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

// Meminta pengguna untuk memasukkan angka
rl.question("Masukkan sebuah angka: ", (input) => {
  const angka = parseInt(input);

  // Memeriksa apakah input valid
  if (isNaN(angka)) {
    console.log("Input bukan angka yang valid.");
  } else {
    // Menggunakan if-else untuk menentukan genap atau ganjil
    if (angka % 2 === 0) {
      console.log(`Angka ${angka} adalah genap.`);
    } else {
      console.log(`Angka ${angka} adalah ganjil.`);
    }
  }

  // Menutup interface readline
  rl.close();
});
