//variable
const generalBtn= document.getElementById("general");
onst politiqueBtn= document.getElementById("politique");
onst sportsBtn= document.getElementById("sports");
onst cultureBtn= document.getElementById("culture");
onst breveBtn= document.getElementById("breve");
onst programmationBtn= document.getElementById("programmation");
onst searchBtnBtn= document.getElementById("searchBtn");


const newsQuery= document.getElementById("newsQuery");
const newsType= document.getElementById("newsType");
const newsdetails= document.getElementById("newsdetails")


// apis

const API_KEY="9839b80b0c814588b636f068787e5bf7";
const GENERAL_NEWS=""https://www.bbc.co.uk/news/articles/cj35kk42k5"

generalBtn.addEventListener("click", function(){
    fetchGeneralNews();
    
});

gpolitiqueBtn.addEventListener("click", function(){
    
});

sportsBtn.addEventListener("click", function(){
    
});

cultureBtn.addEventListener("click", function(){
    
});

breveBtn.addEventListener("click", function(){
    
});

programmationBtn.addEventListener("click", function(){
    
});

searchBtn.addEventListener("click", function(){
    
});
