var nombres = new Array();
nombres[0]= "Yaakov";
nombres[1]= "John";
nombres[2]= "Jen";
nombres[3]= "jason";
nombres[4]= "Paul";
nombres[5]= "frank";
nombres[6]= "Larry";
nombres[7]= "Paula";
nombres[8]= "laura";
nombres[9]= "jim";

for (var i = 0; i< nombres.length; i++){
	if (nombres[i].charAt(0)=="J" || nombres[i].charAt(0)==="j"){
		console.log("Goodbye " + nombres[i]);
	}
	else{
		console.log("Hello " + nombres[i]);
	}
};