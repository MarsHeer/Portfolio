import React, { useEffect, useState } from "react";
import styles from "../styles/Work.module.css";
import CC from "../files/svg/cc.svg";
import TAWA from "../files/png/tawa.png";
import TAW from "../files/png/taw.png";
import NDC from "../files/png/node.jpg";
import LBM from "../files/png/libremoji.png";
import SPC from "../files/png/supacharged.png";
import CYN from "../files/png/cyn.png";

function Work({ closeWork }) {
  var pos1 = 0,
    pos2 = 0,
    pos3 = 0,
    pos4 = 0;

  useEffect(() => {
    let navbar = document.getElementById("navigator");
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
    let elmnt = document.querySelector("#tab");
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
    <div id="tab" class={styles.window}>
      <div id="navigator" class={styles.navbar}>
        <div onClick={() => closeWork()} class={styles.close}></div>
        <div
          onClick={() => {
            document.querySelector("#tab").style.width = "99vw";
            document.querySelector("#tab").style.height = "93vh";
            document.querySelector("#tab").style.top = "35px";
            document.querySelector("#tab").style.left = "5px";
          }}
          class={styles.maximize}
        ></div>
        My Work
      </div>

      <div id={styles.folderHolder}>
        <div id={styles.icons}>
          <div
            onClick={() => window.open("https://curiouscat.qa", "_blank")}
            class={styles.icon}
          >
            <img class={styles.img} src={CC} />
            <p class={styles.iconText}>CuriousCat</p>
          </div>

          <div
            onClick={() =>
              window.open(
                "https://apps.apple.com/es/app/take-a-walk-see-the-world/id1558201752?ref=producthunt",
                "_blank"
              )
            }
            class={styles.icon}
          >
            <img class={styles.img} src={TAWA} />
            <p class={styles.iconText}>Take a Walk (iOS App)</p>
          </div>

          <div
            onClick={() =>
              window.open(
                "https://play.google.com/store/apps/details?id=com.pitagorax.taw&ref=producthunt",
                "_blank"
              )
            }
            class={styles.icon}
          >
            <img class={styles.img} src={TAWA} />
            <p class={styles.iconText}>Take a Walk (Android App)</p>
          </div>

          <div
            onClick={() => window.open("https://takeawalk.to", "_blank")}
            class={styles.icon}
          >
            <img class={styles.img} src={TAW} />
            <p class={styles.iconText}>Take A Walk</p>
          </div>

          <div
            onClick={() =>
              window.open(window.location.origin + "/files/node.pdf", "_blank")
            }
            class={styles.icon}
          >
            <img class={styles.img} src={NDC} />
            <p class={styles.iconText}>NodeCode</p>
          </div>

          <div
            onClick={() => window.open("https://libremoji.maaar.co", "_blank")}
            class={styles.icon}
          >
            <img class={styles.img} src={LBM} />
            <p class={styles.iconText}>Libremoji</p>
          </div>

          <div
            onClick={() => window.open("https://supacharged.me", "_blank")}
            class={styles.icon}
          >
            <img class={styles.img} src={SPC} />
            <p class={styles.iconText}>Supacharged</p>
          </div>

          <div
            onClick={() => window.open("https://canyounotify.com", "_blank")}
            class={styles.icon}
          >
            <img class={styles.img} src={CYN} />
            <p class={styles.iconText}>CanYouNotify</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Work;
