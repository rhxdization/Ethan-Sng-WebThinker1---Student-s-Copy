let validate = () => {
	alert("Test");
	let inputFirstName = document.getElementById("firstname");
	console.log("Name: " + inputFirstName.value);

	if (inputFirstName.value.length > 0) {
		inputFirstName.classList = "form-control is-valid";
		document.getElementById("firstname_e").classList = "text-danger d-none";
	}
	else {
		inputFirstName.classList = "form-control is-invalid"
		document.getElementById("firstname_e").classList = "text-danger";
		
	}
	if(document.getElementsByClassName("is-invalid"))
}


