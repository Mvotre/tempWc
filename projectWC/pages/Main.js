/* --------------- CSS -------------- */
const styles_main = /*html*/`
  #main-area {
    background-color: pink;
    width: 100%;
    height: 100%;
    display: grid;
    grid-template-rows: [menu-superior] 10% [content] 1fr;
  } 

  #main-area p {
    margin: 0;
  }

  #teste {
    background-color: antiqueWhite;
    display: flex;
  }

  #me {
    width: 20%;
    transition: all 0.2s
  }  

  .ji {
    width: 10% !important
  }
`

/* ------------ TEMPLATE ------------ */
const template_main = document.createElement("template");

template_main.innerHTML = /*html*/`
  <style> 
    ${styles_main}
  </style>

  <div id="main-area">
    <wc-menu-superior></wc-menu-superior>
    <div id="teste">
      <div id="me"> 
        <wc-menu-lateral></wc-menu-lateral>
      </div>
      <div id="testeinject"> </div>
    </div>
  </div>
`

/* -------- CLASS DEFINITION -------- */
class Main extends HTMLElement {
  constructor() {
    super();
    const shadow = this.attachShadow({ mode: "open" });
    shadow.append(template_main.content.cloneNode(true));
  }

  connectedCallback() {
    this.shadowRoot.addEventListener("loadApp", (clickedId) => {
      loadApp(clickedId.detail, this)
    })

    this.shadowRoot.addEventListener("toggleMenu", () => {
      const gridElement = this.shadowRoot.querySelector("#me");
      gridElement.classList.toggle("ji")
    })
  }
}

function loadApp(e, el) {
  let element;
  console.log(e.id)

  switch (e.id) {
    case "1":
      element = document.createElement("wc-appa");
      break;
    case "2":
      element = document.createElement("wc-appb");
      break;
    default:
      element = document.createElement("wc-apphome");
      break;
  }

  // if(e.id === "0"){
  //   element = document.createElement("wc-appa");
  // } else {
  //   element = document.createElement("wc-appb");
  // }

  const z = el.shadowRoot.querySelector("#testeinject");
  z.innerHTML = "";
  z.appendChild(element);
}

customElements.define("wc-main", Main);