import React, { useEffect, useState } from "react";
import styles from "../styles/Icons.module.css";
import AboutImg from "../files/svg/about.svg";
import WorkImg from "../files/svg/folder.svg";
import SkillsImg from "../files/svg/skills.svg";

function Icons({ aboutCb, workCb, skillsCb }) {
  useEffect(() => {}, []);

  return (
    <div id={styles.icons}>
      <div onClick={() => aboutCb()} class={styles.icon}>
        <img class={styles.img} src={AboutImg} />
        <p class={styles.iconText}>About </p>
      </div>
      <div onClick={() => workCb()} class={styles.icon}>
        <img class={styles.img} src={WorkImg} />
        <p class={styles.iconText}>My Work</p>
      </div>
      <div onClick={() => skillsCb()} class={styles.icon}>
        <img class={styles.img} src={SkillsImg} />
        <p class={styles.iconText}>Skills</p>
      </div>
    </div>
  );
}

export default Icons;
