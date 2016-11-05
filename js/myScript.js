
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

function main(){

}


/* onclick, onchange, onkeypress, onkeyrelease, */
