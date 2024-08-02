/* --------------- CSS -------------- */
const styles_button = /*html*/`
  #button-body {
    padding: 5px 10px;
    border-radius: 5px;
  } 

  #button-body:hover {
    cursor:pointer;
  }

  .primary {
    background-color: #003B5D;
    border: 1px solid #003B5D;
    color: white;
    transition: background-color 0.2s;
  }

  .primary:hover {
    background-color: #23516b;
  }

  .primary-inverted {
    border: 1px solid #003B5D;
    color: #003B5D;
    background-color: white;
    transition: background-color 0.2s;
  }

  .primary-inverted:hover {
    background-color: #d3e4ed;
  }

  .primary-inverted-borderless {
    border: 1px solid transparent;
    color: #003B5D;
    background-color: transparent;
    transition: all 0.2s;
  }

  .primary-inverted-borderless:hover {
    background-color: #003B5D;
    border: 1px solid #003B5D;
    color: white;
  }

  .disabled-active {
    pointer-events: none;
  }

  .disabled {
    pointer-events: none;
    opacity: 0.5;
  }
`

/* ------------ TEMPLATE ------------ */
const template_button = document.createElement("template");

template_button.innerHTML = /*html*/`
  <style> 
    ${styles_button}
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
class Button extends HTMLElement {
  static get observedAttributes() {
    return [
      'primary', 
      'primary-inverted', 
      'primary-inverted-borderless', 
      'disabled-active', 
      'disabled',
      'set-as-active',
      'set-as-inactive'
    ];
  }

  constructor() {
    super();
    const shadow = this.attachShadow({ mode: "open" });
    shadow.append(template_button.content.cloneNode(true));

    let button = this.shadowRoot.querySelector("button");
    button.addEventListener("click", () => {
      button.dispatchEvent(new CustomEvent("ButtonClick", {
        bubbles: true,
        composed: true
      }));
    });
  }

  attributeChangedCallback(name, oldValue, newValue) {
    updateStyle(this, name)
  }
}

customElements.define("vn-button", Button);

