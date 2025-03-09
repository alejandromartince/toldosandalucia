import React from "react";
import "./Products.css";

//Importamos los componentes
import ToldosProductos from "../../components/ToldosProductos";

const Products = () => {
  return (
    <section className="products-container" id="products">
      <div className="right-section">
        <ToldosProductos />
      </div>
    </section>
  );
};

export default Products;
