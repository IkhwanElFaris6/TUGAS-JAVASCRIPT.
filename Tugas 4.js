// Class Kendaraan sebagai superclass
class Kendaraan {
    constructor(merk, tipe) {
        this.merk = merk;
        this.tipe = tipe;
    }
}

// Class Pelanggan
class Pelanggan {
    constructor(nama, nomorTelepon) {
        this.nama = nama;
        this.nomorTelepon = nomorTelepon;
        this.kendaraanDisewa = null; // Awalnya tidak ada kendaraan yang disewa
    }

    // Metode untuk mencatat transaksi penyewaan kendaraan
    sewaKendaraan(kendaraan) {
        this.kendaraanDisewa = kendaraan;
        console.log(`${this.nama} telah menyewa ${kendaraan.merk} ${kendaraan.tipe}.`);
    }

    // Metode untuk menampilkan informasi pelanggan
    info() {
        return {
            nama: this.nama,
            nomorTelepon: this.nomorTelepon,
            kendaraanDisewa: this.kendaraanDisewa ? `${this.kendaraanDisewa.merk} ${this.kendaraanDisewa.tipe}` : 'Tidak ada kendaraan yang disewa'
        };
    }
}

// Class untuk mengelola sistem penyewaan
class SistemManajemenTransportasi {
    constructor() {
        this.pelangganList = [];
    }

    // Metode untuk menambahkan pelanggan
    tambahPelanggan(pelanggan) {
        this.pelangganList.push(pelanggan);
    }

    // Metode untuk menampilkan daftar pelanggan yang sedang menyewa kendaraan
    tampilkanPelanggan() {
        console.log("Daftar Pelanggan yang Sedang Menyewa Kendaraan:");
        this.pelangganList.forEach(pelanggan => {
            const info = pelanggan.info();
            console.log(`Nama: ${info.nama}, Nomor Telepon: ${info.nomorTelepon}, Kendaraan Disewa: ${info.kendaraanDisewa}`);
        });
    }
}

// Contoh penggunaan
const sistem = new SistemManajemenTransportasi();

// Membuat beberapa kendaraan
const kendaraan1 = new Kendaraan("Toyota", "Avanza");
const kendaraan2 = new Kendaraan("Honda", "Civic");

// Membuat pelanggan
const pelanggan1 = new Pelanggan("Alice", "08123456789");
const pelanggan2 = new Pelanggan("Bob", "08987654321");

// Menambahkan pelanggan ke sistem
sistem.tambahPelanggan(pelanggan1);
sistem.tambahPelanggan(pelanggan2);

// Pelanggan menyewa kendaraan
pelanggan1.sewaKendaraan(kendaraan1);
pelanggan2.sewaKendaraan(kendaraan2);

// Menampilkan daftar pelanggan yang sedang menyewa kendaraan
sistem.tampilkanPelanggan();
