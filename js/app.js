const scrollReveal = () => {
  window.sr = ScrollReveal();

  //Nav
  sr.reveal('nav', {
    duration: 2000,
  })

  //Jumbotron
  sr.reveal('#jmb-slide-top', {
    duration: 2000,
    origin: 'top',
    distance: '200px'
  })

  //About
  sr.reveal('.slide-left', {
    duration: 2000,
    origin: 'left',
    distance: '300px'
  })
  //Img
  sr.reveal('.fade-in', {
    duration: 2000,
  })

}; 

scrollReveal();