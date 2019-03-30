// indexed db implementation
var para;
var paravalue;
var query=window.location.search.substring(1).split("?");
for(var i in query){
  para=query[i].split("=");
  paravalue=parseInt(para[1]);
}


var idb=window.indexedDB||window.mozIndexedDB||window.msIndexedDB||window.webkitIndexedDB;
if(!idb in window)
{

  console.log("indexedDB is not supported");
}
// IndexedDB creation
var request;
var store;
var open=idb.open("storeData",1);
console.log("IndexedDb is created");
open.onupgradeneeded=function (e){
  request=e.target.result;//(or)e.result;
  store=request.createObjectStore("formdata",{keyPath:"id",autoIncrement:true});
  console.log("store is created");
}
open.onerror=function(er){
  console.log("error occured");
}
open.onsuccess=function(e){
  request=e.target.result;
  var transaction=request.transaction("formdata","readwrite");
  store=transaction.objectStore("formdata");
  var info=store.get(paravalue);
  info.onsuccess=function(data){
    console.log(data);
    profile1(data.target.result);
    career(data.target.result);
  }
}
var profile=document.querySelector(".profile");
function profile1(p){
  var image=document.createElement("img");
  image.src="images/woman.svg";
  image.alt=p.name;
  profile.append(image);
  var h1=document.createElement("h1");
  h1.textContent=p.name;
  profile.append(h1);
  var h2=document.createElement("h2");
  h2.textContent=p.designation;
  profile.append(h2);
  var h3=document.createElement("h3");
  h3.textContent=p.emailid;
  profile.append(h3);
  var h4=document.createElement("h4");
  h4.textContent=p.phoneno;
  profile.append(h4);
  var h5=document.createElement("h4");
  h5.textContent=p.address;
  profile.append(h5);
}
var academic=document.querySelector(".academic");
function career(c1){
var h1=document.createElement("h1");
h1.textContent="Career Objective";
academic.append(h1);
var hr=document.createElement("hr");
academic.append(hr);
var info=document.createElement("info");
info.textContent=c1.career;
academic.append(info);
var head=document.createElement("h1");
head.textContent="Education Details";
academic.append(head);
var hr1=document.createElement("hr");
academic.append(hr1);
var table=document.createElement("table");
table.border="1.5";
var tr1="<tr><th>institute</th><th>branch</th><th>yop</th><th>percentage</th></tr>";
var tr2=" ";
for(var i in c1.education)
{
  tr2=tr2+"<tr><td>"+c1.education[i].institute+"</td><td>"+c1.education[i].branch+"</td><td>"+c1.education[i].yop+"</td><td>"+c1.education[i].percentage+"</td></tr>";
}
table.innerHTML=tr1+tr2;
academic.append(table);
var head1=document.createElement("h1");
head1.textContent="Skills";
academic.append(head1);
var hr2=document.createElement("hr");
academic.append(hr2);
var skills=document.createElement("skills");
skills.textContent=c1.skills;
academic.append(skills);
}
