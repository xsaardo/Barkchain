vetSearch = function () {
	petID = document.getElementById("petID").value; 

	// Use petID to query blockchain

	// Returned from blockchain
	petName = "Sparky";
	petInfo = "A pet or companion animal is an animal kept primarily for a person's company, protection, and/or entertainment rather than as a working animal, sport animal, livestock, or laboratory animal. Popular pets are often noted for their attractive appearances, and their loyal or playful personalities.Pets provide their owners (or guardians[1]) physical and emotional benefits. Walking a dog can supply both the human and pet with exercise, fresh air, and social interaction. Pets can give companionship to elderly adults who do not have adequate social interaction with other people, as well as to other people who are living alone. There is a medically approved class of therapy animals, mostly dogs or cats, that are brought to visit confined humans, such as children in hospitals or elders in nursing homes. Pet therapy utilizes trained animals and handlers to achieve specific physical, social, cognitive, and emotional goals with patients.The most popular pets are likely dogs and cats but people also keep house rabbits, ferrets; rodents such as gerbils, hamsters, chinchillas, fancy rats, and guinea pigs; avian pets, such as canaries, parakeets, corvids, parrots, and chickens; reptile pets, such as turtles, lizards and snakes; aquatic pets, such as goldfish, tropical fish and frogs; and arthropod pets, such as tarantulas and hermit crabs.Some scholars and animal rights organizations have raised concern over pet-keeping with regards to the autonomy and objectification of nonhuman animals"
	
	petimageURL = "https://out.reddit.com/t3_6nau74?url=https%3A%2F%2Fpbs.twimg.com%2Fprofile_images%2F849439989482049536%2FVKIs5a70.jpg&token=AQAAWSxxWQlC4IY4Hg6o7qqPm5OOwzIDNz7j8Vn48q4ZWejO_zhI&app_name=reddit.com";


	// Update DOM
	$("#petheader").append("ID: " + petID + " Name: " + petName);

	$("#petinfo").append("<img src='" + petimageURL+ "' style='width:304px;height:228px;''><br>")
	$("#petinfo").append(petInfo)
	$("#petinfoheader").show()

	$("#petforms").show()
}

submitMedicalForm = function() {

}

searchbyPetID = function() {

}