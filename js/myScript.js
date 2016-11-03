
function element(id){
  var obj = document.getElementById(id);
  if (obj == null) {
    alert(id + " is null");
  }
  return obj;
}

function showDiv(id) {
  element(id).style.display = "block";
}

function hideDiv(id) {
  element(id).style.display = "none";
}

function positionDiv(id, left, top) {
  var div = element(id);
  div.style.position = "absolute";
  div.style.left = left + "px";
  div.style.top = top + "px";
}



function initializePage (){

}


/* onclick, onchange, onkeypress, onkeyrelease, */
