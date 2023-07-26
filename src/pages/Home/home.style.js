import { styled } from "styled-components";

import { breakpoints } from "../../constants/constants";
import banner from "../../assets/img-princ.png";
import bannerMobile from "../../assets/img-princ-mobile.png";

export const headerContent = styled("header")`
  position: relative;
  width: 100%;
  height: 285px;
  display: grid;
  grid-template-rows: 3fr auto;
  padding: 12px;
  background-image: url(${banner});
  
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
  @media only screen and (max-width: ${breakpoints.md} ) {
    background-image: url(${bannerMobile});
    height: 314.92034912109375px;
  }

  img {
    position: relative;
    height: 33px;
    margin-left: 68px;
    @media only screen and (max-width: ${breakpoints.md}) {
      margin-left: 4px;
    }
    @media (min-width: ${breakpoints.md}) and (max-width: ${breakpoints.xl}) {
    margin-left: 56px;
  }
  }
`;

export const titleCategory = styled("h1")`
  color: #fff;
  font-size: 2.5rem;
  font-style: normal;
  font-weight: 200;
  line-height: normal;
  font-family: Prata;
  text-align: right;
  margin-right: 118px;
  @media only screen and (max-width: ${breakpoints.md}) {
    text-align: left;
    margin-left: 4px;
    margin-right: 0;
    font-size: 57px;
  }
  @media (min-width: ${breakpoints.md}) and (max-width: ${breakpoints.xl}) {
    margin-right: 57px;
  }
`;

export const contentMain = styled("main")`
  display: grid;
  grid-template-rows: auto;
  margin: 0 14.313rem;
  @media only screen and (max-width: ${breakpoints.md}) {
    margin: 0 16px;
  }
  @media (min-width: ${breakpoints.md}) and (max-width: ${breakpoints.xl}) {
    margin: 0 56px;
  }
  @media screen and (min-width: ${breakpoints.xxl}) {
    margin: 0 34.313rem;
  }
`;

export const titleSession = styled("div")`
  padding: 27px 0 33px 0;
  display: flex;
  align-items: flex-start;
  flex-direction: column;
  h3 {
    color: #313131;
    font-size: 1.3rem;
    font-style: normal;
    font-weight: 700;
    line-height: normal;

    margin: 0;
  }
  span {
    color: #313131;
    font-size: 0.85rem;
    font-style: normal;
    font-weight: 400;
    line-height: normal;

    display: block;
  }
`;

export const dataListCard = styled("div")`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  grid-template-rows: auto;
  gap: 16px;
  margin-bottom: 12px;
  @media screen and (max-width: ${breakpoints.sm}) {
    grid-template-columns: repeat(2, 1fr);
  }
  @media (min-width: ${breakpoints.sm}) and (max-width: ${breakpoints.lg}) {
    grid-template-columns: repeat(3, 1fr);
  }
`;
