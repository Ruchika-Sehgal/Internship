document.getElementsByClassName("logo")[0].onclick=function(){
    window.location.href="https://www.yahoo.com";
}
document.getElementsByClassName("staticHL")[0].onclick=function(){
    window.location.href="https://www.yahoo.com";
}
var introExploreBtn=document.getElementById("intro3").firstChild
introExploreBtn.onclick=function(){
    window.location.href="https://www.google.com";
}
introExploreBtn.style.cursor="pointer";

let observer = new IntersectionObserver(function(entries) {
    let header=document.getElementsByClassName("staticH")[0];
    document.body.appendChild(header);

})
observer.observe(document.querySelector(".featureDiv"));
let observer2= new IntersectionObserver(function(entries) {
    let header=document.getElementsByClassName("staticH")[0];
    let hiddenDiv=document.getElementsByClassName("hiddenHeader")[0];
    hiddenDiv.appendChild(header);
    // document.body.removeChild(header);
})

observer2.observe(document.querySelector("#header"));