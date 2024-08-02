const styles_appA = /*html*/`
  #main-area {
    background-color: pink;
    width: 100%;
    height: 100%;
    display: grid;
    grid-template-rows: [menu-superior] 10% [content] 1fr;
  } 

  #main-area p {
    margin: 0;
  }
  
`

/* ------------ TEMPLATE ------------ */
const template_appA = document.createElement("template");

template_appA.innerHTML = /*html*/`
  <style> 
    ${styles_appA}
  </style>

  <div id="main-area">
    <p> APP A </p>
  </div>
`

/* -------- CLASS DEFINITION -------- */
class AppA extends HTMLElement {
  constructor() {
    super();
    const shadow = this.attachShadow({ mode: "open" });
    shadow.append(template_appA.content.cloneNode(true));
  }
}

customElements.define("wc-appa", AppA);