"use client";
import React from "react";

const AddToCart = () => {
  return (
    <div>
      <button
        onClick={() => {
          console.log("Button clicked!");
        }}
      >
        Add to cart
      </button>
    </div>
  );
};

export default AddToCart;
