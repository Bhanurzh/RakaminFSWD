const soal1 = require('./Rumus');
const persegi = new soal1.Persegi(6);
const persegiPanjang = new soal1.PersegiPanjang(12, 7)

console.log(`Luas Persegi adalah: ${persegi.hitungLuas()}`);
console.log(`Keliling Persegi adalah: ${persegi.hitungKeliling()}`);
console.log(`\nLuas Persegi Panjang adalah: ${persegiPanjang.hitungLuas()}`);
console.log(`Keliling Persegi Panjang adalah: ${persegiPanjang.hitungKeliling()}`);