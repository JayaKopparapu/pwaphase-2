function submitdata(){
  var career=document.querySelector("#career").value;
  var name=document.querySelector("#name").value;
  var designation=document.querySelector("#designation").value;
  var emailid=document.querySelector("#emailid").value;
  var phoneno=document.querySelector("#phoneno").value;
  var address=document.querySelector("#address").value;
  var ginstitute=document.querySelector("#ginstitute").value;
  var gbranch=document.querySelector("#gbranch").value;
  var gyop=document.querySelector("#gyop").value;
  var gpercentage=document.querySelector("#gpercentage").value;
  var iinstitute=document.querySelector("#iinstitute").value;
  var ibranch=document.querySelector("#ibranch").value;
  var iyop=document.querySelector("#iyop").value;
  var ipercentage=document.querySelector("#ipercentage").value;
  var sinstitute=document.querySelector("#sinstitute").value;
  var sbranch=document.querySelector("#sbranch").value;
  var syop=document.querySelector("#syop").value;
  var spercentage=document.querySelector("#spercentage").value;
  var skills=document.querySelector("#skills").value;
// indexed db implementation
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
  store.put({
    career:career,
    name:name,
    designation:designation,
    emailid:emailid,
    phoneno:phoneno,
    address:address,
    education:[
    {
    institute:ginstitute,
    branch:gbranch,
    yop:gyop,
    percentage:gpercentage
  },
  {
    institute:iinstitute,
    branch:ibranch,
    yop:iyop,
    percentage:ipercentage
  },
  {
    institute:sinstitute,
    branch:sbranch,
    yop:syop,
    percentage:spercentage
  },
],
     skills:skills
  });
}





window.open("index.html");
}
