async function Heapfiy(n, i, d) {
	let largest = i;
	let l = 2 * i + 1; // lft
	let r = 2 * i + 2; // rgt
	let curr_id = bars[i].split('id="')[1].split('"')[0];
	let nxt_ele;
	let id3;

	document.getElementById(curr_id).style.backgroundColor = selected;
	if (r < n) {
		id3 = bars[r].split('id="')[1].split('"')[0];
		document.getElementById(id3).style.backgroundColor = chng;
	}
	if (l < n) {
		nxt_ele = bars[l].split('id="')[1].split('"')[0];
		document.getElementById(nxt_ele).style.backgroundColor = chng;
	}
	await Sleep(d / 3.0)
	if (l < n && parseInt(bars[l].split(/[:%]/)[1]) > parseInt(bars[largest].split(/[:%]/)[1]))
		largest = l;
	if (r < n && parseInt(bars[r].split(/[:%]/)[1]) > parseInt(bars[largest].split(/[:%]/)[1]))
		largest = r;

	if (largest != i) {
		let t = bars[i]; bars[i] = bars[largest]; bars[largest] = t;
		container.innerHTML = bars.join(' ');
		document.getElementById(curr_id).style.backgroundColor = selected;
		let sound = MapRange(document.getElementById(curr_id).style.height.split('%')[0], 2, 100, 500, 1000);
		beep(100, sound, d)
		if (r < n) document.getElementById(id3).style.backgroundColor = chng;
		if (l < n) document.getElementById(nxt_ele).style.backgroundColor = chng;
		await Sleep(d / 3.0)
		container.innerHTML = bars.join(' ');
		await Heapfiy(n, largest, d);
	}
	container.innerHTML = bars.join(' ');
}


async function HeapSort() {
	let delay = Disable_The_Input();
	let n = bars.length;
	for (let i = n / 2 - 1; i >= 0; i--) // Build the heap
		await Heapfiy(n, i, delay);

	for (let i = n - 1; i >= 0; i--) {
		let t = bars[0]; // Swaping
		bars[0] = bars[i];
		bars[i] = t;

		container.innerHTML = bars.join(' ');
		await Heapfiy(i, 0, delay);
	}
	Finished_Sorting();
} 
