 var vHistorial = false;

 function afterLoading() {
 	$("#loading_container").fadeOut(0);
 	$("#authory").fadeOut(0);
 	$("#logo_container").animate({
 		"margin-top": "1em"
 	}, 1500);
 	$("#logo_container img").animate({
 		"width": "100px",
 		"height": "100px"
 	}, 1500);
 	$("#logo_container h3").animate({
 		"font-size": "1.5em"
 	}, 1500, function() {
 		$("#signin").fadeIn(500);
 	});
 }

$(document).ready(function() {
 	setTimeout(afterLoading, 2000);

    $('ul.tabs').tabs('select_tab', 'login');

     $("#registerform_submit").on("click", function(e) {
	 	Materialize.toast('Registre efectuat correctament', 4000);
	 	$("#loginform_user").val($("#registerform_user").val());
	 	$("#loginform_pass").val($("#registerform_pass").val());
	 	$('ul.tabs').tabs('select_tab', 'login');
	 	Materialize.updateTextFields();
 	 });
 	 $("#loginform_submit").on("click", function(e) {
	 	Materialize.toast('Accedint al teu compte...', 2000);
	 	$("#logo_container").fadeOut(1000);
	 	$("#logo_container h3").fadeOut(1000);
	 	$("#logo_container img").fadeOut(1000);
	 	$("#signin").fadeOut(1000);
	 	$('select').material_select();
	 	setTimeout(function() { $("#homepage").fadeIn(1000); }, 1000);
 	 });
 	 $("#historial_button").on("click", function(e) {
 	 	if(vHistorial) {
 	 		$("#historial").animate({
 	 			"height": "0px"
 	 		}, 1000, function() { $("#historial").fadeOut(0); });
 	 	} else {
 	 		$("#historial").fadeIn(0);
 	 		$("#historial").animate({
 	 			"height": "800px"
 	 		});
 	 	}
 	 	vHistorial = !vHistorial;
 	 });

 	 $('.modal-trigger').leanModal();

	  noUiSlider.create(document.getElementById("rangeAutors"), {
	   start: [20, 80],
	   connect: true,
	   step: 1,
	   range: {
	     'min': 0,
	     'max': 100
	   },
	   format: wNumb({
	     decimals: 0
	   })
	  });

	  noUiSlider.create(document.getElementById("rangeConferencies"), {
	   start: [20, 80],
	   connect: true,
	   step: 1,
	   range: {
	     'min': 0,
	     'max': 100
	   },
	   format: wNumb({
	     decimals: 0
	   })
	  });

	  noUiSlider.create(document.getElementById("rangeArticles"), {
	   start: [20, 80],
	   connect: true,
	   step: 1,
	   range: {
	     'min': 0,
	     'max': 100
	   },
	   format: wNumb({
	     decimals: 0
	   })
	  });

	  noUiSlider.create(document.getElementById("rangeTermes"), {
	   start: [20, 80],
	   connect: true,
	   step: 1,
	   range: {
	     'min': 0,
	     'max': 100
	   },
	   format: wNumb({
	     decimals: 0
	   })
	  });

 });