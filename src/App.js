import logo from "./logo.svg";
import React, { useState } from "react";
import "./App.css";

function App() {
  const [color1, setColor1] = useState("blue");
  const [color2, setColor2] = useState("blue");
  const [color3, setColor3] = useState("blue");
  const [color4, setColor4] = useState("blue");
  const [color5, setColor5] = useState("blue");
  const [color6, setColor6] = useState("blue");
  const [color7, setColor7] = useState("blue");
  const [color8, setColor8] = useState("blue");
  const [color9, setColor9] = useState("blue");
  const [color10, setColor10] = useState("blue");
  const [color11, setColor11] = useState("blue");
  const [color12, setColor12] = useState("blue");
  const [color13, setColor13] = useState("blue");
  const [color14, setColor14] = useState("blue");
  const [color15, setColor15] = useState("blue");
  const [color16, setColor16] = useState("blue");
  return (
    <div className="App">
      <header className="App-header">
        <div>
          <div
            style={{
              height: "100px",
              width: "100px",
              background: color1,
              display: "inline-block",
              margin: "10px",
            }}
            onClick={() => {
              if (color1 === "blue") setColor1("red");
              if (color15 === "red") setColor15("blue");
              if (color3 === "red") setColor3("blue");
            }}
          ></div>
          <div
            style={{
              height: "100px",
              width: "100px",
              background: color2,
              display: "inline-block",
              margin: "10px",
            }}
            onClick={() => {
              if (color2 === "blue") setColor2("red");
              if (color16 === "red") setColor16("blue");
              if (color4 === "red") setColor4("blue");
            }}
          ></div>
          <div
            style={{
              height: "100px",
              width: "100px",
              background: color3,
              display: "inline-block",
              margin: "10px",
            }}
            onClick={() => {
              if (color3 === "blue") setColor3("red");
              if (color1 === "red") setColor1("blue");
              if (color5 === "red") setColor5("blue");
            }}
          ></div>
          <div
            style={{
              height: "100px",
              width: "100px",
              background: color4,
              display: "inline-block",
              margin: "10px",
            }}
            onClick={() => {
              if (color4 === "blue") setColor4("red");
              if (color2 === "red") setColor2("blue");
              if (color6 === "red") setColor6("blue");
            }}
          ></div>
        </div>
        <div>
          <div
            style={{
              height: "100px",
              width: "100px",
              background: color5,
              display: "inline-block",
              margin: "10px",
            }}
            onClick={() => {
              if (color5 === "blue") setColor5("red");
              if (color3 === "red") setColor3("blue");
              if (color7 === "red") setColor7("blue");
            }}
          ></div>
          <div
            style={{
              height: "100px",
              width: "100px",
              background: color6,
              display: "inline-block",
              margin: "10px",
            }}
            onClick={() => {
              if (color6 === "blue") setColor6("red");
              if (color4 === "red") setColor4("blue");
              if (color8 === "red") setColor8("blue");
            }}
          ></div>
          <div
            style={{
              height: "100px",
              width: "100px",
              background: color7,
              display: "inline-block",
              margin: "10px",
            }}
            onClick={() => {
              if (color7 === "blue") setColor7("red");
              if (color5 === "red") setColor5("blue");
              if (color9 === "red") setColor9("blue");
            }}
          ></div>
          <div
            style={{
              height: "100px",
              width: "100px",
              background: color8,
              display: "inline-block",
              margin: "10px",
            }}
            onClick={() => {
              if (color8 === "blue") setColor8("red");
              if (color6 === "red") setColor6("blue");
              if (color10 === "red") setColor10("blue");
            }}
          ></div>
        </div>
        <div>
          <div
            style={{
              height: "100px",
              width: "100px",
              background: color9,
              display: "inline-block",
              margin: "10px",
            }}
            onClick={() => {
              if (color9 === "blue") setColor9("red");
              if (color7 === "red") setColor7("blue");
              if (color11 === "red") setColor11("blue");
            }}
          ></div>
          <div
            style={{
              height: "100px",
              width: "100px",
              background: color10,
              display: "inline-block",
              margin: "10px",
            }}
            onClick={() => {
              if (color10 === "blue") setColor10("red");
              if (color8 === "red") setColor8("blue");
              if (color12 === "red") setColor12("blue");
            }}
          ></div>
          <div
            style={{
              height: "100px",
              width: "100px",
              background: color11,
              display: "inline-block",
              margin: "10px",
            }}
            onClick={() => {
              if (color11 === "blue") setColor11("red");
              if (color9 === "red") setColor9("blue");
              if (color13 === "red") setColor13("blue");
            }}
          ></div>
          <div
            style={{
              height: "100px",
              width: "100px",
              background: color12,
              display: "inline-block",
              margin: "10px",
            }}
            onClick={() => {
              if (color12 === "blue") setColor12("red");
              if (color10 === "red") setColor10("blue");
              if (color14 === "red") setColor14("blue");
            }}
          ></div>
        </div>
        <div>
          <div
            style={{
              height: "100px",
              width: "100px",
              background: color13,
              display: "inline-block",
              margin: "10px",
            }}
            onClick={() => {
              if (color13 === "blue") setColor13("red");
              if (color11 === "red") setColor11("blue");
              if (color15 === "red") setColor15("blue");
            }}
          ></div>
          <div
            style={{
              height: "100px",
              width: "100px",
              background: color14,
              display: "inline-block",
              margin: "10px",
            }}
            onClick={() => {
              if (color14 === "blue") setColor14("red");
              if (color12 === "red") setColor12("blue");
              if (color16 === "red") setColor16("blue");
            }}
          ></div>
          <div
            style={{
              height: "100px",
              width: "100px",
              background: color15,
              display: "inline-block",
              margin: "10px",
            }}
            onClick={() => {
              if (color15 === "blue") setColor15("red");
              if (color13 === "red") setColor13("blue");
              if (color1 === "red") setColor1("blue");
            }}
          ></div>
          <div
            style={{
              height: "100px",
              width: "100px",
              background: color16,
              display: "inline-block",
              margin: "10px",
            }}
            onClick={() => {
              if (color16 === "blue") setColor16("red");
              if (color14 === "red") setColor14("blue");
              if (color2 === "red") setColor2("blue");
            }}
          ></div>
        </div>
      </header>
    </div>
  );
}

export default App;
