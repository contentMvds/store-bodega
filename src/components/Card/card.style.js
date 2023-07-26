import { styled } from "styled-components";
import { Link } from "react-router-dom";

export const card = styled("div")`
  min-height: 11.617rem;
  min-width: 10.076rem;
  border-radius: 11px;
  display: flex;
  flex-direction: column;
  flex-shrink: 0;
  background-color: #fff;
  &:hover {
    box-shadow: 0 8px 16px 0 rgba(0, 0, 0, 0.2);
  }
  box-shadow: 0px 4.650578022003174px 6.743337631225586px 0px
      rgba(0, 0, 0, 0.02),
    0px 12.858253479003906px 18.644466400146484px 0px rgba(0, 0, 0, 0.03),
    0px 30.957719802856445px 44.888694763183594px 0px rgba(0, 0, 0, 0.03),
    0px 102.68897247314453px 148.89901733398438px 0px rgba(0, 0, 0, 0.05);
`;

export const linkRouter = styled(Link)`
  text-decoration: none;
  color: #313131;
  &:visited {
    text-decoration: none;
  }
  &:hover {
    text-decoration: none;
  }
  &:active {
    text-decoration: none;
  }
  &:focus {
    text-decoration: none;
  }
  &:active {
    text-decoration: none;
  }
`;

export const imageContent = styled("div")`
  display: flex;
  flex-wrap: nowrap;
  justify-content: center;
  margin-top: 6px;
  img {
    height: 7.124rem;
    width: 7.573rem;
  }
`;
export const infoProductContent = styled("div")`
  padding: 12px;
  p {
    width: 80%;
    overflow: hidden;
    text-overflow: clip;
    white-space: nowrap;
    margin: 0;
    margin-bottom: 8px;
    font-weight: 700;
    color: #313131;
    line-height: normal;
  }
`;

export const contentAboutValues = styled("div")`
  position: relative;
  text-align: start;
  line-height: normal;
  color: #313131;
  /* font-family: Poppins; */
  font-size: 14px;
  font-style: normal;
  font-weight: 500;
  line-height: normal;
  .badge {
    font-size: 8px;
    position: absolute;
    color: #313131;
    font-weight: 400;
    /* font-family: Poppins; */
  }
  .subValues {
    display: block;
    color: #8A8A8A;
    /* font-family: Poppins; */
    font-size: 11px;
    font-style: normal;
    font-weight: 400;
    line-height: normal;
  }
`;
