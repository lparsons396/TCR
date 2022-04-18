const allStars = document.querySelectorAll('.star');

allStars.forEach( (star, i) => {
    star.onclick = function() {
        console.log(star);
        let current_star = i+1;
        console.log(current_star)
        allStars.forEach( (star,j) =>{
            if (current_star >= j+1 ) {
                star.innerHTML = '&#9733';
            } else {
                star.innerHTML = '&#9734';
            }
            
            
        })
    }
})