import React from "react";
import { Helmet } from "react-helmet";

export default function Product() {
  console.log("welcome to Product");
  return (
    <>
      <Helmet>
        <meta charSet="utf-8" />
        <title>Product | Store Bodega</title>
      </Helmet>
      <main>
        <header>titulo do produto</header>
        <section>
          <article></article>
        </section>
        <footer>
          <div>Produtos relacionados</div>
          <div>card dos produtos</div>
        </footer>
      </main>
    </>
  );
}
