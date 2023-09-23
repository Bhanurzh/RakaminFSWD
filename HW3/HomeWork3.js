/* 
Aturan Soal 1
1. Beku -> suhu >= -100 && suhu <= 0
2. Cair -> suhu >= 1 && suhu <= 100
3. Uap -> suhu >= 101 && suhu <= 500
4. Suhu < -100 && Suhu > 500 -> tidak terdefinisi

Aturan Soal 2
Jika Plat Kuning or Motor -> BBM Subsidi
Jika Mobil CC < 1500 -> Pertamax
Jika Mobil CC >= 1500 -> Pertamax Turbo
*/

// Suhu JavaScript
function cekWujudBenda(suhu) {
    return suhu >= -100 && suhu <= 0
        ? "Beku"
        : suhu >= 1 && suhu <= 100
            ? "Cair"
            : suhu >= 101 && suhu <= 500
                ? "Uap"
                : "Tidak terdefinisi";
}

// BBM Kendaraan
function cekBBMKendaraan(kendaraan, cc) {
    return kendaraan === "plat kuning" || kendaraan === "motor"
        ? "BBM Subsidi"
        : cc < 1500
            ? "Pertamax"
            : "Pertamax Turbo";
}

console.log('Test Case cek wujud benda')
console.log(cekWujudBenda(-60)) // Beku
console.log(cekWujudBenda(87)) // Cair
console.log(cekWujudBenda(205)) // Uap
console.log(cekWujudBenda(503)) // Tidak terdefinisi
console.log(cekWujudBenda(-150)) // Tidak terdifinisi

console.log('\nTest Case cek bbm kendaraan')
console.log(cekBBMKendaraan('plat kuning', 1400)) // BBM Subsidi
console.log(cekBBMKendaraan('motor', 1600)) // BBM Subsidi
console.log(cekBBMKendaraan('mobil', 1300)) // Pertamax
console.log(cekBBMKendaraan('mobil', 1800)) // Pertamax Turbo