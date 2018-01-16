function validateForm() {
	var user = document.forms["myForm"]["user"].value;
	var pass = document.forms["myForm"]["pass"].value;

	if (user == ""||pass == ""||) {
		alert("Required fields must not be empty");
		return false;
	}
}
