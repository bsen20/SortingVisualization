async function InsertionSort(delay = 200) {
  let bars = document.querySelectorAll(".bar");
  bars[0].style.backgroundColor = " rgb(49, 226, 13)";
  for (var i = 1; i < bars.length; i += 1) {
    var j = i - 1;
    var key = parseInt(bars[i].childNodes[0].innerHTML);
    var height = bars[i].style.height;
    bars[i].style.backgroundColor = "yellow";
    await new Promise((resolve) =>
      setTimeout(() => {
        resolve();
      }, 200)
    );
    while (j >= 0 && parseInt(bars[j].childNodes[0].innerHTML) > key) {
      bars[j].style.backgroundColor = "yellow";
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

  enable();
}
