import { index, store, destroy } from "./controller.mjs";

const main = () => {
    // Tambah dua data baru
    store({ nama: 'Data Baru 1', umur: 30, alamat: 'Jl. Baru 1', email: 'baru1@example.com' });
    store({ nama: 'Data Baru 2', umur: 31, alamat: 'Jl. Baru 2', email: 'baru2@example.com' });
    
    // Tampilkan semua data
    index();
    
    // Hapus data dengan index 2 (data ketiga)
    destroy(2);
    
    // Tampilkan data setelah penghapusan
    index();
};

main();
