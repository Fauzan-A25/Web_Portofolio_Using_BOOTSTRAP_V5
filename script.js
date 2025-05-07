document.getElementById("CV").addEventListener("click", function() {
  window.location.href = "https://docs.google.com/document/d/1zm9N7lCHsZPCChdz5zjfQK4wogPMqb5g/edit?usp=sharing&ouid=108411748673413313360&rtpof=true&sd=true"; 
});

// document.addEventListener('contextmenu', event => event.preventDefault());
//   document.addEventListener('keydown', function(e) {
//     if (e.keyCode == 123 || (e.ctrlKey && e.shiftKey && (e.keyCode == 'I'.charCodeAt(0) || e.keyCode == 'J'.charCodeAt(0))) || (e.ctrlKey && e.keyCode == 'U'.charCodeAt(0))) {
//       e.preventDefault();
//     }
//   });

  window.addEventListener('scroll', function() {
    var sections = document.querySelectorAll('section');
    var navLinks = document.querySelectorAll('.nav-link');

    sections.forEach(function(section) {
        var sectionTop = section.offsetTop;
        var sectionHeight = section.offsetHeight;
        var scrollPos = window.pageYOffset;

        if (scrollPos >= sectionTop - sectionHeight / 3 && scrollPos < sectionTop + sectionHeight) {
            navLinks.forEach(function(link) {
                link.classList.remove('active');
                if (link.getAttribute('href').substring(1) === section.getAttribute('id')) {
                    link.classList.add('active');
                }
            });
        }
    });
});

