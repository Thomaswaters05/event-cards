

// Create a new card in the DOM
function createNewBox (){
  var box = document.createElement("textarea");
  box.rows = 10;
  box.cols = 30;
  document.getElementById("textboxParent").appendChild
  (box);
}

//When the user clicks delete button only containing card should be deleted
var parent = document.getElementById("textboxParent");

function deleteNewBox() {
  parent.removeChild(parent.firstChild);
}

