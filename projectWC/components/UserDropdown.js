/* --------------- CSS -------------- */
const styles_userDropdown = /*html*/`
  #avatar-area {
    position: relative;
  }

  #menu-drop {
    position: absolute;
    top: 60px;
    right: 0;
  }

  .invisible {
    display: none;
  }
`

/* ------------ TEMPLATE ------------ */
const template_userDropdown = document.createElement("template");

template_userDropdown.innerHTML = /*html*/`
  <style> 
    ${styles_userDropdown}
  </style>

  <div id="avatar-area">
    <sl-button variant="text" size="medium">
      <sl-avatar label="User avatar"></sl-avatar>
    </sl-button>

    <div id="menu-drop" class="invisible">
      <sl-menu>
        <sl-menu-item value="undo">Username</sl-menu-item>
        <sl-menu-item value="redo">User position</sl-menu-item>
        <sl-divider></sl-divider>
        <sl-menu-item value="cut">Configuration</sl-menu-item>
        <sl-menu-item value="copy">Logout</sl-menu-item>
      </sl-menu>
    </div>
  </div>
`

/* -------- CLASS DEFINITION -------- */
class UserDropdown extends HTMLElement {
  constructor() {
    super();
    const shadow = this.attachShadow({ mode: "open" });
    shadow.append(template_userDropdown.content.cloneNode(true));

    let button = this.shadowRoot.querySelector("sl-button");

    button.addEventListener('click', event => {
      let drop = this.shadowRoot.querySelector("#menu-drop");
      drop.classList.toggle("invisible");
    });
  }
}

customElements.define("wc-user-dropdown", UserDropdown);