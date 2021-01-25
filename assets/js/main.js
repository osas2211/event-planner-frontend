function openSideMenu(){
    document.getElementById('mobile').style.width = '90%';
    document.getElementById('main').style.filter = 'blur(5px)';
    document.querySelector('#main-nav .side-bar').style.display = 'none'
    
};

function closeSideMenu(){
    document.getElementById('mobile').style.width = '0';
    document.getElementById('main').style.filter = 'none';
    document.querySelector('#main-nav .side-bar').style.display = 'block'
};

function smoothScroll () {
    $('a.btn, #mobile a').on('click', function (e){
        if(this.hash !== ''){
            e.preventDefault();

            $('html, body').animate({
                scrollTop: $(this.hash).offset().top
            }, 800)
        }
    });
};

smoothScroll();