$(document).ready(function () {
	var nbClick = 0;
	$("img").click(function () {
		console.log("lilu");
		$("span").text(++nbClick);
		if (nbClick % 20 === 0) {
			alert("trouve une activité plus productive");
		}
	})
});