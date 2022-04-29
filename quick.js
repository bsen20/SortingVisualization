async function QuickSort(delay = 100) {
  let bars = document.querySelectorAll(".bar");
  console.log(bars);
  let low = 0;
  let high = bars.length - 1;
  await quicksort(low, high, bars);
  enable();
}
async function partition(low, high, bars) {
  var pivot = parseInt(bars[high].childNodes[0].innerHTML);
  bars[high].style.backgroundColor = "yellow";
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
      bars[i].style.backgroundColor = "orange";
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
    }, 200)
  );
  bars[high].style.backgroundColor = " rgb(24, 170, 270)";
  bars[i].style.backgroundColor = " rgb(49, 226, 13)";
  return i;
}
async function quicksort(low, high, bars) {
  if (low <= high) {
    var pivot_idx = await partition(low, high, bars);
    await quicksort(low, pivot_idx - 1, bars);
    await quicksort(pivot_idx + 1, high, bars);
  }
}
