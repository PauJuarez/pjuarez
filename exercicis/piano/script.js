let notes=[];
document.getElementById("notes").innerText = "Notas reproducidas: ";
function playMus(e){
    e.style.background="red";
    let nota = e.innerHTML;
    var audio = new Audio("media/"+nota+'.mp3');
    audio.play();
    notes.push(nota);
    document.getElementById("notes").innerText = "Notas reproducidas: " + notes.join(", ");
}
function playArray() {
    notes.forEach(function(nota, index) {
        var audio = new Audio("media/" + nota + ".mp3");
        setTimeout(function() {
            audio.play();
        }, index * 1000);
    });
}
function deletePlayArray() {
    notes = []; 
    document.getElementById("notes").innerText = "Notas reproducidas: ";
}