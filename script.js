let totalimg = 5;
let currentimg = 1;

function next() {
  currentimg++;
  if (currentimg > totalimg) {
    currentimg = 1;
  }

  for (let i = totalimg; i > 0; i--) {
    document.querySelector(
      "#img-slider img:nth-child(" + i + ")"
    ).style.display = "none";
  }
  document.querySelector(
    "#img-slider img:nth-child(" + currentimg + ")"
  ).style.display = "block";
}

function pre() {
  currentimg--;
  if (currentimg == 0) {
    currentimg = totalimg;
  }

  for (let i = totalimg; i > 0; i--) {
    document.querySelector(
      "#img-slider img:nth-child(" + i + ")"
    ).style.display = "none";
  }
  document.querySelector(
    "#img-slider img:nth-child(" + currentimg + ")"
  ).style.display = "block";
}
