/**
 * Created by emanuel on 2017-02-04.
 */
var count = 0;
var nIntervId;
var executed = false ;

/*
var selectors = document.styleSheets[2].cssRules[0].style;
selectors.backgroundPosition = "0px -550px";
console.log(selectors);
*/

console.log(document.styleSheets[2]);
function gallery() {
    console.log("called");
    if (executed === false) {
        executed = true;
        console.log("intervalling");
        ChngImg();
        nIntervId = setInterval(ChngImg, 1650);
    }
}

function ChngImg() {
    if (screen.width > 479){
    count = count + -550;
    if (count <= -1650) {
        count = 0 ;
    }
    var selectors = document.styleSheets[2].cssRules[0].style;
    selectors.height = "550px";
    selectors.backgroundImage = 'url("../img/amazonas_desktop_sprite.jpg")';
    selectors.backgroundPosition = "0px " + count + "px";
    }
    else {
         count = count + -239;
    if (count <= -717) {
        count = 0 ;
    }
    var selectors = document.styleSheets[2].cssRules[0].style;
    selectors.height = "238px";
    selectors.backgroundImage = 'url("../img/amazonas_mobil_sprite.jpg")';
    selectors.backgroundPosition = "0px " + count + "px";
    }
    }
gallery();
