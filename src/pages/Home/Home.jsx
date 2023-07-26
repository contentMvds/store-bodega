import React, { useEffect, useState } from "react";
import { Helmet } from "react-helmet";

import logo from "../../assets/Logo.png";

import Card from "../../components/Card/Card";
import Spinner from "../../components/Spinner/Spinner";
import Notification from "../../components/Notification/Notification";

import * as S from "./home.style";

export default function Home() {
  const [products, setProducts] = useState([]);
  const [error, setError] = useState(false);

  const [showNotification, setShowNotification] = useState(false);
  const [message, setMessage] = useState("");

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const response = await fetch(`/products`, {
          method: "GET",
          mode: "cors",
          headers: {
            accept: "application/json",
          },
        });
        if (!response.ok) {
          throw new Error(`Error! status: ${response.status}`);
        }
        const data = await response.json();
        setProducts(data);
      } catch (error) {
        setError(true);
        setShowNotification(true);
        setMessage(
          "Erro ao requisitar informações dos produtos, se o problema persistir contate o administrador"
        );
      }
    };

    fetchProducts();
  }, []);

  if (products.length === 0 && !showNotification) {
    return (
      <div style={{ margin: "10rem auto" }}>
        Loading ... <Spinner />
      </div>
    );
  }

  return (
    <>
      <Helmet>
        <meta charSet="utf-8" />
        <title>Home | Store Bodega</title>
      </Helmet>
      <S.headerContent>
        <img src={logo} alt="Logo da store Budega" />
        <S.titleCategory>Category</S.titleCategory>
      </S.headerContent>
      <S.contentMain>
        <section>
          <S.titleSession>
            <h3>Ofertas especiais</h3>
            <span>Os melhores preços</span>
          </S.titleSession>
          {products.length > 0 ? (
            <S.dataListCard>
              {products.map((items) => {
                return (
                  <Card
                    key={items.id}
                    id={items.id}
                    imageUrl={items.image}
                    name={items.name}
                    values={items.installments}
                  />
                );
              })}
            </S.dataListCard>
          ) : (
            <h1>Não foi encontrado nenhum item</h1>
          )}
        </section>
      </S.contentMain>
      {error && <Notification show={showNotification} message={message} />}
    </>
  );
}
