class Pendaftar {
    constructor(nama, umur, uangSangu) {
        this.nama = nama;
        this.umur = umur;
        this.uangSangu = uangSangu;
    }
}

class DataPendaftar {
    constructor() {
        this.arrDataPendaftar = [];
    }

    tambahPendaftar(nama, umur, uangSangu) {
        const pendaftar = new Pendaftar(nama, umur, uangSangu);
        this.arrDataPendaftar.push(pendaftar);
    }

    hitungRataRata() {
        let totalUmur = 0;
        let totalUangSangu = 0;

        for (const pendaftar of this.arrDataPendaftar) {
            totalUmur += pendaftar.umur;
            totalUangSangu += pendaftar.uangSangu;
        }

        const rataRataUmur = Math.round(totalUmur / this.arrDataPendaftar.length);
        const rataRataUangSangu = Math.round(totalUangSangu / this.arrDataPendaftar.length);

        return { rataRataUmur, rataRataUangSangu };
    }
}

const dataPendaftar = new DataPendaftar();

const formRegistrasi = document.getElementById('registrasi-form');
const tabelPendaftar = document.getElementById('row-pendaftar');
const resumeContent = document.getElementById('resume');

formRegistrasi.addEventListener('submit', (event) => {
    event.preventDefault();

    const nama = document.getElementById("InputNama").value.trim();
    const umur = parseInt(document.getElementById("InputUmur").value.trim());
    const uangSangu = parseInt(document.getElementById("InputSangu").value.trim());

    const errorNama = document.getElementById('nama-error');
    const errorUmur = document.getElementById('umur-error');
    const errorSangu = document.getElementById('sangu-error');

    if (nama.length < 10) {
        errorNama.style.display = 'block';
        return;
    } else {
        errorNama.style.display = 'none';
    }

    if (umur < 25) {
        errorUmur.style.display = 'block';
        return;
    } else {
        errorUmur.style.display = 'none';
    }

    if (uangSangu < 100000 || uangSangu > 1000000) {
        errorSangu.style.display = 'block';
        return;
    } else {
        errorSangu.style.display = 'none';
    }

    dataPendaftar.tambahPendaftar(nama, umur, uangSangu);
    formRegistrasi.reset();
    tampilkanDataPendaftar();

});

function tampilkanDataPendaftar() {
    tabelPendaftar.innerHTML = '';

    for (const pendaftar of dataPendaftar.arrDataPendaftar) {
        const row = document.createElement('tr');
        row.innerHTML = `
            <td>${pendaftar.nama}</td>
            <td>${pendaftar.umur} Tahun</td>
            <td>Rp. ${pendaftar.uangSangu}</td>
        `;
        tabelPendaftar.appendChild(row);
    }

    const rataRata = dataPendaftar.hitungRataRata();
    resumeContent.textContent = `Rata-rata pendaftar memiliki uang sangu sebesar Rp. ${rataRata.rataRataUangSangu} dengan rata-rata umur ${rataRata.rataRataUmur} Tahun`
}