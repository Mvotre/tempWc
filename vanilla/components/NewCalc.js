/* --------------- CSS -------------- */
const styles_newcalc = /*html*/`
  
`

/* ------------ TEMPLATE ------------ */
const template_newcalc = document.createElement("template");

template_newcalc.innerHTML = /*html*/`
  <style> 
    ${template_newcalc}
  </style>
  <p>New Calculation</p>
`

/* ------------- METHODS ------------ */


/* -------- CLASS DEFINITION -------- */
class NewCalc extends HTMLElement {
  constructor() {
    super();
    const shadow = this.attachShadow({ mode: "open" });
    shadow.append(template_newcalc.content.cloneNode(true));
  }
}

customElements.define("vn-newcalc", NewCalc);
