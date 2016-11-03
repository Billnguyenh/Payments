
function element(id){
  var object = document.getElementById(id);
  if (object == null) {
    alert(id + " is null");
  }
  return object;
}

document.onLoad = function (){

  element("tevora_btn").onClick = function () {
    alert("hi");
  }



}
