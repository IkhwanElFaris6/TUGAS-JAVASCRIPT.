import users from "./data.mjs";

const index = () => {
    console.log("=== Daftar Pengguna ===");
    users.map((user, i) => {
        console.log(`${i+1}. Nama: ${user.nama}`);
        console.log(`   Umur: ${user.umur}`);
        console.log(`   Alamat: ${user.alamat}`);
        console.log(`   Email: ${user.email}\n`);
    });
};

const store = (user) => {
    users.push(user);
    console.log(`[SUKSES] Data ${user.nama} ditambahkan!`);
};

const destroy = (index) => {
    if (index >= 0 && index < users.length) {
        const deletedUser = users.splice(index, 1)[0];
        console.log(`[SUKSES] Data ${deletedUser.nama} dihapus!`);
    } else {
        console.log("[GAGAL] Indeks tidak valid!");
    }
};

export { index, store, destroy };
