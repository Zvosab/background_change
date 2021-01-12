const btn = document.querySelector("button");

function changeColor() {
  let colors = {
    red: Math.floor(Math.random() * 255),
    green: Math.floor(Math.random() * 255),
    blue: Math.floor(Math.random() * 255),
  };
  document.body.style.backgroundColor = `rgb(${colors.red}, ${colors.green}, ${colors.blue}`;
  btn.style.backgroundColor = `rgb(${colors.red}, ${colors.green}, ${colors.blue}`;
}

btn.addEventListener("click", changeColor);
