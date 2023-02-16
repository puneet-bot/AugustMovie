const options = {
	method: 'GET',
	headers: {
		'X-RapidAPI-Key': '6c44de9273msh0850216d0ca870fp14ceeejsnc7d5412f7757',
		'X-RapidAPI-Host': 'imdb8.p.rapidapi.com'
	}
};

window.onload=async function(){
    async function fetchMembers(url) {
        const response = await fetch(url,options);
        var data = await response.json();
        console.log(data);
    }
    fetchMembers('https://imdb8.p.rapidapi.com/auto-complete?q=Harry%20Potter');
};