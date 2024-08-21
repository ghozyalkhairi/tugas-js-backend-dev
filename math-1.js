const readline = require("readline");

// Membuat interface untuk menerima input dari pengguna
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

// Fungsi untuk menghitung luas lingkaran
function hitungLuasLingkaran(jariJari) {
  const luas = Math.PI * Math.pow(jariJari, 2);
  return luas;
}

// Meminta pengguna untuk memasukkan jari-jari
rl.question("Masukkan jari-jari lingkaran: ", (input) => {
  const jariJari = parseFloat(input);

  // Memeriksa apakah input valid
  if (isNaN(jariJari) || jariJari <= 0) {
    console.log("Jari-jari tidak valid. Masukkan angka positif.");
  } else {
    // Menghitung dan menampilkan luas lingkaran
    const luas = hitungLuasLingkaran(jariJari);
    console.log(
      `Luas lingkaran dengan jari-jari ${jariJari} adalah ${luas.toFixed(2)}.`
    );
  }

  // Menutup interface readline
  rl.close();
});
