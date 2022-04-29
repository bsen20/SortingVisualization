async function MergeSort(delay = 100) {
  let ele = document.querySelectorAll(".bar");
  let l = 0;
  let r = parseInt(ele.length) - 1;
  // console.log(bars);
  await divide(ele, l, r);
  // console.log(bars);
  enable();
}

async function divide(ele, l, r) {
  if (l >= r) {
    return;
  }
  const m = l + Math.floor((r - l) / 2);

  await divide(ele, l, m);
  await divide(ele, m + 1, r);
  await merge(ele, l, m, r);
}
async function merge(ele, low, mid, high) {
  const n1 = mid - low + 1;
  const n2 = high - mid;

  let left = new Array(n1);
  let right = new Array(n2);

  for (let i = 0; i < n1; i++) {
    await new Promise((resolve) =>
      setTimeout(() => {
        resolve();
      }, 150)
    );

    ele[low + i].style.background = "orange";
    left[i] = ele[low + i].style.height;
  }
  for (let i = 0; i < n2; i++) {
    await new Promise((resolve) =>
      setTimeout(() => {
        resolve();
      }, 150)
    );

    ele[mid + 1 + i].style.background = "red";
    right[i] = ele[mid + 1 + i].style.height;
  }
  await new Promise((resolve) =>
    setTimeout(() => {
      resolve();
    }, 150)
  );
  let i = 0,
    j = 0,
    k = low;
  while (i < n1 && j < n2) {
    await new Promise((resolve) =>
      setTimeout(() => {
        resolve();
      }, 150)
    );
    // console.log("In merge while loop");
    // console.log(parseInt(left[i]), parseInt(right[j]));

    // To add color for which two r being compared for merging

    if (parseInt(left[i]) <= parseInt(right[j])) {
      // console.log("In merge while loop if");
      // color
      if (n1 + n2 === ele.length) {
        ele[k].style.background = "rgb(49, 226, 13)";
      } else {
        ele[k].style.background = "lightgreen";
      }

      ele[k].style.height = left[i];
      ele[k].childNodes[0].innerText = Math.floor(parseInt(left[i]) / 4);
      i++;
      k++;
    } else {
      // console.log("In merge while loop else");
      // color
      if (n1 + n2 === ele.length) {
        ele[k].style.background = "rgb(49, 226, 13)";
      } else {
        ele[k].style.background = "lightgreen";
      }
      ele[k].style.height = right[j];
      ele[k].childNodes[0].innerText = Math.floor(parseInt(right[j]) / 4);
      j++;
      k++;
    }
  }
  while (i < n1) {
    await new Promise((resolve) =>
      setTimeout(() => {
        resolve();
      }, 150)
    );
    // console.log("In while if n1 is left");
    // color
    if (n1 + n2 === ele.length) {
      ele[k].style.background = "rgb(49, 226, 13)";
    } else {
      ele[k].style.background = "lightgreen";
    }
    ele[k].style.height = left[i];
    ele[k].childNodes[0].innerText = Math.floor(parseInt(left[i]) / 4);
    i++;
    k++;
  }
  while (j < n2) {
    await new Promise((resolve) =>
      setTimeout(() => {
        resolve();
      }, 150)
    );
    // console.log("In while if n2 is left");
    // color
    if (n1 + n2 === ele.length) {
      ele[k].style.background = "rgb(49, 226, 13)";
    } else {
      ele[k].style.background = "lightgreen";
    }
    ele[k].style.height = right[j];
    ele[k].childNodes[0].innerText = Math.floor(parseInt(right[j]) / 4);
    j++;
    k++;
  }
}
