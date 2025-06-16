const products = [
  { name: "Laptop", price: 800, category: "electronics" },
  { name: "Headphones", price: 100, category: "electronics" },
  { name: "JavaScript Book", price: 30, category: "books" },
  { name: "Notebook", price: 10, category: "books" },
];

function renderProducts() {
  const filter = document.getElementById("filter").value;
  const sort = document.getElementById("sort").value;

  let filtered = filter === "all" ? products : products.filter(p => p.category === filter);

  if (sort === "name") {
    filtered.sort((a, b) => a.name.localeCompare(b.name));
  } else if (sort === "price") {
    filtered.sort((a, b) => a.price - b.price);
  }

  const container = document.getElementById("productList");
  container.innerHTML = "";
  filtered.forEach(product => {
    const div = document.createElement("div");
    div.innerHTML = `<strong>${product.name}</strong><br>Price: $${product.price}`;
    container.appendChild(div);
  });
}

document.addEventListener("DOMContentLoaded", renderProducts);
