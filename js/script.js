var ref = new Firebase("https://menu-45dc2-default-rtdb.firebaseio.com") ;



ref.child("raciones").orderByChild("name").on("child_added", function(snap) {
	
  var comment = snap.val() ;
  addComment(comment.name);
});

function addComment(name) {
  var comments = document.getElementById("comments");
	
  comments.innerHTML = "<p>" + name + "</p>" + comments.innerHTML ;}




ref.child("segundos").orderByChild("name2").on("child_added", function(snap) {
	
  var comment2 = snap.val() ;
  addComment2(comment2.name2);
});

function addComment2(name2) {
  var segundos = document.getElementById("segundos");
	
  segundos.innerHTML = "<p>" + name2 + "</p>" + segundos.innerHTML ;}





ref.child("finde").orderByChild("name2").on("child_added", function(snap) {
	
  var comment3 = snap.val() ;
  addComment3(comment3.finde);
});

function addComment3(finde) {
  var findesem = document.getElementById("findesem");
	
  findesem.innerHTML = "<p>" + finde + "</p>" + findesem.innerHTML ;}





ref.child("viernes").orderByChild("name2").on("child_added", function(snap) {
	
  var comment4 = snap.val() ;
  addComment4(comment4.viernes);
});

function addComment4(viernes) {
  var viernes2 = document.getElementById("viernes");
	
  viernes2.innerHTML = "<p>" + viernes + "</p>" + viernes2.innerHTML ;}





