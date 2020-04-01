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

  //Projects
  sr.reveal('.slide-right', {
    duration: 2000,
    origin: 'right',
    distance: '300px',
    viewFactor: 0.2 //When we see 2% of this div the animation will start
  })

  //Contacts
  sr.reveal('.cnt-fade-in', {
    duration: 2000,
    viewFactor: 0.2 

  })
}; 

scrollReveal();