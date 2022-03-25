document.addEventListener("DOMContentLoaded", function(){
  var x = window.matchMedia("(max-device-width: 480px)");
  myFunction(x);
})

function myFunction(x) {
    const result = bowser.getParser(window.navigator.userAgent);
    console.log(result);
    var url = window.location.href.indexOf('contact') > -1;
    if (x.matches) {
        if((result.parsedResult.browser.name == 'Microsoft Edge')||(result.parsedResult.browser.name == 'Chrome')){
            if(!url){
                document.querySelector(".content").style.paddingTop = "10%";
            }else { 
                document.querySelector(".contentContact").style.paddingTop = "5%";
            }        
          }else{
              console.log("Another browser");
          }
    } else {
        console.log("-1");
    }
  }


let btnContact = document.getElementById('btnContact');
let btnCurriculum = document.getElementById('btnCurriculum');

btnContact.addEventListener('click', function(){
    window.location='HTML/contact.html';
})

btnCurriculum.addEventListener('click', function(){
    window.location='HTML/curriculum.html';
})


let firstButton = document.getElementsByClassName("first-button");
document.addEventListener("DOMContentLoaded", function(){
    let animatedIcon = document.getElementsByClassName('animated-icon1');
    for (let i=0; i <firstButton; i++){
        firstButton[i].addEventListener('click', function(){
            animatedIcon.toggleClass('open');
        });
    }
})



