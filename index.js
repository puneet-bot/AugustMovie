const options = {
	method: 'GET',
	headers: {
		'X-RapidAPI-Key': '6c44de9273msh0850216d0ca870fp14ceeejsnc7d5412f7757',
		'X-RapidAPI-Host': 'imdb8.p.rapidapi.com'
	}
};
const movieSearchBox = document.getElementById("movie-serach-box");
const movieSearchButton = document.getElementById("searchButton");
const spinner = document.getElementById('loaderSpinner');
var movieString = "";
var counter=1;


window.onload = async function () {
	localStorage.clear();
	counter=1;
	async function fetchMembers(url) {
		spinner.classList.remove('display-none');
		movieSearchButton.classList.add('display-none');
		const response = await fetch(url, options);
		var data = await response.json();
		// localStorage.setItem('MovieImages',data.json());
		spinner.classList.add('display-none');
		movieSearchButton.classList.remove('display-none');
		// console.log(data.d)
		// localStorage.setItem('Images',data.d);
		ProcessData(data.d);
		// const y=localStorage.getItem('MovieImages');
		return data;
	}
	if (movieSearchButton) {
		movieSearchButton.addEventListener('click', async function () {
			if (movieSearchBox && movieSearchBox.textContent) {
				fetchMembers(`https://imdb8.p.rapidapi.com/auto-complete?q=${movieSearchBox.value}`);
			}
		})
	}
	var counter = 5;
	movieSearchBox.addEventListener('keyup', async function (e) {
		console.log(e.keyCode);
		if (e.keyCode == 8) {
			if (movieString) {
				movieString = movieString.substring(0, movieString.length - 1);
				return;
			}
		}
		if (e.keyCode == 20)
			return;
		if (movieString.length > 4) {
			console.log(movieSearchBox.textContent);
			const z = (await fetchMembers(`https://imdb8.p.rapidapi.com/title/find?q=${movieSearchBox.textContent}`));
			console.log(z);

			for (i = 0; i < z.results.length; i++) {
				console.log(z.results[i].title);
				if (z.results[i].title) {
					if (counter > 0) {
						var k = document.createElement('div');
						k.textContent = z.results[i].title;
						k.style.color = "white";
						k.style.fontSize = "20px";
						k.style.position = "relative";
						k.style.zIndex = "1000";
						k.contentEditable = "false";
						movieSearchBox.append(k);
						counter--;
						movieSearchButton.style.display = "none";
					}
				}
			}
		} else if (movieString.length<=4) {
			movieString+=e.key;
			console.log(movieString);
		}
		else {
			return;
		}

	})

};



function ProcessData(info) {
	console.log(info);
	for (let i = 0; i < info.length; i++) {
		// console.log(info[i]);
		if (info[i].i) {
			//string Interpolation ES6 
			// "Image-"+variablename....    Image-3
			//`Image-${variablename}`....   Image-3
		localStorage.setItem(`Image-${counter}`,info[i].i.imageUrl);
		++counter;
			var imgUrl = info[i].i.imageUrl;
			console.log(imgUrl);
		}
	}
}



