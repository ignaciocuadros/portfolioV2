let body = undefined;
let main = undefined;

window.addEventListener("load", () => {
  main = document.querySelector("main");
  window.addEventListener("scroll", () => {
    toggleOverflowBodyAndMain();
  });
});


const toggleOverflowBodyAndMain = () => {
  const isInViewport = this.isInViewport(main);
  if(isInViewport){
    main.classList.remove("overflowHidden");
    main.classList.remove("marginScrollbar");
  } else {
    main.classList.add("overflowHidden");
    setTimeout(() => {
      toggleOverflowBodyAndMain();
    }, 100);
  }
}

function isInViewport(element) {
  const rect = element.getBoundingClientRect();
  return (
      rect.top >= 0 &&
      rect.left >= 0 &&
      parseInt(rect.bottom) <= (window.innerHeight || document.documentElement.clientHeight) &&
      rect.right <= (window.innerWidth || document.documentElement.clientWidth)
  );
}