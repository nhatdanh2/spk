// script.js
const getData = async () => {
	try {
	  const resp = await fetch('https://api.sampleapis.com/coffee/hot');
	  const json = await resp.json();
	  console.log(json);
	} catch (error) {
	  console.error("Error fetching data:", error);
	}
  }
  
  const search = () => {
	const searchTerm = document.getElementById('searchInput').value.toLowerCase();
  
	// Perform your search logic here using the searchTerm
  
	// For now, let's just log the search term
	console.log('Search term:', searchTerm);
  
	// Call your getData function here or modify the logic as needed
	getData();
  }
