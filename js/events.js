function submit() {
  alert("Bestelling verzonden!");
}

function selectedItem() {
  var d = document.getElementById("automerk");
  var displayText = d.options[d.selectedIndex].text;
  document.getElementById("txtvalue").value = displayText;
}

function showDate() {
  var today = new Date();

  var date = today.getFullYear() + '-' + (today.getMonth() + 1) + '-' + today.getDate();

  var time = today.getHours() + ":" + today.getMinutes() + ":" + today.getSeconds();

  var dateTime = date + ' ' + time;

  document.getElementById("datum").innerHTML = dateTime;
}

function login() {
  alert("Welkom " + naam.value);
}