for (let i = 0; i < sessionStorage.length; i++) {
    let a = document.createElement("tr");
    a.innerHTML = sessionStorage.getItem("assignment");
    document.getElementById("tblassignments").appendChild(a);
}


function changeWindow(a){
    document.getElementById("div1").style.display ="none";
    document.getElementById("div2").style.display ="none";
    document.getElementById("div3").style.display ="none";

    document.getElementById("div"+a).style.display = "block";
}


//Assignments

function createAssignmentForm(){
    let f = document.createElement("form");
    f.setAttribute("class", "frmAssignment");
    f.setAttribute("id", "formthing")
    f.onsubmit = function yeah(){
        createAssignment();
    }

    let n = document.createElement("input");
    n.setAttribute("type", "text")
    n.setAttribute("name", "name");
    f.appendChild(n);

    let d = document.createElement("input");
    d.setAttribute("type", "date");
    d.setAttribute("name", "date");
    f.appendChild(d);

    for (let i = 1; i < 4; i++) {
        let b = document.createElement("label");
        b.innerHTML = "hi"

        let a = document.createElement("input");
        a.setAttribute("type", "radio");
        a.setAttribute("name", "importance");
        b.appendChild(a);
        f.appendChild(b);
    }
    let b = document.createElement("input");
    b.setAttribute("type", "submit");
    f.appendChild(b);

    document.getElementById("div3").appendChild(f);
}

function createAssignment(){

    let tr = document.createElement("tr");

    let td1 = document.createElement("td");
    let td2 = document.createElement("td");
    let td3 = document.createElement("td");
    let td4 = document.createElement("td");

    let td1lbl = document.createElement("p");
    td1lbl.innerHTML = "name"
    td1.appendChild(td1lbl);

    let td2lbl = document.createElement("p");
    td2lbl.innerHTML = bob[1];
    td2.appendChild(td2lbl);

    let td3lbl = document.createElement("p");
    td3lbl.innerHTML = bob[2];
    td3.appendChild(td3lbl);

    let td4btn = document.createElement("button");
    td4.appendChild(td4btn);

    tr.appendChild(td1);
    tr.appendChild(td2);
    tr.appendChild(td3);
    tr.appendChild(td4);

    document.getElementById("tblassignments").appendChild(tr);
    sessionStorage.setItem("assignment", tr.outerHTML);
}