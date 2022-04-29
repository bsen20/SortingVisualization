async function SelectionSort() {
  let bars = document.querySelectorAll(".bar");
  // console.log(bars);
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
    bars[min_idx].style.backgroundColor = "red";
    await new Promise((resolve) =>
      setTimeout(() => {
        resolve();
      }, 250)
    );
    var temp1 = bars[min_idx].style.height;
    var temp2 = bars[min_idx].childNodes[0].innerText;
    bars[min_idx].style.height = bars[i].style.height;
    bars[i].style.height = temp1;
    bars[min_idx].childNodes[0].innerText = bars[i].childNodes[0].innerText;
    bars[i].childNodes[0].innerText = temp2;
    await new Promise((resolve) =>
      setTimeout(() => {
        resolve();
      }, 50)
    );
    bars[min_idx].style.backgroundColor = " rgb(24, 170, 270)";
    bars[i].style.backgroundColor = " rgb(49, 226, 13)";
  }
  enable();
}
