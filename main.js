// Created by iCodeArmenia



function send(){

var d = new Date();

var date = d.getDate();

var month = d.getMonth();

var year = d.getFullYear();

if (month<=9){

    month = "0"+month;

}else{

    month = month;  

}

var time = date+":"+month+":"+year;

var inp = document.getElementById("inp").value;

if (inp == ''){

    alert("Create a doing")

}else{

var date = document.createElement("span");

  var datetext = document.createTextNode(time);

  date.appendChild(datetext);

       var p = document.createElement("p");

  var node = document.createTextNode(inp);

var butt = document.createElement("button");

  var butttex = document.createTextNode("Delete");

  p.appendChild(node);


 butt.appendChild(butttex);

p.appendChild(butt);

  var d = document.getElementById("out");

  d.appendChild(date);

  d.appendChild(p);

  

  butt.onclick = function (){

     d.removeChild(p);

     d.removeChild(date);

  }

  

    }

}

