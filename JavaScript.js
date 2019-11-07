var inputdata;
var checkbox;
var li;
var labelptr;
var ul;
function createlist()
{

    inputdata = document.getElementById("data").value;

     ul = document.getElementById("list");
    checkbox = document.createElement("input");
    checkbox.type="checkbox";    
    li = document.createElement("li");
    div =document.createElement("div");
    div.setAttribute("class","division");
    var cross = document.createElement("button");
    cross.innerHTML = "X";
    labelptr = document.createElement("label");
    labelptr.innerHTML = inputdata;
     document.getElementById("data").value="";
    checkbox.onclick = function () {
console.log(this);
       console.log(this.nextSibling);
    if(this.checked==true)
        {

            this.nextSibling.setAttribute("class", "checked");
        }
    else
        { 
            this.nextSibling.setAttribute("class","unchecked");
        }
    }
    div.appendChild(checkbox);
    div.appendChild(labelptr);
    div.appendChild(cross);
    li.appendChild(div);
    ul.appendChild(li);
   // checkbox.oninput=strikefn(this);
        cross.onclick=function()
        {
           this.parentNode.parentNode.parentNode.removeChild(this.parentNode.parentNode);

        }

}

function deletelist()
{
    div.parentNode.parentNode.removeChild(li);
while (ul.firstChild) {
    ul.removeChild(ul.firstChild);
}
}
