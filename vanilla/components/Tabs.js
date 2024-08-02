/* --------------- CSS -------------- */
const styles_tabs = /*html*/`
  section {
    padding: 10px;
    border: 1px solid black;
  }

  .invisible {
    display: none; 
  }
`

/* ------------ TEMPLATE ------------ */
const template_tabs = document.createElement("template");

template_tabs.innerHTML = /*html*/`
  <style> 
    ${styles_tabs}
  </style>

  <section>
    <nav>
      <vn-button primary disabled-active>Consulta</vn-button>
      <vn-button primary-inverted-borderless>Classificação de franquias</vn-button>
      <vn-button primary-inverted-borderless>Novo cálculo</vn-button>
    </nav>
    <div>
      <div id="search-container" class="invisible">
        <vn-search></vn-search>
      </div>
      <div id="classification-container" class="invisible">
        <vn-classification></vn-classification>
      </div>
      <div id="newcalculation-container" class="invisible">
        <vn-newcalc></vn-newcalc>
      </div>
    </div>
  </section>
`

/* ------------- METHODS ------------ */
const loadTabElement = (button, mainComponent) => {
  // exibir o componente certo
  // mudar o status do botão
  // Fazer o componente receber qual vai ser o elemento inicial e rolar toda a lógica primária
  const buttonText = button.innerText;
  let visibleComponent = "";

  switch (buttonText) {
    case "Classificação de franquias":
      visibleComponent = "classification-container"
      break;
    case "Novo cálculo":
      visibleComponent = "newcalculation-container"
      break;
    default:
      visibleComponent = "search-container"
      break;
  }

  const allButtons = mainComponent.shadowRoot;
  const allButtonsArray = Array.from(allButtons.querySelector('nav').children);

  allButtonsArray.map(btn => {
    if(btn.innerText === buttonText){
      btn.setAttribute('set-as-active', "");
    } else {
      btn.setAttribute('set-as-inactive', "");
    }
  })

  loadComponent(mainComponent, visibleComponent)
}

const loadComponent = (element, clickedValue) => {
  let activeElement;
  if(!clickedValue){
    activeElement = element.getAttribute('loaded-component');
  } else {
    activeElement = clickedValue;
  }

  const shadow = element.shadowRoot;
  const toggleElementVisibility =  shadow.querySelector(`#${activeElement}`);

  toggleElementVisibility.classList.remove("invisible");
}

/* -------- CLASS DEFINITION -------- */
class Tabs extends HTMLElement {
  constructor() {
    super();
    const shadow = this.attachShadow({ mode: "open" });
    shadow.append(template_tabs.content.cloneNode(true));

    let buttonListener = this.shadowRoot;
    buttonListener.addEventListener("ButtonClick", (event) => {
      event.stopPropagation();
    
      const element = event.target;
      loadTabElement(element, this);
    });
  }

  connectedCallback() {
    loadComponent(this);
  }
}

customElements.define("vn-tabs", Tabs);
