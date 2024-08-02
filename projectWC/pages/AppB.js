const styles_appB = /*html*/`
  #main-area {
    background-color: red;
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
const template_appB = document.createElement("template");

template_appB.innerHTML = /*html*/`
  <style> 
    ${styles_appB}
  </style>

  <div id="main-area">
    <p> APP B </p>
  </div>
`

/* -------- CLASS DEFINITION -------- */
class AppB extends HTMLElement {
  constructor() {
    super();
    const shadow = this.attachShadow({ mode: "open" });
    shadow.append(template_appB.content.cloneNode(true));
  }
}

customElements.define("wc-appb", AppB);