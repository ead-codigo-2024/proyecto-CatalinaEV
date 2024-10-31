window.addEventListener('scroll', function() {
    const title = document.querySelector('.title');
    const scrollPosition = window.scrollY;
    
    // Cambia el valor 200 según lo que necesites
    if (scrollPosition > 150) {
        title.classList.add('hidden');
    } else {
        title.classList.remove('hidden');
    }
});

