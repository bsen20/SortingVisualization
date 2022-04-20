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

// asynchronous function to perform "Selection Sort"
async function SelectionSort(delay = 50) {
  let bars = document.querySelectorAll(".bar");
  console.log(bars);
  var min_idx = 0;
  for (var i = 0; i < bars.length; i += 1) {
    min_idx = i;
    bars[i].style.backgroundColor = "darkblue";
    for (var j = i + 1; j < bars.length; j += 1) {
      bars[i].style.backgroundColor = "red";
      await new Promise((resolve) =>
        setTimeout(() => {
          resolve();
        }, 50)
      );
      var val1 = parseInt(bars[j].childNodes[0].innerHTML);
      var val2 = parseInt(bars[min_idx].childNodes[0].innerHTML);
      if (val1 < val2) {
        if (min_idx !== i) {
          bars[min_idx].style.backgroundColor = " rgb(24, 170, 270)";
        }
        min_idx = j;
      } else {
        bars[j].style.backgroundColor = " rgb(24, 170, 270)";
      }
    }
    var temp1 = bars[min_idx].style.height;
    var temp2 = bars[min_idx].childNodes[0].innerText;
    bars[min_idx].style.height = bars[i].style.height;
    bars[i].style.height = temp1;
    bars[min_idx].childNodes[0].innerText = bars[i].childNodes[0].innerText;
    bars[i].childNodes[0].innerText = temp2;
    await new Promise((resolve) =>
      setTimeout(() => {
        resolve();
      }, 100)
    );
    bars[min_idx].style.backgroundColor = " rgb(24, 170, 270)";
    bars[i].style.backgroundColor = " rgb(49, 226, 13)";
  }
  document.getElementById("Button1").disabled = false;
  document.getElementById("Button1").style.backgroundColor = "#605f63";
  document.getElementById("Button2").disabled = false;
  document.getElementById("Button2").style.backgroundColor = "0fb997";
  document.getElementById("Button3").disabled = false;
  document.getElementById("Button3").style.backgroundColor = "0fb997";
}
async function BubbleSort(delay = 50) {
  var bars = document.querySelectorAll(".bar");
  for (var i = 0; i < bars.length; i += 1) {
    for (var j = 0; j < bars.length - i - 1; j += 1) {
      bars[j].style.backgroundColor = "skyblue";
      bars[j + 1].style.backgroundColor = "skyblue";
      await new Promise((resolve) =>
        setTimeout(() => {
          resolve();
        }, 50)
      );

      var value1 = Number(bars[j].childNodes[0].innerHTML);
      var value2 = Number(bars[j + 1].childNodes[0].innerHTML);
      // console.log(value1, value2);
      if (value1 > value2) {
        var temp1 = bars[j].style.height;
        var temp2 = bars[j].childNodes[0].innerText;
        bars[j].style.height = bars[j + 1].style.height;
        bars[j + 1].style.height = temp1;
        bars[j].childNodes[0].innerText = bars[j + 1].childNodes[0].innerText;
        bars[j + 1].childNodes[0].innerText = temp2;
        await new Promise((resolve) =>
          setTimeout(() => {
            resolve();
          }, 150)
        );
      }
      bars[j].style.backgroundColor = "#6b5b95";
      bars[j + 1].style.backgroundColor = "#6b5b95";
    }
    await new Promise((resolve) =>
      setTimeout(() => {
        resolve();
      }, 100)
    );

    bars[bars.length - i - 1].style.backgroundColor = "rgb(49, 226, 13)";
  }
  document.getElementById("Button1").disabled = false;
  document.getElementById("Button1").style.backgroundColor = "#605f63";
  document.getElementById("Button2").disabled = false;
  document.getElementById("Button2").style.backgroundColor = "0fb997";
  document.getElementById("Button3").disabled = false;
  document.getElementById("Button3").style.backgroundColor = "0fb997";
}
async function InsertionSort(delay = 200) {
  let bars = document.querySelectorAll(".bar");
  bars[0].style.backgroundColor = " rgb(49, 226, 13)";
  for (var i = 1; i < bars.length; i += 1) {
    var j = i - 1;
    var key = parseInt(bars[i].childNodes[0].innerHTML);
    var height = bars[i].style.height;
    bars[i].style.backgroundColor = "darkblue";
    await new Promise((resolve) =>
      setTimeout(() => {
        resolve();
      }, 200)
    );
    while (j >= 0 && parseInt(bars[j].childNodes[0].innerHTML) > key) {
      bars[j].style.backgroundColor = "darkblue";
      bars[j + 1].style.height = bars[j].style.height;
      bars[j + 1].childNodes[0].innerText = bars[j].childNodes[0].innerText;
      j = j - 1;
      await new Promise((resolve) =>
        setTimeout(() => {
          resolve();
        }, 200)
      );
      for (var k = i; k >= 0; k--) {
        bars[k].style.backgroundColor = " rgb(49, 226, 13)";
      }
    }
    bars[j + 1].style.height = height;
    bars[j + 1].childNodes[0].innerHTML = key;
    await new Promise((resolve) =>
      setTimeout(() => {
        resolve();
      }, 200)
    );
    bars[i].style.backgroundColor = " rgb(49, 226, 13)";
  }

  document.getElementById("Button1").disabled = false;
  document.getElementById("Button1").style.backgroundColor = "#605f63";
  document.getElementById("Button2").disabled = false;
  document.getElementById("Button2").style.backgroundColor = "0fb997";
  document.getElementById("Button3").disabled = false;
  document.getElementById("Button3").style.backgroundColor = "#0fb997";
}
async function QuickSort(delay = 100) {
  let bars = document.querySelectorAll(".bar");
  // console.log(bars);
  let low = 0;
  let high = bars.length - 1;
  await quicksort(low, high, bars);
}
async function partition(low, high, bars) {
  var pivot = parseInt(bars[high].childNodes[0].innerHTML);
  bars[high].style.backgroundColor = "rgb(49, 226, 13)";
  var i = low - 1;
  for (var j = low; j < high; j += 1) {
    if (parseInt(bars[j].childNodes[0].innerHTML) < pivot) {
      i++;
      var temp1 = bars[i].style.height;
      var temp2 = bars[i].childNodes[0].innerText;
      bars[i].style.height = bars[j].style.height;
      bars[j].style.height = temp1;
      bars[i].childNodes[0].innerText = bars[j].childNodes[0].innerText;
      bars[j].childNodes[0].innerText = temp2;
      await new Promise((resolve) =>
        setTimeout(() => {
          resolve();
        }, 150)
      );
      bars[i].style.backgroundColor = "#6b5b95";
      bars[j].style.backgroundColor = "#skyblue";
    }
  }
  i++;
  var temp1 = bars[high].style.height;
  var temp2 = bars[high].childNodes[0].innerText;
  bars[high].style.height = bars[i].style.height;
  bars[i].style.height = temp1;
  bars[high].childNodes[0].innerText = bars[i].childNodes[0].innerText;
  bars[i].childNodes[0].innerText = temp2;
  await new Promise((resolve) =>
    setTimeout(() => {
      resolve();
    }, 100)
  );
  bars[high].style.backgroundColor = " rgb(24, 170, 270)";
  bars[i].style.backgroundColor = " rgb(49, 226, 13)";
  // console.log(i);
  return i;
}
async function quicksort(low, high, bars) {
  if (low <= high) {
    var pivot_idx = await partition(low, high, bars);
    await quicksort(low, pivot_idx - 1, bars);
    await quicksort(pivot_idx + 1, high, bars);
  }
}

generatebars();

function generate() {
  window.location.reload();
}

function disable() {
  document.getElementById("Button1").disabled = true;
  document.getElementById("Button1").style.backgroundColor = "#d8b6ff";
  document.getElementById("Button2").disabled = true;
  document.getElementById("Button2").style.backgroundColor = "#0fb997";
  document.getElementById("Button3").disabled = true;
  document.getElementById("Button3").style.backgroundColor = "#0fb997";
}
