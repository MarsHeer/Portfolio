import React, { useEffect, useState } from "react";
import styles from "../styles/About.module.css";
import Logo from "../files/svg/os-icon.svg";
import CC from "../files/png/cc.png";
import VV from "../files/png/vonvon.jpg";
import PX from "../files/png/pitagorax.png";
import MB from "../files/png/marbill.png";

function About({ closeAbout }) {
  var pos1 = 0,
    pos2 = 0,
    pos3 = 0,
    pos4 = 0;

  useEffect(() => {
    let navbar = document.getElementById("navbar");
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
    let elmnt = document.querySelector("#window");
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
    <div id="window" class={styles.window}>
      <div id="navbar" class={styles.navbar}>
        <div onClick={() => closeAbout()} class={styles.close}></div>
        <div
          onClick={() => {
            document.querySelector("#window").style.width = "99vw";
            document.querySelector("#window").style.height = "93vh";
            document.querySelector("#window").style.top = "35px";
            document.querySelector("#window").style.left = "5px";
          }}
          class={styles.maximize}
        ></div>
        About This Computer
      </div>
      <div id={styles.info}>
        <img id={styles.logo} src={Logo} />
        <div id={styles.img}></div>
        <div id={styles.text}>
          <h2 style={{ margin: "10px 0 10px 0" }}>Marco Balbona Calvo</h2>
          <p style={{ margin: "10px 0 10px 0" }}>Digital Designer</p>
          <p style={{ margin: "10px 0 10px 0" }}>Front-End Developer</p>
          <button
            onClick={() =>
              window.open(window.location.origin + "/files/cv.pdf", "_blank")
            }
            id={styles.button}
          >
            Access CV
          </button>
        </div>
      </div>
      <div id={styles.cv}>
        <h1 class={styles.timelineH1}>💼 Work Experience</h1>
        <div class={styles.timeline}>
          <div class={styles.companyTitle}>
            <img class={styles.companyTitleImg} src={CC} />
            <p style={{ margin: 0 }}>
              <b>CuriousCat</b> | Co-Founder & UI Designer
            </p>
          </div>
          <p style={{ color: "gray", margin: 0 }}>(2016 - 2018)</p>
          <paragraph class={styles.paragraph}>
            <a href="https://curiouscat.me/curiouscat" target="_blank">
              CuriousCat
            </a>{" "}
            is an anonymous Q&A website and app which I co-founded and operated
            from 2016 until its acquisition in 2018. It serves <b>1.5M DAU</b>
            worldwide and is growing to this day. My responsibilities in the
            CuriousCat project included, but were not limited to:
          </paragraph>
          <ul style={{ margin: "5px" }}>
            <li class={styles.li}>
              Responsive UI Design for desktop, mobile web and native apps.
            </li>
            <li class={styles.li}>
              Design, execution, and analysis of A/B tests.
            </li>
            <li class={styles.li}>
              Designing and implementing successful product & design iterations
              based on user data.
            </li>
            <li class={styles.li}>
              Offered customer support through Twitter, Facebook & E-mail.
            </li>
          </ul>
        </div>
        <div class={styles.timeline}>
          <div class={styles.companyTitle}>
            <img class={styles.companyTitleImg} src={VV} />
            <p style={{ margin: 0 }}>
              <b>Vonvon Inc.</b> | Product & UI Designer
            </p>
          </div>
          <p style={{ color: "gray", margin: 0 }}>(2018 - 2021)</p>
          <paragraph class={styles.paragraph}>
            Vonvon Inc. is a viral media company which specializes in making
            high-reach digital social products. My job in Vonvon included:
          </paragraph>
          <ul style={{ margin: "5px" }}>
            <li class={styles.li}>
              Further developing CuriousCat's design and features.
            </li>
            <li class={styles.li}>
              Redesigning CuriousCat's UI & brand image.
            </li>
            <li class={styles.li}>
              Designing various new viral social products.
            </li>
            <li class={styles.li}>
              Brand, UI & Product design for a new visual Q&A social network:{" "}
              <a
                href="https://apps.apple.com/es/app/beacon-anonymous-q-a/id1483493378"
                target="_blank"
              >
                Beacon
              </a>
              .
            </li>
            <li class={styles.li}>
              Coordinating communications between CuriousCat and third-party
              employees and partners.
            </li>
          </ul>
        </div>

        <div class={styles.timeline}>
          <div class={styles.companyTitle}>
            <img class={styles.companyTitleImg} src={MB} />
            <p style={{ margin: 0 }}>
              <b>Marbill</b> | UX Analyst (June - Nov) & Technical Product Owner (Nov - Dec)
            </p>
          </div>
          <p style={{ color: "gray", margin: 0 }}>
            Side Project (June 2021 - Dec. 2021)
          </p>
          <paragraph class={styles.paragraph}>
            Marbill is a technology company specialized in the subscription and e-commerce industries.
            I began my career with them as a UX Analyst, before transitioning into the role of Technical Product Owner, 5 months later.
            Some of my responsibilities include: 
          </paragraph>
          <ul style={{ margin: "5px" }}>
            <li class={styles.li}>Designing, implementing & analyzing A/B tests</li>
            <li class={styles.li}>Improved average site performance by up to 90%</li>
            <li class={styles.li}>
              Improved CR across a suite of products upwards of 100%
            </li>
            <li class={styles.li}>
              Designing and developing new product verticals
            </li>
            <li class={styles.li}>
              Optimizing revenue KPIs through the improvement and implementation of new features
            </li>
            <li class={styles.li}>
              Presenting work and ideas to C-Levels, Investors, etc...
            </li>
          </ul>
        </div>

        <div class={styles.timeline}>
          <div class={styles.companyTitle}>
            <img class={styles.companyTitleImg} src={PX} />
            <p style={{ margin: 0 }}>
              <b>PitagoraX</b> | Product Designer & Front-End Developer
            </p>
          </div>
          <p style={{ color: "gray", margin: 0 }}>
            Side Project (2019 - 2021)
          </p>
          <paragraph class={styles.paragraph}>
            PitagoraX is a small company I set up with some colleagues as a side
            project, so we could publish the products we make in our free time,
            and as a small enterpreneural endeavor. It's been a great help
            developing the following skills:
          </paragraph>
          <ul style={{ margin: "5px" }}>
            <li class={styles.li}>Product & UI design.</li>
            <li class={styles.li}>Administrative and secretarial skills</li>
            <li class={styles.li}>
              Web development, introducing me to React, Node.JS, MySQL, REST
              APIs & other technologies.
            </li>
          </ul>
        </div>
        <h1 class={styles.timelineH1}>🙋🏻‍♂️ Some fun facts</h1>
        <div class={styles.timeline}>
          <ul style={{ margin: "5px" }}>
            <li class={styles.li}>
              I was born in{" "}
              <a href="https://www.google.com/maps/place/La+Coru%C3%B1a/@43.3618688,-8.4477031,13z/data=!3m1!4b1!4m5!3m4!1s0xd2e7cfcf174574d:0x6a47350d095cdfee!8m2!3d43.3623436!4d-8.4115401?shorturl=1">
                A Coruña, Spain
              </a>
            </li>
            <li class={styles.li}>
              I lived in 🇮🇪 Ireland for 7 years, worked in 🇰🇷 Seoul for 6 months
              and am currently located in Marbella 🇪🇸.
            </li>
            <li class={styles.li}>
              My mother tongue is Spanish and I am also fluent in English and
              Galician. And I have intermediate proficiency in Portuguese!
            </li>
            <li class={styles.li}>
              Some things I 💛: Jazz, Paris, Gadgets, Travelling & the color
              yellow.
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}

export default About;
