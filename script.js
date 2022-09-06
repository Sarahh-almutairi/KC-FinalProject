const toggle = document.getElementById('toggleDark');
const body = document.querySelector('body');

toggle.addEventListener('click', function(){
    this.classList.toggle('bi-moon');
    if(this.classList.toggle('bi-brightness-high-fill')){
        body.style.background = '#b3dee2';
        body.style.color = 'black';
        body.style.transition = '1s';
    }else{
        body.style.background = '#1b263b';
        body.style.color = 'grey';
        header.style.background = `#415a77`
        body.style.transition = '1s';
        
    }
});