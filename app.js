

function togglePopup(){
    document.getElementById("about_section").classList.toggle("active")
}
// scroll
// ScrollReveal({ reset: true,
//     distance: '80px',
//     duration: 2000,
//     delay: 200
//  });
//  ScrollReveal().reveal('#hero_subtitle', { origin: 'left'});

const typed = new Typed('.multiple-text', {
    strings: ['Frontend Developer', 'Business Analyst', 'Data Analyst'], 
    typeSpeed: 100,
    backSpeed: 100,
    backDelay: 1000,
    loop: true
});
