addEventListener( 'resize', () => {
    let h2 = document.getElementById('h2-header');
    if(innerWidth <= 767) {
        h2.style.visibility = 'hidden';
    } 
    if (innerWidth > 767) {
        h2.style.visibility = 'visible';
    }
});