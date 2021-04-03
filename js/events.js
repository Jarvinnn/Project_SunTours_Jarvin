function submit() {
  alert("Bestelling verzonden!");
}

function selectedItem() {
  var d = document.getElementById("automerk");
  var displayText = d.options[d.selectedIndex].text;
  document.getElementById("txtvalue").value = displayText;
}

function showDate() {
  /*Maak Date variable*/
  var today = new Date();
  /*Maak variable met jaar maand en dag */
  var date = today.getFullYear() + '-' + (today.getMonth() + 1) + '-' + today.getDate();
  /*Maak variable met uur minuten en seconden */
  var time = today.getHours() + ":" + today.getMinutes() + ":" + today.getSeconds();
  /*Maak variable waar je de datum en tijd laat zien*/
  var dateTime = date + ' ' + time;
  /*Zet de data in "datum"*/
  document.getElementById("datum").innerHTML = dateTime;
}

function login() {
  alert("Welkom " + naam.value);
}