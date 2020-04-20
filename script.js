const upButton = document.getElementById('up');
const contentSide = document.getElementsByClassName('content-side')[0];

function scrollFunction() {
  if (
    document.body.scrollTop > 50 ||
    document.documentElement.scrollTop > 50 ||
    contentSide.scrollTop > 500 ||
    contentSide.scrollTop > 500
  ) {
    upButton.style.display = 'block';
  } else {
    upButton.style.display = 'none';
  }
}

function topFunction() {
  document.body.scrollTop = 0;
  document.documentElement.scrollTop = 0;
  contentSide.scrollTop = 0;
  contentSide.scrollTop = 0;
}

upButton.addEventListener('click', topFunction);

//normal browser case
contentSide.addEventListener(
  'scroll',
  function () {
    scrollFunction();
  },
  false
);

//mobile device case
window.addEventListener(
  'scroll',
  function () {
    console.log('scrollling');
    scrollFunction();
  },
  false
);

//fix IOS design bug
const projectsPart = document.getElementsByClassName('projects-part')[0];

if (navigator.userAgent.match(/iPhone|iPad|iPod/i)) {
  console.log('ios device');
  projectsPart.style.position = 'absolute';
  projectsPart.style.top = '1080px';
  projectsPart.style.left = '-30px';
  document
    .getElementsByClassName('projects-part')[0]
    .getBoundingClientRect().top = 920;
}
