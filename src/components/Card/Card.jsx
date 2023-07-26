import React from "react";
import { formatCurrent } from "../../utils/format-number";
import * as S from "./card.style";
export default function Card({ id, imageUrl, name, values }) {
  return (
    <S.card>
      <S.linkRouter to={`/product/${id}`}>
        <S.imageContent>
          <img src={imageUrl} alt="Imagem do produto" />
        </S.imageContent>
        <S.infoProductContent>
          <p>{name}</p>
          <S.contentAboutValues>
            R$ {formatCurrent(values[0]?.value)}
            <span className="badge">.99</span>
          <span className="subValues">
            {values[1]?.quantity}X de R$ {formatCurrent(values[1]?.value)}
          </span>
          </S.contentAboutValues>
        </S.infoProductContent>
      </S.linkRouter>
    </S.card>
  );
}
