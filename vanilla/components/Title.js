/* --------------- CSS -------------- */
const styles_title = /*html*/`
  #title-area {
    border-bottom: 1px solid #D8D8D8;
    margin-bottom: 16px;
  } 
  #titulo-consulta {
    border-bottom: 3px solid #003B5D;
    width: fit-content;
    margin: 0;
    padding-bottom: 12px;
  }
`

/* ------------ TEMPLATE ------------ */
const template_title = document.createElement("template");

template_title.innerHTML = /*html*/`
  <style> 
    ${styles_title}
  </style>

  <div id="title-area">
    <h4 id="titulo-consulta">
      <slot></slot>
    </h4>
  </div>
`

/* -------- CLASS DEFINITION -------- */
class Title extends HTMLElement {
  constructor() {
    super();
    const shadow = this.attachShadow({ mode: "open" });
    shadow.append(template_title.content.cloneNode(true));
  }
}

customElements.define("vn-title", Title);