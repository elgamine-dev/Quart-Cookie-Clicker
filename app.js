$(document).ready(function () {
	var nbClick = 0;
	var foo = ["deadpool ", "LukasCage", "Triceratops", "KyloRen"];
	$("img").click(function () {
		console.log("lilu");
		$("span").text(++nbClick);
		if (nbClick % 20 === 0) {
			alert(pseudoAleat);
		}

	});
});
