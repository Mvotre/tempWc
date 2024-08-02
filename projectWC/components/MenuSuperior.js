/* --------------- CSS -------------- */
const styles_menuSuperior = `
  #menu-superior-area {
    box-sizing: border-box;
    background-color: #abc2c4;
    padding: 16px;
    width: 100%;
    height: 100%;
  } 

  #menu-superior-content {
    height: 100%;
    display: flex;
  }

  #menu-superior-content p {
    margin:0;
  }

  #menu-superior-content__left {
    flex-grow: 1;
    display: flex;
  }
`

/* ------------ TEMPLATE ------------ */
const template_menuSuperior = document.createElement("template");

template_menuSuperior.innerHTML = `
  <style> 
    ${styles_menuSuperior}
  </style>

  <nav id="menu-superior-area">
    <div id="menu-superior-content">
      <div id="menu-superior-content__left"> 
        <img src="../assets/images/logoipsum.svg">
        <wc-menu-superior-buttons> </wc-menu-superior-buttons>
      </div>
      <div id="menu-superior-content__right">
        <wc-user-dropdown></wc-user-dropdown>
      </div>
    </div>
  </nav>
`

/* -------- CLASS DEFINITION -------- */
class MenuSuperior extends HTMLElement {
  constructor() {
    super();
    const shadow = this.attachShadow({ mode: "open" });
    shadow.append(template_menuSuperior.content.cloneNode(true));
  }
}

customElements.define("wc-menu-superior", MenuSuperior);