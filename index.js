//Variables declaration
const mainDOMElement = document.querySelector("main");

//Functions declaration
const checkMainDOMElementPosition = () => {
  if(mainDOMElement){
    if(mainDOMElement.getBoundingClientRect().y > 139){
      mainDOMElement.classList.replace("overflowAuto", "overflowHidden");
    } else {
      enableMainScroll();
    }
    reExecuteCheck();
  }
}

const enableMainScroll = () => {
  mainDOMElement.classList.replace("overflowHidden", "overflowAuto");
}

const reExecuteCheck = () => {
  setTimeout(() => {
    checkMainDOMElementPosition();
  }, 0);
}

//Execution 
checkMainDOMElementPosition();