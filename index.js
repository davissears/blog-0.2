let shadow = document.querySelector("#shadow");

function mouse_shadow(event) {
  shadow.style.top = event.pageY + 'px';
  shadow.style.left = event.pageX + 'px';
}

window.addEventListener("mousemove", mouse_shadow);