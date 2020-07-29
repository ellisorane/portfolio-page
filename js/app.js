const scrollReveal = () => {
  window.sr = ScrollReveal();

  sr.reveal('nav', {
    duration: 2000,
  })

  sr.reveal('.slide-from-top', {
    duration: 2000,
    origin: 'top',
    distance: '200px'
  })

  sr.reveal('.slide-from-bottom', {
    duration: 2000,
    origin: 'bottom',
    distance: '200px',
    // delay: 1000
  })

  sr.reveal('.slide-from-left', {
    duration: 2000,
    origin: 'left',
    distance: '300px'
  })

  sr.reveal('.slide-from-right', {
    duration: 2000,
    origin: 'right',
    distance: '300px'
  })
}; 

scrollReveal();


//Nav bg
window.addEventListener('scroll', () => {
  const topOfPage = window.pageYOffset
  const navbar = document.getElementById('navigation')
  if(topOfPage >= 800) {
    navbar.classList.add('BG-black')
  } else {
    navbar.classList.remove('BG-black')
  }
})
