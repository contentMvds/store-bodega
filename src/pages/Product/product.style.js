import { styled } from "styled-components";
import { breakpoints } from "../../constants/constants";

export const contentSpinner = styled("div")`
  text-align: center;
`;

export const main = styled("main")`
  margin: 0 14.313rem;
  text-align: left;
  @media only screen and (max-width: ${breakpoints.md}) {
    margin: 0 1.25rem;
  }
  @media (min-width: ${breakpoints.md}) and (max-width: ${breakpoints.xl}) {
    margin: 0 3.5rem;
  }
  @media screen and (min-width: ${breakpoints.xxl}) {
    margin: 0 34.313rem;
  }
`;

export const titleProduct = styled("h3")`
  color: #313131;
  /* font-family: Poppins; */
  font-size: 32px;
  font-style: normal;
  font-weight: 500;
  line-height: 105%; /* 33.6px */
  /* margin: 0; */
  /* margin-top: 32px;
  margin-bottom: 24px; */
  @media only screen and (max-width: ${breakpoints.md}) {
    display: none;
  }
`;
export const titleProductMobile = styled("h3")`
  font-size: 19px;
  font-style: normal;
  font-weight: 500;
  line-height: 105%; /* 33.6px */
  margin: 0;
  @media only screen and (min-width: ${breakpoints.md}) {
    display: none;
  }
`;

export const detailsProduct = styled("article")`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  @media only screen and (max-width: ${breakpoints.md}) {
    grid-template-columns: 1fr;
  }
`;

export const imageContent = styled("div")`
  @media only screen and (max-width: ${breakpoints.md}) {
    text-align: center;
    margin-top: 68px;
  }
  @media screen and (min-width: ${breakpoints.xxl}) {
    text-align: center;
  }
  img {
    height: 18.25rem;
    width: 24.125rem;
    @media only screen and (max-width: ${breakpoints.md}) {
      width: 18.25rem;
      height: 15.776rem;
    }
    @media screen and (min-width: ${breakpoints.xxl}) {
      width: 24.5rem;
      height: 22.026rem;
    }
  }
`;

export const contentInfoProduct = styled("div")`
  display: flex;
  flex-direction: column;
`;
export const valueInCash = styled("div")`
  margin-top: 40px;
  @media only screen and (max-width: ${breakpoints.md}) {
    margin-top: 5px;
  }
  .value {
    color: #313131;
    font-size: 20px;
    font-style: normal;
    font-weight: 700;
    line-height: normal;
    @media only screen and (max-width: ${breakpoints.md}) {
      font-size: 18px;
    }
  }
  .inCash {
    color: #313131;
    font-size: 16px;
    /* font-style: normal; */
    font-weight: 500;
    line-height: normal;

    margin-left: 4px;
  }
`;
export const valuesInstallments = styled("div")`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  span {
    display: block;
    color: #313131;
    font-size: 14px;
    /* font-style: normal; */
    font-weight: 500;
    line-height: normal;
  }
`;

export const buttonBuy = styled("button")`
  font-weight: 500;
  font-size: 1.2rem;
  display: inline-block;
  min-width: 289px;
  height: 39px;
  margin-top: 35px;
  flex-shrink: 0;
  background-color: #158a8a;
  border-radius: 4.138px;
  border: none;
  color: #fff;
  &:hover {
    background-color: #099a9a;
  }
`;

export const titleCategory = styled("div")`
  margin-top: 34px;
  h4 {
    color: #313131;
    /* font-family: Poppins; */
    font-size: 18px;
    font-style: normal;
    font-weight: 700;
    line-height: normal;
  }
`;
export const dataListCard = styled("div")`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  grid-template-rows: auto;
  gap: 16px;
  margin-top: 50px;
  margin-bottom: 12px;
  @media screen and (max-width: ${breakpoints.sm}) {
    grid-template-columns: repeat(2, 1fr);
  }
  @media (min-width: ${breakpoints.sm}) and (max-width: ${breakpoints.lg}) {
    grid-template-columns: repeat(3, 1fr);
  }
`;
