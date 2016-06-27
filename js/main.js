$(document).ready(function () {

	$(document).keydown( key => {
    $(".whichKey").text(key.which);
	});
});