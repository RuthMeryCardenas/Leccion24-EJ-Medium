var footerIcons = document.getElementsByClassName('i-footer');
footerIcons[0].addEventListener("click", function(event){
  footerIcons[0].classList.remove("icon-like1");
  footerIcons[0].classList.remove("change-border");
  footerIcons[0].classList.add("icon-like");
  footerIcons[0].classList.add("change-background");
});
