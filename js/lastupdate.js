var mod = new Date(document.lastModified); 
var months = new Array("Jan","Feb","Mar","Apr","Maj","Jun","Jul","Aug","Sep","Okt","Nov","Dec"); 
var year = mod.getYear(); 
if (year < 100){ year += 2000 } 
if (year < 1000){ year += 1900 } 
document.getElementById("LastUpdate").innerHTML = " Uppdaterad " + mod.getDate() + "-" + mod.getMonth() + "-" + year;