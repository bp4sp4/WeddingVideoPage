const header = document.querySelector("#header");
const headerHeight = header.getBoundingClientRect().height;

window.addEventListener("scroll", () => {
  if (window.scrollY > headerHeight) {
    header.style.backgroundColor = "#e7dfe9";
    header.style.transition = "background-color 1s ease"; // 부드러운 변화를 위한 transition 설정
  } else {
    header.style.backgroundColor = "transparent";
  }
});
