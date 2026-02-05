
function changeWindow(a){
    document.getElementById("div1").style.display ="none";
    document.getElementById("div2").style.display ="none";
    document.getElementById("div3").style.display ="none";

    document.getElementById("div"+a).style.display = "block";
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
    let a = document.createElement("tr");
    a.innerHTML ="<td>"+ document.getElementById("assname").value+"</td><td>"+ document.getElementById("assdate").value+"</td><td>importance</td><td><button onclick='removeAssignment()'>delete assignment</button></td>";
    a.getAttribute("class", "assignmenttablerow");
    assignmentsArray.push(a.innerHTML);
    localStorage.setItem("assignmentsArray", JSON.stringify(assignmentsArray));
    document.getElementById("assignmenttable").appendChild(a);
    document.getElementById("assname").value = "";
    document.getElementById("assdate").value = "";
    document.getElementById("assignmentform").style.display ="none";
    document.getElementById("assignmentbtn").style.display ='inline';
}
function removeAssignment(){
    assignmentsArray.splice(event.srcElement.parentNode.parentNode.id.substr(-1),1);
    localStorage.setItem("assignmentsArray", JSON.stringify(assignmentsArray));
    event.srcElement.parentNode.parentNode.remove();
}