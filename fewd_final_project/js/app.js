
      window.sr = ScrollReveal();

sr.reveal('.nav .sec1', { duration: 1000, easing: 'cubic-bezier(0.6, 0.2, 0.1, 1)'});
sr.reveal('.nav .sec2', { duration: 1000, easing: 'cubic-bezier(0.6, 0.2, 0.1, 1)', delay: 500});
sr.reveal('.nav .sec3', { duration: 1000, easing: 'cubic-bezier(0.6, 0.2, 0.1, 1)', delay: 1000 });

sr.reveal('.reveal-test', { axis: 'x',
  origin: 'right',
  distance: '500px',
  easing   : 'ease-in-out',
  scale: '1',
  duration: '2000',
  delay: '-300'});
