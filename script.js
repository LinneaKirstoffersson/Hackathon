var assignmentamount;

if (sessionStorage.length <2) {
    assignmentamount = 0;

} else{
    assignmentamount = sessionStorage.getItem("assignamount");
}

function changeWindow(a){
    document.getElementById("div1").style.display ="none";
    document.getElementById("div2").style.display ="none";
    document.getElementById("div3").style.display ="none";

    document.getElementById("div"+a).style.display = "block";
}


//Assignments

for (let i = 0; i < sessionStorage.length; i++) {
    let a = document.createElement("tr");
    a.getAttribute("class", "assignment");
    a.innerHTML = sessionStorage.getItem("id"+assignmentamount);
    document.getElementById("tblassignments").appendChild(a);
}

function createAssignmentForm(){
    let f = document.getElementById("assignmentFormTemp");
    document.getElementById("div3").appendChild(f.content);
}

function createAssignment(){
    assignmentamount++;
    let a = document.getElementById("assignmentTemp");
    let clon = a.content.cloneNode(true);
    a.innerHTML.id = "id"+ assignmentamount;
    document.getElementById("tblassignments").appendChild(clon);
    sessionStorage.setItem(a.innerHTML.id, a.innerHTML);
    sessionStorage.setItem("assignamount", assignmentamount)
}

function removeAssignment(){
    sessionStorage.removeItem(event.srcElement.parentNode.parentNode.id);
    event.srcElement.parentNode.parentNode.remove();
    
}