
var menu = document.getElementsByClassName('menu')[0];
var burger = document.getElementById("burger");

burger.onclick= function(){
  this.classList.toggle('open');
  menu.classList.toggle('inv');
}
