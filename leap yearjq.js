$("#butn").click(function() {
	var lyear = $("#in").val();
	if(lyear < 0){
		$("#para").text("Invalid Input");
		
	} 

	else if (((lyear % 4 == 0) && (lyear % 100 != 0)) || (lyear % 400 == 0)){
		$("#para").text("It is a leap year");
					
	}			 

	else{
		$("#para").text("It is not a leap year");
	}
					
});