AOS.init();

const headingTitle = document.querySelector(".banner .heading-block .title");
const valueTitle = headingTitle.getAttribute("data-title");
const valueArray = valueTitle.split("");
headingTitle.innerHTML = valueArray
  .map((item) => {
    return `<span>${item}</span>`;
  })
  .join("");

headingChilds = document.querySelectorAll(".banner .heading-block .title span");
headingChilds.forEach((child, index) => {
  child.style.animation = `upDown2 ease-in-out 5s ${
    index * 0.25
  }s infinite alternate-reverse`;
});
