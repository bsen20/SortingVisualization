async function BubbleSort() {
  var bars = document.querySelectorAll(".bar");
  for (var i = 0; i < bars.length; i += 1) {
    for (var j = 0; j < bars.length - i - 1; j += 1) {
      bars[j].style.backgroundColor = "skyblue";
      bars[j + 1].style.backgroundColor = "skyblue";
      await new Promise((resolve) =>
        setTimeout(() => {
          resolve();
        }, 100)
      );

      var value1 = parseInt(bars[j].childNodes[0].innerHTML);
      var value2 = parseInt(bars[j + 1].childNodes[0].innerHTML);
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
  enable();
}
