function getInput(num)
{   
    var inp=document.getElementById("calc");
    inp.value +=num;
    inp.style.backgroundColor='rgb(38, 162, 184)'
}
function resetValue()
{
    var inp=document.getElementById("calc");
    inp.value="";
    inp.style.backgroundColor='gainsboro';
}
function getResult()
{  
    var inp=document.getElementById("calc");
    if(inp.value!="")
    inp.value=eval(inp.value);
    else
    alert("Please enter a value")
}
