$(document).ready(function () {
			var nbClick = 0;
			$("img").click(function () {
					console.log("lilu");
					$("span").text(++nbClick);
					if (nbClick % 20 === 0) {
						alert(pseudoAleat);
						var foo = ["deadpool ", "LukasCage", "Triceratops", "KyloRen"];
					})
			});