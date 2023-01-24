$(document).ready(function(){
	//++++++++++++++++++++++++++++++++++++++++++++++
	//formulare
	$("#form form").hide();
	//------
	$("#form h2").click(function(event){
		event.preventDefault();
		$(this).next("form").animate({"opacity":"toggle","height":"toggle"},1000);
	});
	//Werte für ort------
	var werte = ["Walddorf","Köln","Deggendorf","Braunschweig","Hamburg","Hannover","Zwickau","Dortmund","Gladbach","Leipzig","Münster","Stuttgart"];
	$("#ort").autocomplete({ source: werte});
//--------------------------------------------------
let myOrt = [
  "Aachen",
  "Aschaffenburg",
  "Berlin",
  "Bochum",
  "Bocholt",
	"Braunschweig",
  "Bremen",
  "Chemnitz",
  "Dortmund",
  "Düsseldorf",
	"Gladbach",
  "Göttingen",
  "Hamburg",
  "Hannover",
  "Köln",
  "Leipzig",
  "München",
  "Stuttgart",
	];
	
	//------------------------------------------------
	function createElement(element) {
	let msg1 = $(element).attr("title");
	$(element).after("<strong class='error'>"+msg1+"</strong>");
	$(element).focus();
	$(element).parent().css("border","solid 1px #dc3545");
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
	let pwd2 = $("#pwd2").val();
	let msg = "";
	
	let anredeReg = /^(herr|frau|divers)$/i;
	let nameReg = /^[a-z]+$/i;
	let plzReg = /^[0-9]{5}$/i;
	let strReg = /^[a-z]+\s\d+$/i;
	let mailReg = /^[a-z0-9]+@[a-z0-9]+\.[a-z]+$/i;

	if(anrede === ""){
		createElement("#anrede");
	}
	else if(!anredeReg.test(anrede)){
      createElement("#anrede");
 }
	else if(nn === ""){
		createElement("#nn");
	}
	else if(!nameReg.test(nn)){
      createElement("#nn");
	}
	else if(vn === ""){
		createElement("#vn");
	}
	else if(!nameReg.test(vn)){
      createElement("#vn");
	}
	else if(ort === ""){
		createElement("#ort");
		$("#ort").autocomplete({
			source: myOrt
		});
	}
	/*else if(!nameReg.test(ort)){
      createElement("#ort");
	}*/
	else if(plz === ""){
		createElement("#plz");
	}
	else if(!plzReg.test(plz)){
    createElement("#plz");
	}
	else if(str === ""){
		createElement("#str");
	}
	else if(!strReg.test(str)){
    createElement("#str");
	}
	else if(mail === ""){
		createElement("#mail");
	}
	else if(!mailReg.test(mail)){
    createElement("#mail");
	}
	else if(pwd1 === ""){
		createElement("#pwd1");
	}
	else if(pwd1 !== pwd2){
    createElement("#pwd2");
	}
	
}
$("#anmelden").click(function(e){
	e.preventDefault();
	formAuswertung();
});
	
	
	
	
	
});//ende ready