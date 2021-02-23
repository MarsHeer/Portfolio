import React, { useEffect, useState } from "react";
import styles from "../styles/Skills.module.css";
import AI from "../files/png/ai.png";
import XD from "../files/png/xd.png";
import ID from "../files/png/id.png";
import OG from "../files/png/origami.jpg";
import SK from "../files/png/spark.png";
import PS from "../files/png/ps.png";
import FG from "../files/png/figma.png";
import SH from "../files/png/sketch.png";
import JS from "../files/png/js.png";
import RJ from "../files/svg/react.svg";
import MD from "../files/png/mariadb.png";

function Skills({ closeSkills }) {
  var pos1 = 0,
    pos2 = 0,
    pos3 = 0,
    pos4 = 0;

  useEffect(() => {
    let navbar = document.getElementById("nav");
    navbar.onmousedown = handleMouseDown;
  }, []);

  function handleMouseDown(e) {
    e = e || window.event;
    e.preventDefault();
    pos3 = e.clientX;
    pos4 = e.clientY;
    document.onmouseup = closeDragElement;
    document.onmousemove = elementDrag;
  }

  function elementDrag(e) {
    e = e || window.event;
    e.preventDefault();
    let elmnt = document.querySelector("#win");
    pos1 = pos3 - e.clientX;
    pos2 = pos4 - e.clientY;
    pos3 = e.clientX;
    pos4 = e.clientY;
    elmnt.style.top = elmnt.offsetTop - pos2 + "px";
    elmnt.style.left = elmnt.offsetLeft - pos1 + "px";
  }

  function closeDragElement() {
    document.onmouseup = null;
    document.onmousemove = null;
  }

  return (
    <div id="win" class={styles.window}>
      <div id="nav" class={styles.navbar}>
        <div onClick={() => closeSkills()} class={styles.close}></div>
        <div
          onClick={() => {
            document.querySelector("#win").style.width = "99vw";
            document.querySelector("#win").style.height = "93vh";
            document.querySelector("#win").style.top = "35px";
            document.querySelector("#win").style.left = "5px";
          }}
          class={styles.maximize}
        ></div>
        Skills
      </div>

      <div id={styles.folderHolder}>
        <div>
          <div class={styles.gridcontainer}>
            <div class={styles.Header}>19 items, 321MB available</div>
            <div class={styles.Title}>Skill</div>
            <div class={styles.Exp}>Experience</div>
            <div class={styles.Skill}>
              <img class={styles.img} src={AI} /> Adobe Illustrator
            </div>
            <div class={styles.Time}>6 years</div>
            <div class={styles.Skill2}>
              <img class={styles.img} src={XD} />
              Adobe XD
            </div>
            <div class={styles.Time2}>5 years</div>
            <div class={styles.Skill3}>
              <img class={styles.img} src={ID} />
              Adobe InDesign
            </div>
            <div class={styles.Time3}>3 years</div>
            <div class={styles.Skill4}>
              <img class={styles.img} src={OG} /> Facebook Origami
            </div>
            <div class={styles.Time4}>3 years</div>
            <div class={styles.Skill5}>
              <img class={styles.img} src={SK} /> Facebook Spark AR
            </div>
            <div class={styles.Time5}>3 years</div>
            <div class={styles.Skill6}>
              {" "}
              <img class={styles.img} src={PS} /> Adobe Photoshop
            </div>
            <div class={styles.Time6}>2 years</div>
            <div class={styles.Skill7}>
              {" "}
              <img class={styles.img} src={FG} /> Figma
            </div>
            <div class={styles.Time7}>1 year</div>
            <div class={styles.Skill8}>
              <img class={styles.img} src={SH} /> Sketch
            </div>
            <div class={styles.Time8}>1 year</div>
            <div class={styles.Skill9}>
              <img class={styles.img} src={JS} /> HTML & CSS & JS
            </div>
            <div class={styles.Time9}>1 year</div>
            <div class={styles.Skill10}>
              <img class={styles.img} src={RJ} /> NodeJS, ReactJS & NextJS
            </div>
            <div class={styles.Time10}>{"< 1 year"}</div>
            <div class={styles.Skill11}>
              <img class={styles.img} src={MD} /> MySQL & MariaDB
            </div>
            <div class={styles.Time11}>{"< 1 year"}</div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Skills;
