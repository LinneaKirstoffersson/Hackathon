const mainarray=[];
mainarray.push(document.getElementById("div1"));
mainarray.push(document.getElementById("div2"));
mainarray.push(document.getElementById("div3"));



function myfunction(a){
    mainarray.forEach(i => {
        i.style.display ="none";
    });

    document.getElementById("div"+a).style.display = "inline-block";


}