$(document).ready(function () {
	//votre code
	// etape 1  j'ai sé
	var increment_miam = 0;
	$("#cake-is-a-lie").click(function () {
		increment_miam++;
		$(".main").text(increment_miam)
	});
});