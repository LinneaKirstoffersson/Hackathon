
function changeWindow(a){
    document.getElementById("div1").style.display ="none";
    document.getElementById("div2").style.display ="none";
    document.getElementById("div3").style.display ="none";

    document.getElementById("div"+a).style.display = "block";
}


//Assignments

let assignmentsArray;
if (sessionStorage.getItem("assignmentsArray")!== null) {
    assignmentsArray = JSON.parse(sessionStorage.getItem("assignmentsArray"));
} else {
    assignmentsArray =[];
}


for (let i = 0; i < assignmentsArray.length; i++) {
    let a = document.createElement("tr");
    a.getAttribute("class", "assignment");
    a.getAttribute("id", "assignment"+i);
    a.innerHTML = assignmentsArray[i];
    document.getElementById("tblassignments").appendChild(a);
}

function createAssignmentForm(){
    let f = document.getElementById("assignmentFormTemp");
    document.getElementById("div3").appendChild(f.content);
}

function createAssignment(){
    let a = document.getElementById("assignmentTemp");
    assignmentsArray.push(a.innerHTML);
    sessionStorage.setItem("assignmentsArray", JSON.stringify(assignmentsArray));
}

function removeAssignment(){
    assignmentsArray.splice(event.srcElement.parentNode.parentNode.id.substr(-1),1);
    sessionStorage.setItem("assignmentsArray", JSON.stringify(assignmentsArray));
    event.srcElement.parentNode.parentNode.remove();
}