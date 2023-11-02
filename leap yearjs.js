/*function leap(){

				var lyear = document.getElementById("in").value;

				if(lyear < 0){
					document.getElementsByTagName("p")[0].textContent = "Invalid Input";
					//alert("Invalid Input");
				}

				else if (((lyear % 4 == 0) && (lyear % 100 != 0)) || (lyear % 400 == 0)){
					document.getElementsByTagName("p")[0].textContent = "It is a leap year";
					//alert(lyear + " is a leap year");
				}			 

				else{
					document.getElementsByTagName("p")[0].textContent = "It is not a leap year";
					//alert(lyear + " is not a leap year");
				}					
			}*/


$(#butn).click(function() {
    var lyear = $("#in").val();
	if(lyear < 0){
					$("#para").html("Invalid Input");
					//alert("Invalid Input");
				}

				else if (((lyear % 4 == 0) && (lyear % 100 != 0)) || (lyear % 400 == 0)){
					$("#para").html("It is a leap year");
					//alert(lyear + " is a leap year");
				}			 

				else{
					$("#para").html("It is not a leap year");
					//alert(lyear + " is not a leap year");
});