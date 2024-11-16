const observer = new IntersectionObserver((entries) => { //create IntersectionObserver
    entries.forEach((entry) => { // loop on each element
        console.log(entry);
        if (entry.isIntersecting) { // check if elment in visible
            entry.target.classList.add('show');//add class show to show element
         } 
        else {// comment out if
            entry.target.classList.remove('show') //you only want to show
        } //each element once.
    });
});
var hidden = document.querySelectorAll('.animate-on-scroll');
hidden.forEach((el) => observer.observe(el));
