class Persegi {
    constructor(sisi) {
        this.sisi = sisi;
    }
    hitungLuas() {
        return this.sisi * this.sisi;
    }
    hitungKeliling() {
        return 4 * this.sisi;
    }
}

class PersegiPanjang {
    constructor(panjang, lebar) {
        this.panjang = panjang;
        this.lebar = lebar;
    }
    hitungLuas() {
        return this.panjang * this.lebar;
    }
    hitungKeliling() {
        return 2 * (this.panjang + this.lebar);
    }
}

module.exports = { Persegi, PersegiPanjang };