import React, { useEffect, useState } from "react";
import styles from "../styles/Desk.module.css";
import computer from "../files/svg/computer.svg";

function Desk({ callback }) {
  const [width, setWidth] = useState();
  const [height, setHeight] = useState();
  const [transition, setTransition] = useState(false);
  useEffect(() => {
    window.onresize = handleResize;

    handleResize();

    let text = "Loading marcOS...";
    let text2 = "System ready...";
    let text3 = "Press any key to boot";
    let array = Array.from(text);
    let array2 = Array.from(text2);
    let array3 = Array.from(text3);

    Object.keys(array).map((key) => {
      setTimeout(
        () => (document.getElementById("text").innerHTML += array[key]),
        key * 200
      );
    });

    setTimeout(() => {
      Object.keys(array2).map((key) => {
        setTimeout(
          () => (document.getElementById("text2").innerHTML += array2[key]),
          key * 200
        );
      });
    }, 3500);

    setTimeout(() => {
      Object.keys(array3).map((key) => {
        setTimeout(
          () => (document.getElementById("text3").innerHTML += array3[key]),
          key * 200
        );
      });
    }, 7000);

    setTimeout(() => {
      window.addEventListener("keypress", () => setTransition(true));
      window.addEventListener("touchstart", () => setTransition(true));
      window.addEventListener("mousedown", () => setTransition(true));
    }, 10000);
  }, []);

  useEffect(() => {
    transition ? setTimeout(() => callback(), 1500) : <></>;
  }, [transition]);

  function handleResize() {
    let div = document.getElementById("computer");
    setWidth(div.clientWidth);
    setHeight(div.clientHeight);
  }

  let computerStyle = {
    zIndex: 1,
    overflow: "hidden",
    position: "absolute",
    bottom: "10px",
    left: 0,
    right: 0,
    margin: "auto",
    width: "50vw",
    minWidth: "500px",
    height: "40vw",
    minHeight: "425px",
    backgroundImage: "url(" + computer + ")",
    backgroundSize: "contain",
    backgroundRepeat: "no-repeat",
    backgroundPosition: "bottom center",
  };

  let pStyle = {
    fontSize: width / 70 + "px",
    position: "absolute",
    top: height / 4.5 + "px",
    left: width / 3.2 + "px",
    width: width / 2.5 + "px",
    whitespace: "wrap",
  };

  let pStyle2 = {
    fontSize: width / 70 + "px",
    position: "absolute",
    top: height / 3.7 + "px",
    left: width / 3.2 + "px",
    width: width / 2.5 + "px",
    whitespace: "wrap",
  };

  let pStyle3 = {
    fontSize: width / 70 + "px",
    position: "absolute",
    top: height / 3.2 + "px",
    left: width / 3.2 + "px",
    width: width / 2.7 + "px",
    whitespace: "wrap",
  };

  return (
    <div id={styles.bg}>
      {transition ? (
        <>
          <div id={styles.transition}>
            <div id={styles.innerTransition}></div>
          </div>
        </>
      ) : (
        <></>
      )}
      <div class={styles.computer} id="computer" style={computerStyle}>
        <p id="text" style={pStyle}></p>
        <p id="text2" style={pStyle2}></p>
        <p id="text3" style={pStyle3}></p>
      </div>
    </div>
  );
}

export default Desk;
