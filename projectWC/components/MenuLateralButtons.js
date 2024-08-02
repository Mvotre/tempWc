/* --------------- CSS -------------- */
const styles_menuLateralButtons = `
    #button-body {
        width: 100%;
    }
`

/* ------------ TEMPLATE ------------ */
const template_menuLateralButtons = document.createElement("template");

template_menuLateralButtons.innerHTML = `
    <style> 
        ${styles_menuLateralButtons}
    </style>

    <button id="button-body">
       <slot></slot>
    </button>
`

/* ------------- METHODS ------------ */
const updateStyle = (element, name) => {
    const shadow = element.shadowRoot;
    const buttonElement = shadow.querySelector('#button-body');
  
    buttonElement.classList.add(name);
  
    if(name === "set-as-inactive"){
      buttonElement.className = '';
      buttonElement.classList.add("primary-inverted-borderless")
    }
  
    if(name === "set-as-active"){
      buttonElement.className = '';
      buttonElement.classList.add("primary");
      buttonElement.classList.add("disabled-active")
    }
  }

/* -------- CLASS DEFINITION -------- */
class MenuLateralButtons extends HTMLElement {
  static get observedAttributes() {
    return [
      'active',
    ];
  }

  constructor() {
    super();
    const shadow = this.attachShadow({ mode: "open" });
    shadow.append(template_menuLateralButtons.content.cloneNode(true));

    let button = this.shadowRoot.querySelector("#button-body");
  }

  connectedCallback() {
    const z = this.shadowRoot.querySelector("#button-body");

    z.addEventListener("click", () => {    
      let event = new CustomEvent("loadApp", {detail: {id: this.dataset.id}, bubbles: true, composed: true});
      z.dispatchEvent(event);
    });
  }

  attributeChangedCallback(name, oldValue, newValue) {
    // TODO - adicionar o comportamento de botão ativo
    updateStyle(this, name)
  }
}

customElements.define("wc-menu-lateral-buttons", MenuLateralButtons);