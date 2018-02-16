function mobileMenuOnClick() {
  var topNavMenu = document.getElementById('idTopNavMenu');
  var menuBtn = document.getElementById('idTopNavMenuBtn');

  topNavMenu.classList.toggle('responsive');
  menuBtn.classList.toggle('change');
}

/**********************************/
/* cube */

var rotateY = 0;

function toggleClassCube(element, className) {
  if (element.classList.contains(className) > 0) {
    return;
  } else {
    element.className = 'cube';
    element.classList.toggle(className);
  }
}

function displayMenu(name) {
  var cubeElem = document.getElementById('idCube');

  switch (name) {
    case 0: toggleClassCube(cubeElem, 'dspSideFront'); break;
    case 1: toggleClassCube(cubeElem, 'dspSideRight'); break;
    case 2: toggleClassCube(cubeElem, 'dspSideBack'); break;
    case 3: toggleClassCube(cubeElem, 'dspSideLeft'); break;
  }

}
