
function changeWindow(a){
    document.getElementById("div1").style.display ="none";
    document.getElementById("div2").style.display ="none";
    document.getElementById("div3").style.display ="none";

    document.getElementById("div"+a).style.display = "block";
}
//Flash cards
let flashcardsArray;
if (localStorage.getItem("flashcardsArray")!== null) {
    flashcardsArray = JSON.parse(localStorage.getItem("flashcardsArray"));
} else {
    flashcardsArray =[];
}

for (let i = 0; i < flashcardsArray.length; i++) {
    let a = document.createElement("div");
    a.innerHTML = flashcardsArray[i];
    a.getAttribute("id", "flashcards"+i);
    a.classList.add("flashcard");
    document.getElementById("flashcards").appendChild(a);
}
function createFlashcards(){
    let a = document.createElement("div");

    
    a.innerHTML = "<div><table class='hiddentable'></table></div><div id ="+document.getElementById("flashcardstxt").value+"><button onclick='useFlashcards();'>Use flashcards</><button onclick='editFlashcards();'>Edit flashcards</><button onclick='removeFlashcards();'>Remove pile</></div>";
    a.classList.add("flashcard");
    document.getElementById("flashcards").appendChild(a);
    flashcardsArray.push(a.innerHTML);
    localStorage.setItem("flashcardsArray", JSON.stringify(flashcardsArray));
}
const cur = {
    floo: "q",    
    get flash() {
      return this.floo;
    },
    set flash(flash) {
        this.floo = flash;
      }
  };
function useFlashcards(){
    let h = event.target.parentNode.parentNode.id;
    cur.flash = h;
    const b = event.srcElement.parentNode.parentNode.firstChild.firstChild.innerHTML;
    let a =document.getElementById("flashcardsuse");
    a.innerHTML = "<p></p><p class='answer'></p><div><button onclick='previousSlide();'>Previous</button><button onclick='revealAnswer();'>Reveal</button><button onclick='nextSlide();'>Next</button><button onclick='finishCards();'>Finish</button></div>";
    a.style.display = "inline-block";
    document.getElementById("flashcards").style.display = "none"
    flashSlide(0);

}
function flashSlide(a){

    const b = document.getElementById("flashcardsuse");
    b.childNodes[0].innerHTML = document.getElementById(cur.flash).firstChild.firstChild.childNodes[a].childNodes[0].innerhtml;
    b.childNodes[1].innerHTML = document.getElementById(cur.flash).firstChild.firstChild.childNodes[a].childNodes[1].innerhtml;
}
function  previousSlide(){

}
function nextSlide(){
    event.srcElement.parentNode
}
function revealAnswer(){
    let a =event.srcElement.parentNode.parentNode.childNodes[1];
    if (a.style.display == "none") {
        a.style.display = "block";
    } else {
        a.style.display = "none";
    }
}
function finishCards(){
    document.getElementById("flashcardsuse").style.display = "none";
    document.getElementById("flashcards").style.display = "flex"
}
function editFlashcards(){
    document.getElementById("flashcardsedit").style.display ="inline-block";
    document.getElementById("flashcardsedit").getElementsByTagName("p")[0].innerHTML = event.srcElement.parentNode.id;
    document.getElementById("flashcardstbl").innerHTML = event.srcElement.parentNode.parentNode.firstChild.firstChild.innerHTML;
}
function saveFlashcards(){

    let a = document.getElementById("flashcardstbl").innerHTML;
    let b =document.getElementById(event.srcElement.parentNode.getElementsByTagName("p")[0].innerHTML).parentNode;
    let c = b.innerHTML;
    b.firstChild.firstChild.innerHTML = a;
    flashcardsArray.splice(flashcardsArray.indexOf(c),1, b.innerHTML);
    localStorage.setItem("flashcardsArray", JSON.stringify(flashcardsArray));
    document.getElementById("flashcardsedit").getElementsByTagName("p")[0].innerHTML = "";
    document.getElementById("flashcardsedit").style.display = "none";
}

function addFlashcard(){
    let a = document.createElement("tr")
    a.innerHTML = "<td>"+document.getElementById("firstside").value+"</td><td>"+document.getElementById("secondside").value+"</td><td><button onclick ='removeFlashcard();'></></td>";
    document.getElementById("flashcardstbl").appendChild(a);
    document.getElementById("firstside").value = "";
    document.getElementById("secondside").value = "";
}
function removeFlashcards(){
    flashcardsArray.splice(event.srcElement.parentNode.parentNode.id.substr(-1),1);
    localStorage.setItem("flashcardsArray", JSON.stringify(flashcardsArray));
    event.srcElement.parentNode.parentNode.remove();
}



//Assignments

let assignmentsArray;
if (localStorage.getItem("assignmentsArray")!== null) {
    assignmentsArray = JSON.parse(localStorage.getItem("assignmentsArray"));
} else {
    assignmentsArray =[];
}


for (let i = 0; i < assignmentsArray.length; i++) {
    let a = document.createElement("tr");
    a.innerHTML = assignmentsArray[i];
    a.getAttribute("id", "assignment"+i);
    document.getElementById("assignmenttable").appendChild(a);
}
function createAssignment(){
    const assname = document.getElementById("assname");
    const assdate = document.getElementById("assdate");
    const assimp = document.getElementById("assimp");
    if (assname == ""||assdate.value == "") {
        document.getElementById("asserr").style.display = "inline";
    } else{
        let a = document.createElement("tr");
        a.innerHTML ="<td>"+ assname.value+"</td><td>"+ assdate.value+"</td><td>"+assimp.value+"</td><td><button onclick='removeAssignment()'>Delete assignment</button></td>";
        a.getAttribute("class", "assignmenttablerow");
        assignmentsArray.push(a.innerHTML);
        localStorage.setItem("assignmentsArray", JSON.stringify(assignmentsArray));
        document.getElementById("assignmenttable").appendChild(a);
        assname.value = "";
        document.getElementById("assdate").value = "";
        document.getElementById("assignmentform").style.display ="none";
        document.getElementById("assignmentbtn").style.display ='inline';
        document.getElementById("asserr").style.display = "none";
    }
}
function removeAssignment(){
    assignmentsArray.splice(event.srcElement.parentNode.parentNode.id.substr(-1),1);
    localStorage.setItem("assignmentsArray", JSON.stringify(assignmentsArray));
    event.srcElement.parentNode.parentNode.remove();
}