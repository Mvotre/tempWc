/* --------------- CSS -------------- */
const styles_table = /*html*/`
  #container {
    border: 1px solid black;
    padding: 16px;
    border-radius: 5px;
    margin: 20px 0;
  }

  .itemLine{
    display: flex;
    border-bottom: 1px solid gray;
    justify-content: space-between;
  }

  .valid {
    color: green
  }

  .invalid {
    color: red
  }
`

/* ------------ TEMPLATE ------------ */
const template_table = document.createElement("template");

template_table.innerHTML = /*html*/`
  <style> 
    ${styles_table}
  </style>
  <div id="container">
   
  </div>
`

/* ------------- METHODS ------------ */
const addContent = (element, attrName, newValue) => {
  if(newValue !== ""){
    const colabs = JSON.parse(newValue);
    
    const z = createItens(colabs, element);
  }
}

const createItens = ( list, element ) => {
  const domElement = element.shadowRoot.querySelector("#container");
  domElement.innerHTML = "";


  list.map( el => {
    const element = `<div class="itemLine">
        <p> ${el.nome}</p>
        <p> ${el.login}</p>
        <p class=${el.status == "false" ? "invalid" : "valid"}> ${el.status}</p>
      </div>
    `
    domElement.insertAdjacentHTML("beforeend", element)
  })
}

/* -------- CLASS DEFINITION -------- */
class Table extends HTMLElement {
  static get observedAttributes() {
    return [
      'data', 
    ];
  }

  constructor() {
    super();
    const shadow = this.attachShadow({ mode: "open" });
    shadow.append(template_table.content.cloneNode(true));
  }

  attributeChangedCallback(name, oldValue, newValue) {
    addContent(this, name, newValue)
  }
}

customElements.define("ra-table", Table);
