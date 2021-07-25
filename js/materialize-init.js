$(document).ready(function () {
  // Init Scrollspy
  $('.scrollspy').scrollSpy()
  // Init slider
  $('.slider').slider({
    indicators: false,
  })
  // Init Sidenav
  $('.sidenav').sidenav({
    edge: 'right',
    preventScrolling: false
  });
});