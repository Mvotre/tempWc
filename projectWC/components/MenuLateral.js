/* --------------- CSS -------------- */
const styles_menuLateral = /*html*/`
  #menu-lateral-area {
    background-color: fuchsia;
    width: 100%;
    height: 100%;
    display: flex;
    flex-direction: column;
  } 

  #menu-items {
    flex-grow: 1
  }

  #menu-toggler {
    border-top: 1px solid black;
    padding: 10px;
    display: flex;
    justify-content: end;
  }

  #menu-lateral-area p {
    margin: 0;
  }

  .menu-btn {
    background-color: antiqueWhite;
    padding: 10px 0;
  }
  
  .menu-btn:hover {
    background-color: white;
    cursor: pointer;
  }

  #menu-items {
    display: flex;
    flex-direction: column;
  }
`

/* ------------ TEMPLATE ------------ */
const template_menuLateral = document.createElement("template");

template_menuLateral.innerHTML = /*html*/`
  <style> 
    ${styles_menuLateral}
  </style>

  <div id="menu-lateral-area">
    <div id="menu-items"> </div>
    <div id="menu-toggler"> >> </div>
  </div>
`

/* -------- CLASS DEFINITION -------- */
class MenuLateral extends HTMLElement {
  constructor() {
    super();
    const shadow = this.attachShadow({ mode: "open" });
    shadow.append(template_menuLateral.content.cloneNode(true));
  }

  connectedCallback() {
    const z = this.shadowRoot.querySelector("#menu-items");
    addMenuButtons(z);

    const menuToggler = this.shadowRoot.querySelector("#menu-toggler");
    menuToggler.addEventListener("click", () => toggleMenu(this));
  }
}

function toggleMenu(el) {
  console.log("ok")
  let event = new Event("toggleMenu", {bubbles: true, composed: true});
  el.dispatchEvent(event);
}

function addMenuButtons(element) {
  const btns = ["Home", "App 1", "App 2"];

  btns.map( (btn, index) => {
    const buttonDom = `
      <wc-menu-lateral-buttons data-id=${index}>${btn}</wc-menu-lateral-buttons>
    ` 
    element.insertAdjacentHTML("beforeend", buttonDom);
  })
}

customElements.define("wc-menu-lateral", MenuLateral);