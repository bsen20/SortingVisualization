const container = document.querySelector(".data-container");

function generatebars(num = 30) {
  const bar_container = document.createElement("div");
  bar_container.classList.add("bar_container");
  for (let i = 0; i < num; i += 1) {
    const value = Math.floor(Math.random() * 100) + 1;
    const bar = document.createElement("div");
    bar.classList.add("bar");
    bar.style.height = `${value * 3}px`;
    bar.style.transform = `translateX(${i * 30}px)`;
    const barLabel = document.createElement("label");
    barLabel.classList.add("bar_id");
    barLabel.innerHTML = value;
    bar.appendChild(barLabel);
    bar_container.appendChild(bar);
  }
  container.appendChild(bar_container);
}

generatebars();

function generate() {
  window.location.reload();
}

function disable() {
  document.getElementById("Button1").disabled = true;
  document.getElementById("Button1").style.backgroundColor = "#d8b6ff";
  document.getElementById("selectionBtn").disabled = true;
  document.getElementById("selectionBtn").style.backgroundColor = "#d8b6ff";
  document.getElementById("bubbleBtn").disabled = true;
  document.getElementById("bubbleBtn").style.backgroundColor = "#d8b6ff";
  document.getElementById("insertionBtn").disabled = true;
  document.getElementById("insertionBtn").style.backgroundColor = "#d8b6ff";
  document.getElementById("quickBtn").disabled = true;
  document.getElementById("quickBtn").style.backgroundColor = "#d8b6ff";
  document.getElementById("mergeBtn").disabled = true;
  document.getElementById("mergeBtn").style.backgroundColor = "#d8b6ff";
}
function enable() {
  document.getElementById("Button1").disabled = false;
  document.getElementById("Button1").style.backgroundColor = "#605f63";
  document.getElementById("selectionBtn").disabled = false;
  document.getElementById("selectionBtn").style.backgroundColor = "#0fb997";
  document.getElementById("bubbleBtn").disabled = false;
  document.getElementById("bubbleBtn").style.backgroundColor = "#0fb997";
  document.getElementById("insertionBtn").disabled = false;
  document.getElementById("insertionBtn").style.backgroundColor = "#0fb997";
  document.getElementById("quickBtn").disabled = false;
  document.getElementById("quickBtn").style.backgroundColor = "#0fb997";
  document.getElementById("mergeBtn").disabled = false;
  document.getElementById("mergeBtn").style.backgroundColor = "#0fb997";
}
