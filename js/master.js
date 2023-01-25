$(document).ready(function () {

	//+++++++++++++++++ daten +++++++++++++++++++++++++++++
	let info = "";

	$.get({
		url: "user.json",
		dataType: "json"
	}).done(function (data) {
		console.log(data);
		let user = data.user;

		$.each(user, function (i, item) {
			info += "<ul class='accordion'>";
			info += "<li class='group-gender'>" + item.maennlich + "</li>";
			info += "<li class='group-name: " + item.name + "</li>";
			info += "<li class='group-vor: " + item.vorname + "</li>";
			info += "<li class='group-stadt: " + item.stadt + "</li>";
			info += "<li class='group-mail: " + item.email + "</li>";
			info += "<li class='group-pic: " + item.pic + "</li>";
			info += "<li class='group-info: " + item.kurze.info + "</li>";

			info += "<li class='list-group-item'><span class='mehr'>Info: </span><span class='info'>" + item.info + "</span></li>";
			info += "</ul>";
			//console.log(info);

		});
		$("#jsonDaten").html(info);
		//##########################
		$("#jsonDaten .mehr").css({
			"color": "#568cc6",
			"padding": "5px 20px 5px 0",
			"margin-top": "5px",
			"margin-right": "5px",
			"display": "inline-block",
			"cursor": "pointer",
		});


	})
		.fail((wert1, wert2, wert3) => {
			console.log(wert1 + "\n" + wert2 + "\n" + wert3);
		});



});//ende ready



//++++++++++++++++++++++++++++++++++++++++++++++


	//formulare
	$("#form")();
	//------
	$("#form").click(function (event) {
		event.preventDefault();
		$(this).next("form").animate({ "opacity": "toggle", "height": "toggle" }, 1000);
	});	
	//--------------------------------------------------


	//------------------------------------------------
	function createElement(element) {
		let msg1 = $(element).attr("title");
		$(element).after("<strong class='error'>" + msg1 + "</strong>");
		$(element).focus();
		$(element).parent().css("border", "solid 1px #dc3545");
	}

	function formAuswertung() {
		$('.error').hide();
		$('.error').remove();
		let anrede = $("#anrede").val();
		let nn = $("#nn").val();
		let vn = $("#vn").val();
		let ort = $("#ort").val();
		let plz = $("#plz").val();
		let str = $("#str").val();
		let mail = $("#mail").val();
		let pwd1 = $("#pwd1").val();
		let msg = "";

		let anredeReg = /^(herr|frau|divers)$/i;
		let nameReg = /^[a-z]+$/i;
		let plzReg = /^[0-9]{5}$/i;
		let strReg = /^[a-z]+\s\d+$/i;
		let mailReg = /^[a-z0-9]+@[a-z0-9]+\.[a-z]+$/i;

		if (anrede === "") {
			createElement("#anrede");
		}
		else if (!anredeReg.test(anrede)) {
			createElement("#anrede");
		}
		else if (nn === "") {
			createElement("#nn");
		}
		else if (!nameReg.test(nn)) {
			createElement("#nn");
		}
		else if (vn === "") {
			createElement("#vn");
		}
		else if (!nameReg.test(vn)) {
			createElement("#vn");
		}
		else if (ort === "") {
			createElement("#ort");
			$("#ort").autocomplete({
				source: myOrt
			});
		}
		/*else if(!nameReg.test(ort)){
		  createElement("#ort");
		}*/
		else if (plz === "") {
			createElement("#plz");
		}
		else if (!plzReg.test(plz)) {
			createElement("#plz");
		}
		else if (str === "") {
			createElement("#str");
		}
		else if (!strReg.test(str)) {
			createElement("#str");
		}
		else if (mail === "") {
			createElement("#mail");
		}
		else if (!mailReg.test(mail)) {
			createElement("#mail");
		}
		else if (pwd1 === "") {
			createElement("#pwd1");
		}
		else if (pwd1 !== pwd2) {
			createElement("#pwd2");
		}

	}
	$("#anmelden").click(function (e) {
		e.preventDefault();
		formAuswertung();
	});





});//ende ready