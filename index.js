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

getJSON('https://random.dog/woof.json', function (result) {
  var url = result.url;
  x.style.backgroundImage = "url("+url+")";
});

var FILTERS = ['walden', 'toaster', 'kelvin', 'oldie'];

function name(){
  var n = document.querySelectorAll(".toggle-controls li");
  for (var i = 0 ; i <  n.length; i++) {
    n[i].innerHTML = n[i].className;
  }
}
name(); 


var n = document.querySelectorAll(".toggle-controls li");
var p = document.querySelectorAll("div .photo");

n.forEach(function (elem) {
  elem.addEventListener('click', function () {
    n.forEach(function(el) {
      el.classList.remove('active');
    });
    elem.classList.add('active');
    p.forEach(function(pho){
       pho.classList.remove("walden","toaster","oldie","kelvin");
    })
    p[0].classList.add(elem.classList[0]);
});
})

/***

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

*/
