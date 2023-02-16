const options = {
	method: 'GET',
	headers: {
		'X-RapidAPI-Key': '6c44de9273msh0850216d0ca870fp14ceeejsnc7d5412f7757',
		'X-RapidAPI-Host': 'imdb8.p.rapidapi.com'
	}
};
const movieSearchBox=document.getElementById("movie-serach-box");
const movieSearchButton=document.getElementById("searchButton");
const spinner=document.getElementById('loaderSpinner');


window.onload = async function () {
	async function fetchMembers(url) {
		spinner.classList.remove('display-none');
		movieSearchButton.classList.add('display-none');
		const response = await fetch(url, options);
		var data = await response.json();
		spinner.classList.add('display-none');
		movieSearchButton.classList.remove('display-none');
		ProcessData(data.d);
	}
	if(movieSearchButton){
		movieSearchButton.addEventListener('click',async function(){
			if(movieSearchBox && movieSearchBox.value){
				fetchMembers(`https://imdb8.p.rapidapi.com/auto-complete?q=${movieSearchBox.value}`);
			}
		})
	}
};


function ProcessData(info) {
	console.log(info);
	for (let i = 0; i < info.length; i++) {
		// console.log(info[i]);
		if (info[i].i) {
			var imgUrl = info[i].i.imageUrl;
			console.log(imgUrl)
		}
	}
}



