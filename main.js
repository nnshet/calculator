function reset()
{
document.getElementById("exp").value="";
}
function append(val)
{
document.getElementById("exp").value+=val;
}
function result() 
{ 
 document.getElementById("exp").value=eval(document.getElementById("exp").value)
 
 
}  
