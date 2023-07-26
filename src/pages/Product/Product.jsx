import React, { useEffect, useState } from "react";
import { Helmet } from "react-helmet";
import { useParams, useNavigate } from "react-router-dom";

import Card from "../../components/Card/Card";
import Spinner from "../../components/Spinner/Spinner";
import Notification from "../../components/Notification/Notification";

import * as S from "./product.style";

import { formatCurrent } from "../../utils/format-number";

export default function Product() {
  const [producstCategory, setProducstCategory] = useState([]);
  const [category, setCategory] = useState(null);
  const [product, setProduct] = useState(null);
  const [showNotification, setShowNotification] = useState(false);
  const [message, setMessage] = useState("");
  const navigate = useNavigate();

  const { id } = useParams();
  const fetchGetProduct = async (id) => {
    try {
      const rest = await fetch(`/products/${id}`, {
        method: "GET",
        headers: {
          accept: "application/json",
        },
      });
      if (!rest.ok) {
        throw new Error(`Error! status: ${rest.status}`);
      }
      const result = await rest.json();
      setProduct(result);
      if (result?.category) {
        setCategory((prev) => {
          if (prev !== result.category) return result.category;
        });
      }
    } catch (err) {
      setShowNotification(true);
      setMessage(
        "Erro ao requisitar informações do produto, se o problema persistir contate o administrador"
      );
    }
  };
  const fetchGetProductsCategory = async (category) => {
    try {
      const rest = await fetch(`/products?category=${category}`, {
        method: "GET",
        mode: "cors",
        headers: {
          accept: "application/json",
        },
      });
      if (!rest.ok) {
        throw new Error(`Error! status: ${rest.status}`);
      }
      const result = await rest.json();
      setProducstCategory(result);
    } catch (err) {
      setShowNotification(true);
      setMessage(
        "Erro ao requisitar produtos da mesma categoria, se o problema persistir contate o administrador"
      );
    }
  };
  const handleClick = () => {
    navigate(`/`);
  }

  useEffect(() => {
    fetchGetProduct(id);
  }, [id]);

  useEffect(() => {
    if (category) {
      fetchGetProductsCategory(category);
    }
  }, [category]);

  if (!product)
    return (
      <S.contentSpinner>
        Loading ... <Spinner />
      </S.contentSpinner>
    );
  return (
    <>
      <Helmet>
        <meta charSet="utf-8" />
        <title>Product | Store Bodega</title>
      </Helmet>
      <S.main>
        <S.titleProduct>{product.name}</S.titleProduct>
        <S.detailsProduct>
          <S.imageContent>
            <img src={product.image} alt="Imagem do produto" />
          </S.imageContent>
          <S.contentInfoProduct>
            <S.titleProductMobile>{product.name}</S.titleProductMobile>
            <S.valueInCash>
              <span className="value">R$ {formatCurrent(product.price)}</span>
              <span className="inCash">á vista</span>
            </S.valueInCash>
            <S.valuesInstallments>
              <span>
                {product.installments[1].quantity}X de R${" "}
                {formatCurrent(product.installments[0].value)}
              </span>
              <span>sem juros</span>
            </S.valuesInstallments>
            <S.buttonBuy onClick={handleClick}>Comprar</S.buttonBuy>
          </S.contentInfoProduct>
        </S.detailsProduct>
        <S.titleCategory>
          <h4>Produtos relacionados</h4>

          {producstCategory.length > 0 ? (
            <S.dataListCard>
              {producstCategory.map((items) => {
                if (items.id === id) {
                  return null;
                }
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
            <S.contentSpinner>
             Loading... <Spinner />
            </S.contentSpinner>
          )}
        </S.titleCategory>
      </S.main>
      <Notification show={showNotification} message={message} />
    </>
  );
}
