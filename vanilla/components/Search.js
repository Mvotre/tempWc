/* --------------- CSS -------------- */
const styles_search = /*html*/`
  
`

/* ------------ TEMPLATE ------------ */
const template_search = document.createElement("template");

template_search.innerHTML = /*html*/`
  <style> 
    ${styles_search}
  </style>
  <p> Search </p>
`

/* ------------- METHODS ------------ */


/* -------- CLASS DEFINITION -------- */
class Search extends HTMLElement {
  constructor() {
    super();
    const shadow = this.attachShadow({ mode: "open" });
    shadow.append(template_search.content.cloneNode(true));
  }
}

customElements.define("vn-search", Search);
