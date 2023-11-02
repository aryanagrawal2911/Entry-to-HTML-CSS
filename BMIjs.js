			function bmi(){

				var weight = document.getElementById("wei").value;
				var height = document.getElementById("hei").value;
				
				var bm = (1.3 * weight) / (height ** 2.5);
				document.getElementsByTagName("p")[0].textContent = "BMI is : " + bm;

				if(bm < 18.5)	m = "Underweight";

				else if((bm >= 18.5) && (bm < 25))	m = "Healthy";

				else if((bm >= 25) && (bm < 30))	m = "Overweight";


				else if((bm >= 30) && (bm < 40))	m = "Obese";

				else if(bm >= 40)	m = "Morbidly Obese";

				document.getElementsByTagName("p")[1].textContent = m;
			}