
a = document.getElementById("take").value;
setTimeout (function(){
cookies.set("name",a);
},2000);
function alertCookie() {
document.getElementById("take1").value=cookies.get("name");
}
