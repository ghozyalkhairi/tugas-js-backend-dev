const readline = require("readline");

// Membuat interface untuk menerima input dari pengguna
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

// Fungsi untuk mengkuadratkan elemen-elemen array
function kuadratArray(array) {
  return array.map((angka) => angka * angka);
}

// Meminta pengguna untuk memasukkan array angka
rl.question(
  "Masukkan array angka (pisahkan dengan koma, misal: 1,2,3,4): ",
  (input) => {
    // Mengonversi input string menjadi array angka
    const angkaArray = input.split(",").map(Number);

    // Memeriksa apakah semua elemen dalam array valid
    if (angkaArray.some(isNaN)) {
      console.log(
        "Input tidak valid. Pastikan semua elemen adalah angka dan dipisahkan dengan koma."
      );
    } else {
      // Menghitung kuadrat dan menampilkan hasil
      const kuadratArrayResult = kuadratArray(angkaArray);
      console.log("Array setelah dikuadratkan:", kuadratArrayResult);
    }

    // Menutup interface readline
    rl.close();
  }
);
