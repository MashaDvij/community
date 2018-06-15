function getJSON(url, callback) {
  var xhr = new XMLHttpRequest();
  xhr.open("GET", url , true);
  xhr.onreadystatechange = function () {
    if(xhr.readyState === XMLHttpRequest.DONE && xhr.status === 200) {
    callback(JSON.parse(xhr.responseText));
    };
 };
  xhr.send();
};

var x = document.querySelector('.photo');
var or_pho = document.querySelector('.photo-original');

getJSON('https://random.dog/woof.json', function (result) {
  var url = result.url;
  x.style.backgroundImage = "url("+url+")";
  or_pho.style.backgroundImage = "url("+url+")";
});

var FILTERS = ['walden', 'toaster', 'kelvin', 'oldie'];
var photo = document.querySelectorAll('.photo')[0];
var controls = document.querySelectorAll('.toggle-controls li');

controls.forEach(function (control) {
  control.innerHTML = control.className;
  control.addEventListener('click', function () {
    activate(control);
  });
});

function activate(control) {
  controls.forEach(function (elem) {
    elem.classList.remove('active');
    photo.classList.remove(elem.className);
  });
  photo.classList.add(control.className);
  control.classList.add('active');
}
var sep = document.querySelector(".separator");
var flag = 0;
var body = document.querySelector(".keksta");
var photo_filter = document.querySelector(".photo-original");

sep.addEventListener('mousedown', function(){
  flag = 1;
})
body.addEventListener('mouseup', function(){
  flag = 0;
})

body.addEventListener('mousemove', function(event){
  if (flag === 1){
    sep.style.marginLeft = event.clientX - 270 + "px";
    photo_filter.style.width = event.clientX - 112 + "px";
    if (event.clientX < 100 || event.clientX > 440 ){
      sep.style.marginLeft = "-160px";
      photo_filter.style.width = "0%";
    }
    if (event.clientX > 430){
      sep.style.marginLeft = "160px";
      photo_filter.style.width = "100%";
    }
  } else {

  }
})









// function name(){
//   var n = document.querySelectorAll(".toggle-controls li");
//   for (var i = 0 ; i <  n.length; i++) {
//     n[i].innerHTML = n[i].className;
//   }
// }
// name(); 
// var n = document.querySelectorAll(".toggle-controls li");
// var p = document.querySelectorAll("div .photo");

// n.forEach(function (elem) {
//   elem.addEventListener('click', function () {
//     n.forEach(function(el) {
//       el.classList.remove('active');
//     });
//     elem.classList.add('active');
//     p.forEach(function(pho){
//        pho.classList.remove("walden","toaster","oldie","kelvin");
//     })
//     p[0].classList.add(elem.classList[0]);
// });
// })
