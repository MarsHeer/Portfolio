import React, { useEffect, useState } from "react";
import styles from "../styles/Desktop.module.css";

function Desk() {
  useEffect(() => {}, []);

  return (
    <div id={styles.bg}>
      <div id={styles.transition}>
        <div id={styles.innerTransition}></div>
      </div>
    </div>
  );
}

export default Desk;
