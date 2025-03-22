let products = [
    { id: 1, name: "Produk A", price: 10000 },
    { id: 2, name: "Produk B", price: 20000 },
    { id: 3, name: "Produk C", price: 30000 },
    { id: 4, name: "Produk D", price: 40000 },
    { id: 5, name: "Produk E", price: 50000 }
];

function addProduct(newProduct) {
    products.push(newProduct);
    displayProducts();
}

function removeProduct(productId) {
    products = products.filter(product => product.id !== productId);
    displayProducts();
}

function displayProducts() {
    const productList = document.getElementById("productList");
    productList.innerHTML = ""; // Membersihkan daftar produk sebelumnya
    products.forEach(product => {
        const productItem = document.createElement("div");
        productItem.textContent = `ID: ${product.id}, Name: ${product.name}, Price: ${product.price}`;
        productList.appendChild(productItem);
    });
}

// Event Listener untuk menambahkan produk
document.getElementById("addProductButton").addEventListener("click", () => {
    const newProduct = {
        id: products.length + 1,
        name: document.getElementById("productName").value,
        price: parseFloat(document.getElementById("productPrice").value)
    };
    addProduct(newProduct);
});

// Event Listener untuk menghapus produk
document.getElementById("removeProductButton").addEventListener("click", () => {
    const productId = parseInt(document.getElementById("productIdToRemove").value);
    removeProduct(productId);
});