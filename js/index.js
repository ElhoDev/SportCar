let modal = document.getElementById('modal');
		let modalbox = document.getElementById('modal-box'); 
        let title = document.getElementById("modal-title");
        let databtn = document.getElementById('databtn')
        let data = localStorage.getItem('Data about person:')
        databtn.addEventListener('click',()=>{
            modal.style.display = 'flex';
        })
        modalbox.addEventListener('click',()=>{
            modal.style.display = 'none';
            
        })
        modalbox.addEventListener('click',(e)=>{
            e.stopPropagation();
        })

title.innerHTML = localStorage.getItem('Data about person:')
if(data === null){
    title.innerHTML = 'У вас нет данных!'
}



var slideIndex = 0;
showSlides();

function showSlides() {
    var i;
    var slides = document.getElementsByClassName("mySlides");
    for (i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";
    }
    slideIndex++;
    if (slideIndex > slides.length) {slideIndex = 1}
    slides[slideIndex-1].style.display = "block";
    setTimeout(showSlides, 2000); 
}





 let scrollIt=    document.getElementById('scroll')
 scrollIt.addEventListener('click', ()=>{
    window.scroll(0,1800)
 })
 scrollIt.style.scrollBehavior = 'smooth'
