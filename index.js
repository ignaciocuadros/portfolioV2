// window.addEventListener("load", (event) => {
//   init();
// }, false);

// function init(){
//   contactStylesWhenIntersectMain();
// }

// const contactElement = document.querySelector(".contact");
// const mainElement = document.querySelector("main");

// function contactStylesWhenIntersectMain(){
//   if(contactElement.getBoundingClientRect().bottom >= mainElement.getBoundingClientRect().top){
//     contactElement.classList.add('highlight');
//   } else {
//     recallFunction();
//   }
// }

// function recallFunction(){
//   setTimeout(() => {
//     contactStylesWhenIntersectMain();
//   }, 250);
// }