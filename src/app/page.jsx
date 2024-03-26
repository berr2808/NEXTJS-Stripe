"use client";
import Product from "./components/product.card";
import { products } from "./products";

function App() {
  const handlePay = async (product) => {
    const res = await fetch("/api/checkout", {
      method: "POST",
      body: JSON.stringify(product),
      headers: {
        "Content-Type": "application/json",
      },
    });
    const session = await res.json();
    window.location = session.url;
  };

  return (
    <div className="px-44">
      <h1 className="text-3xl font-bold text-center my-10">Productos</h1>

      <div className="grid grid-cols-3 gap-10">
        {products.map((product, i) => (
          <Product key={i} data={product} action={handlePay} />
        ))}
      </div>
    </div>
  );
}

export default App;

