var minutes = 1;
var people = 2;

function hang() {
  document
    .getElementsByClassName(
      "U26fgb JRY2Pb mUbCce kpROve GaONte Qwoy0d ZPasfd vzpHY"
    )[0]
    .click();
}
function limit() {
  console.log(
    parseInt(document.getElementsByClassName("rua5Nb")[0].innerText[1])
  );
  if (
    parseInt(document.getElementsByClassName("rua5Nb")[0].innerText[1]) < people
  ) {
    hang();
  }
}

setTimeout(hang, minutes * 60000);
setInterval(limit, 1000);