$(document).ready(function () {
	//votre code
	// etape 1  j'ai  créer une variable à incrémenter 
	var cookie_miam_miam = 0;
	$("img").click(function () {
			console.log("jojo");
			$("span").text(++cookie_miam_miam);
		})
		// etape 2  je décide par la suite de  sélectioner la class cookie pour y apposer une fonction click
		// je décide maintenant  d'ajouter un condition if 
	if (cookie_miam_miam % 20 === 0) {
		alert("trouve une activité plus productive");
	}
});