/* --------------- CSS -------------- */
const styles_classification = /*html*/`
  
`

/* ------------ TEMPLATE ------------ */
const template_classification = document.createElement("template");

template_classification.innerHTML = /*html*/`
  <style> 
    ${styles_classification}
  </style>
  <p> CLASSIFICATION </p>
`

/* ------------- METHODS ------------ */


/* -------- CLASS DEFINITION -------- */
class Classification extends HTMLElement {
  constructor() {
    super();
    const shadow = this.attachShadow({ mode: "open" });
    shadow.append(template_classification.content.cloneNode(true));
  }
}

customElements.define("vn-classification", Classification);
