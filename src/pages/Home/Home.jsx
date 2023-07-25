import React from "react";
import { Helmet } from "react-helmet";
import logo from "../../assets/Logo.svg";
import banner from "../../assets/img-princ.svg";
import Card from '../../components/Card/Card';

const mock = {
  id: "1",
  name: "Bota Western Preta Couro Cano Médio",
  price: 44999,
  image: "https://usaflextatix.vtexassets.com/arquivos/ids/490685-1600-auto",
  category: "botas",
  installments: [
    {
      quantity: 1,
      value: 44999,
    },
    {
      quantity: 6,
      value: 7498,
    },
  ],
};

export default function Home() {
  console.log("welcome to Home");
  return (
    <>
      <Helmet>
        <meta charSet="utf-8" />
        <title>Home | Store Bodega</title>
      </Helmet>
      <div>
        <header
          style={{
            position: "relative",
            height: "285px",
            width: "100%",
            display: "grid",
            gridTemplateRows: "3fr auto",
            padding: "12px",
          }}
        >
          <img
            src={banner}
            alt={`Imagem banner for section`}
            style={{
              // height: '246px',
              width: "100%",
              position: "absolute",
              zIndex: 0,
            }}
          />
          <img
            src={logo}
            alt="Logo da store Budega"
            style={{
              zIndex: 1,
              position: "relative",
              height: "33px",
              marginLeft: "68px",
            }}
          />
          <div
            style={{
              position: "relative",
              zIndex: 2,
              color: "#fff",
              textAlign: "right",
              marginRight: "118px",
            }}
          >
            {" "}
            <h1>Category</h1>
          </div>
        </header>
        <main style={{
         display:'grid',
         gridTemplateRows: '1fr 1fr', 
         margin: '0 229px'
        }}>
          <section>
            <div style={{
              padding: '27px 0 33px 0'
            }}>
              <h3 style={{margin: '0'}}>Ofertas especiais</h3>
              <p style={{margin: '0'}}>Os melhores preços</p>
            </div>
            <article><Card id={mock.id} imageUrl={mock.image} name={mock.name} values={mock.installments} /></article>
          </section>
        </main>
      </div>
    </>
  );
}
