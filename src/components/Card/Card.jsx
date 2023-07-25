import React from "react";

export default function Card({ id, imageUrl, name, values }) {
  console.log("welcome to card");
  return (
    <div
    key={id}
      style={{
        minHeight: "185.87px",
        width: "161.22px",
        borderRadius: "11px",
        boxShadow:
          "0px 4.650578022003174px 6.743337631225586px 0px rgba(0, 0, 0, 0.02), 0px 12.858253479003906px 18.644466400146484px 0px rgba(0, 0, 0, 0.03), 0px 30.957719802856445px 44.888694763183594px 0px rgba(0, 0, 0, 0.03), 0px 102.68897247314453px 148.89901733398438px 0px rgba(0, 0, 0, 0.05)",
        padding: "3px 9px",
        display: "grid",
        gridTemplateRows: "2fr 1fr 1fr",
      }}
    >
      <div
        style={{
          width: "121.173px",
          height: "113.985px",
          alignItems:'center',
          alignContent: 'center',
          display: 'flex'
        }}
      >
        <img src={imageUrl} alt=""  height={113.985} width={121.173}/>
      </div>
      <div
        style={{
          textOverflow: "ellipsis",
          whiteSpace: "nowrap",
        }}
      >
        {name}
      </div>
      <div>
        <p>R$ {values[0]?.value} <span id='bagde'>.99</span></p>
        <span> {values[1]?.quantity}X R$ {values[1]?.value}</span>
      </div>
    </div>
  );
}
