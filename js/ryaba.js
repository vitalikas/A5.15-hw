$(document).ready(init);

function init() {
	$("#button-fetch").click(createNewTale);
}

function createNewTale() {
  $.getJSON(urlTale, getTale);
}

const urlTale = "https://api.myjson.com/bins/jcmhn";

const fields = [
	"var1",
	"var2",
	"var3",
	"var4",
	"var5",
	"var6",
	"speach"
]

function getInputValues() {
	let obj = {};
	fields.forEach(function(field) {
		obj[field] = $("input[name=" + field + "]")[0].value
	});

	return obj;
}

function getTale(tale) {
	let newTale = "";
	let obj = getInputValues();
	

	tale["text"].forEach(function(item) {
		for (key in obj) {
			item = item.replace("{" + key + "}", obj[key]);
		}
		newTale = newTale + item + "<br>";
	});

	$("div#result").html(newTale);
}