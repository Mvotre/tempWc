/* --------------- CSS -------------- */
const styles_menuSuperiorButtons = `

`

/* ------------ TEMPLATE ------------ */
const template_menuSuperiorButtons = document.createElement("template");

template_menuSuperiorButtons.innerHTML = `
    <style> 
        ${styles_menuSuperiorButtons}
    </style>

    <div>
        <sl-button variant="text" size="large">Button</sl-button>
        <sl-button variant="text" size="large">Button</sl-button>
        <sl-dropdown>
            <sl-button slot="trigger" variant="text" caret size="large">Dropdown</sl-button>
            <sl-menu>
            <sl-menu-item>Item 1</sl-menu-item>
            <sl-menu-item>Item 2</sl-menu-item>
            <sl-menu-item>Item 3</sl-menu-item>
            </sl-menu>
        </sl-dropdown>
    </div>
`

/* -------- CLASS DEFINITION -------- */
class MenuSuperiorButtons extends HTMLElement {
  constructor() {
    super();
    const shadow = this.attachShadow({ mode: "open" });
    shadow.append(template_menuSuperiorButtons.content.cloneNode(true));
  }
}

customElements.define("wc-menu-superior-buttons", MenuSuperiorButtons);