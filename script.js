let name = document.getElementById("countrydata");
let search = document.getElementById("submit");
let request = new XMLHttpRequest();
let process = search.addEventListener('click',function(){
  request.open("Get",`https://restcountries.com/v3.1/name/${name.value}?fullText=true`,true)
  request.send();
  request.addEventListener("load",function(){
   let data = JSON.parse(request.responseText);
   console.log(request.responseText);
   document.getElementById("countryname").innerHTML=data[0].name.common;
   document.getElementById("flag").setAttribute('src',data[0].flags.png);
   document.getElementById("capital").innerHTML="<b>Capital:</b>"+" "+data[0].capital;
   document.getElementById("continent").innerHTML="<b>Continent:</b>"+" "+data[0].continents;
   document.getElementById("population").innerHTML="<b>Population:</b>"+" "+data[0].population;
   const [k1] = Object.keys(data[0].currencies) 
   document.getElementById("currency").innerHTML="<b>Currency:</b>"+" "+data[0].currencies[k1].name;
   const keys= Object.keys(data[0].languages);
   let lang="";
   keys.forEach(function(x){
  lang=lang+data[0].languages[x]+" ";
  })
   document.getElementById("languages").innerHTML="<b>Languages:</b>"+" "+lang;


});
});