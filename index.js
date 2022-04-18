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
  // Assign 0 to min_idx
  var min_idx = 0;
  for (var i = 0; i < bars.length; i += 1) {
    // Assign i to min_idx
    min_idx = i;
    // Provide darkblue color to the ith bar
    bars[i].style.backgroundColor = "darkblue";
    for (var j = i + 1; j < bars.length; j += 1) {
      // Provide red color to the jth bar
      bars[j].style.backgroundColor = "red";
      // To pause the execution of code for 50 milliseconds
      await new Promise((resolve) =>
        setTimeout(() => {
          resolve();
        }, 50)
      );

      // To store the integer value of jth bar to var1
      var val1 = parseInt(bars[j].childNodes[0].innerHTML);

      // To store the integer value of (min_idx)th bar to var2
      var val2 = parseInt(bars[min_idx].childNodes[0].innerHTML);

      // Compare val1 & val2
      if (val1 < val2) {
        if (min_idx !== i) {
          // Provide skyblue color to the (min-idx)th bar
          bars[min_idx].style.backgroundColor = " rgb(24, 190, 255)";
        }
        min_idx = j;
      } else {
        // Provide skyblue color to the jth bar
        bars[j].style.backgroundColor = " rgb(24, 190, 255)";
      }
    }

    // To swap ith and (min_idx)th bar
    var temp1 = bars[min_idx].style.height;
    var temp2 = bars[min_idx].childNodes[0].innerText;
    bars[min_idx].style.height = bars[i].style.height;
    bars[i].style.height = temp1;
    bars[min_idx].childNodes[0].innerText = bars[i].childNodes[0].innerText;
    bars[i].childNodes[0].innerText = temp2;

    // To pause the execution of code for 100 milliseconds
    await new Promise((resolve) =>
      setTimeout(() => {
        resolve();
      }, 100)
    );

    // Provide skyblue color to the (min-idx)th bar
    bars[min_idx].style.backgroundColor = " rgb(24, 190, 255)";

    // Provide lightgreen color to the ith bar
    bars[i].style.backgroundColor = " rgb(49, 226, 13)";
  }

  // To enable the button "Generate New Array" after final(sorted)
  document.getElementById("Button1").disabled = false;
  document.getElementById("Button1").style.backgroundColor = "#6f459e";

  // To enable the button "Selection Sort" after final(sorted)
  document.getElementById("Button2").disabled = false;
  document.getElementById("Button2").style.backgroundColor = "#6f459e";
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
      console.log(value1, value2);
      if (value1 > value2) {
        var temp1 = bars[j].style.height;
        var temp2 = bars[j].childNodes[0].innerText;
        bars[j].style.height = bars[j + 1].style.height;
        bars[j + 1].style.height = temp1;
        bars[j].childNodes[0].innerText = bars[j + 1].childNodes[0].innerText;
        bars[j + 1].childNodes[0].innerText = temp2;

        /// To pause the execution of code for 100 milliseconds
        await new Promise((resolve) =>
          setTimeout(() => {
            resolve();
          }, 150)
        );
      }

      // Changing the color to the previous one
      bars[j].style.backgroundColor = "#6b5b95";
      bars[j + 1].style.backgroundColor = "#6b5b95";
    }

    // To pause the execution of code for 100 milliseconds
    await new Promise((resolve) =>
      setTimeout(() => {
        resolve();
      }, 100)
    );

    bars[bars.length - i - 1].style.backgroundColor = "rgb(49, 226, 13)";
  }

  // To enable the button "Generate New Array" after final(sorted)
  document.getElementById("Button1").disabled = false;
  document.getElementById("Button1").style.backgroundColor = "#6f459e";

  // To enable the button "Selection Sort" after final(sorted)
  document.getElementById("Button2").disabled = false;
  document.getElementById("Button2").style.backgroundColor = "#6f459e";
  // To enable the button "Bubble Sort" after final(sorted)
  document.getElementById("Button3").disabled = false;
  document.getElementById("Button3").style.backgroundColor = "#6f459e";
}

// Call "generatebars" function
generatebars();

// function to generate new random array
function generate() {
  window.location.reload();
}

// function to disable the button
function disable() {
  // To disable the button "Generate New Array"
  document.getElementById("Button1").disabled = true;
  document.getElementById("Button1").style.backgroundColor = "#d8b6ff";

  // To disable the button "Selection Sort"
  document.getElementById("Button2").disabled = true;
  document.getElementById("Button2").style.backgroundColor = "#d8b6ff";
  //To disable the button "Bubble Sort"
  document.getElementById("Button3").disabled = true;
  document.getElementById("Button3").style.backgroundColor = "#d8b6ff";
}
