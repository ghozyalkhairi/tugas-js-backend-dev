const readline = require("readline");

// Membuat interface untuk menerima input dari pengguna
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

// Meminta pengguna untuk memasukkan nomor hari
rl.question("Masukkan nomor hari (1-7): ", (input) => {
  const nomorHari = parseInt(input);

  // Menggunakan switch untuk mencetak nama hari
  switch (nomorHari) {
    case 1:
      console.log("Hari Senin");
      break;
    case 2:
      console.log("Hari Selasa");
      break;
    case 3:
      console.log("Hari Rabu");
      break;
    case 4:
      console.log("Hari Kamis");
      break;
    case 5:
      console.log("Hari Jumat");
      break;
    case 6:
      console.log("Hari Sabtu");
      break;
    case 7:
      console.log("Hari Minggu");
      break;
    default:
      console.log("Nomor hari tidak valid. Masukkan angka antara 1-7.");
      break;
  }

  // Menutup interface readline
  rl.close();
});
