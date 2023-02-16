const options = {
	method: 'GET',
	headers: {
		'X-RapidAPI-Key': '6c44de9273msh0850216d0ca870fp14ceeejsnc7d5412f7757',
		'X-RapidAPI-Host': 'imdb8.p.rapidapi.com'
	}
};

window.onload = async function () {
	async function fetchMembers(url) {
		const response = await fetch(url, options);
		var data = await response.json();
		ProcessData(data.d);
	}
	fetchMembers('https://imdb8.p.rapidapi.com/auto-complete?q=ohmygod');
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
