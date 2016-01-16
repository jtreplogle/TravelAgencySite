
var destinations = [];

	var singapore = {
		city: "Singapore",
		imgUrl: "http://phocus.com.sg/uploads/2010/02/MG_0940-Edit-2_s.jpg",
		description: "The fabulous location, family and child-friendly environment, and range of fun amenities make this vibrant hotel the ideal family getaway. Located at the heart of the action near Festive Walk and World Square, Festive Hotel puts you just minutes away from Universal Studios Singapore®, S.E.A. AquariumTM – the world’s largest aquarium, Adventure Cove WaterparkTM, and all-day dining, shopping and entertainment.",
		price: "Prices Starting at $1050",
		buttonLink: "booknow.html",
		buttonText: "I want this vacation"		
	};
destinations.push(singapore);	


		var hanoi = {
		city: "Hanio, Vietnam",
		imgUrl: "http://toureast.vn/files/tours/short-stay/ha-long-bay_360_360.jpg",
		description: "Accommodation in Vietnam ranges from simple dorm accommodation in backpacking hostels to world-class resorts, both in large cities and in popular coastal and rural destinations. This list presents the best luxury resorts in Vietnam, as rated by visitors, picked from an ever-growing selection of boutique hotel stays, luxury hotel hideaways and romantic retreats.",
		price: "Prices Starting at $1100",
		buttonLink: "booknow.html",
		buttonText: "I want this vacation"		
	};
destinations.push(hanoi);	



	var bangkok = {
		city: "Bangkok, Thailand",
		imgUrl: "http://phocus.com.sg/uploads/2010/02/MG_0940-Edit-2_s.jpg",
		description: "Golden palaces, floating markets, majestic porcelain-laid spires…you've never seen a capital city quite like Bangkok. Visit Pratunam or Siam Square for premium shopping, then unwind in the European-style gardens of Dusit. Thon Buri is home to the awesome Wat Arun temple, and over in Phra Nakhon, you’ll find the Wat Pho temple of the Reclining Buddha. Savor mango sticky rice at a food stall before taking in the gilded splendor of the Grand Palace.",
		price: "Prices Starting at $1250",
		buttonLink: "booknow.html",
		buttonText: "I want this vacation"		
	};
destinations.push(bangkok);	



// console.log("destinations", destinations);



var destinationElements = document.getElementsByClassName("javascript");
var theOneImLookingFor = destinationElements[0];

// console.log(theOneImLookingFor);

for (var i = 0; i < destinations.length; i++) {
var currentDestination = destinations[i]; 			  //switches items in array to variable	

// console.log(singapore.description);

var article = "<article id='destinations' class='destinations'>";
var section = "<section>";
var image = "<img src='" + currentDestination.imgUrl + "'>";
var h3 = "<h3>" + currentDestination.city + "</h3>";
var description = "<p>" + currentDestination.description + "</p></section><section>";
var h4 = "<h4>" + currentDestination.price + "</h4>";
var button = "<button><a href='" + currentDestination.buttonLink + "'>" + currentDestination.buttonText + "</a></button></section></article>";
    
theOneImLookingFor.innerHTML += article + section + image + h3 + description + h4 + button;














