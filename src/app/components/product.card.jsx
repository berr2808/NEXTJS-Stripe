import React from "react";

const Product = (props) => {
  const { data, action } = props;
  return (
    <div className="bg-slate-800 text-center p-4 rounded-md text-white">
      <h2 className="font-bold text-lg">{data.name}</h2>
      <p className="text-3xl font-bold">${data.price / 100}</p>
      <img src={data.image} alt="" className="w-full" />
      <button
        className="bg-green-500 text-white px-4 py-2 rounded-md mt-4 w-full"
        onClick={() => action(data)}
      >
        Pagar
      </button>
    </div>
  );
};

export default Product;
