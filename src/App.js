import React, { useState, useEffect } from "react";
import "./App.css";

function App() {
  const [clicked, setClicked] = useState([]);
  const pushLogic = (i) => {
    let newArray = [...clicked];
    if(newArray.includes(i))
    {
      return;
    }
    if (newArray.length === 2) {
      newArray.splice(0, 1);
    }
    newArray.push(i);
    setClicked(newArray);
  };
  useEffect(()=>{
    console.log(clicked);
  },[clicked])
  return (
    <div className="App">
      <header className="App-header">
        <div>
          <div
            onClick={() => {
              pushLogic(0);
            }}
            style={{
              height: "100px",
              width: "100px",
              background: clicked.includes(0)?"red":"blue",
              display: "inline-block",
              margin: "10px",
            }}
          />
          <div
          onClick={() => {
            pushLogic(1);
          }}
            style={{
              height: "100px",
              width: "100px",
              background: clicked.includes(1)?"red":"blue",
              display: "inline-block",
              margin: "10px",
            }}
          />
          <div
          onClick={() => {
            pushLogic(2);
          }}
            style={{
              height: "100px",
              width: "100px",
              background: clicked.includes(2)?"red":"blue",
              display: "inline-block",
              margin: "10px",
            }}
          />
          <div
          onClick={() => {
            pushLogic(3);
          }}
            style={{
              height: "100px",
              width: "100px",
              background: clicked.includes(3)?"red":"blue",
              display: "inline-block",
              margin: "10px",
            }}
          />
        </div>
        <div>
          <div
          onClick={() => {
            pushLogic(4);
          }}
            style={{
              height: "100px",
              width: "100px",
              background: clicked.includes(4)?"red":"blue",
              display: "inline-block",
              margin: "10px",
            }}
          />
          <div
          onClick={() => {
            pushLogic(5);
          }}
            style={{
              height: "100px",
              width: "100px",
              background: clicked.includes(5)?"red":"blue",
              display: "inline-block",
              margin: "10px",
            }}
          />
          <div
          onClick={() => {
            pushLogic(6);
          }}
            style={{
              height: "100px",
              width: "100px",
              background: clicked.includes(6)?"red":"blue",
              display: "inline-block",
              margin: "10px",
            }}
          />
          <div
          onClick={() => {
            pushLogic(7);
          }}
            style={{
              height: "100px",
              width: "100px",
              background: clicked.includes(7)?"red":"blue",
              display: "inline-block",
              margin: "10px",
            }}
          />
        </div>
        <div>
          <div
          onClick={() => {
            pushLogic(8);
          }}
            style={{
              height: "100px",
              width: "100px",
              background: clicked.includes(8)?"red":"blue",
              display: "inline-block",
              margin: "10px",
            }}
          />
          <div
          onClick={() => {
            pushLogic(9);
          }}
            style={{
              height: "100px",
              width: "100px",
              background: clicked.includes(9)?"red":"blue",
              display: "inline-block",
              margin: "10px",
            }}
          />
          <div
          onClick={() => {
            pushLogic(10);
          }}
            style={{
              height: "100px",
              width: "100px",
              background: clicked.includes(10)?"red":"blue",
              display: "inline-block",
              margin: "10px",
            }}
          />
          <div
          onClick={() => {
            pushLogic(11);
          }}
            style={{
              height: "100px",
              width: "100px",
              background: clicked.includes(11)?"red":"blue",
              display: "inline-block",
              margin: "10px",
            }}
          />
        </div>
        <div>
          <div
          onClick={() => {
            pushLogic(12);
          }}
            style={{
              height: "100px",
              width: "100px",
              background: clicked.includes(12)?"red":"blue",
              display: "inline-block",
              margin: "10px",
            }}
          />
          <div
          onClick={() => {
            pushLogic(13);
          }}
            style={{
              height: "100px",
              width: "100px",
              background: clicked.includes(13)?"red":"blue",
              display: "inline-block",
              margin: "10px",
            }}
          />
          <div
          onClick={() => {
            pushLogic(14);
          }}
            style={{
              height: "100px",
              width: "100px",
              background: clicked.includes(14)?"red":"blue",
              display: "inline-block",
              margin: "10px",
            }}
          />
          <div
          onClick={() => {
            pushLogic(15);
          }}
            style={{
              height: "100px",
              width: "100px",
              background: clicked.includes(15)?"red":"blue",
              display: "inline-block",
              margin: "10px",
            }}
          />
        </div>
      </header>
    </div>
  );
}

export default App;
