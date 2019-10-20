var mobileDesctopButtom =  document.querySelector('.mobile-desctop');
window.addEventListener('resize', function() {
    if (window.innerWidth < 650) {
        mobileDesctopButtom.style.display = 'none';
        document.querySelector('.project__info_ul').style.display = "none";
    }
    else {
        mobileDesctopButtom.style.display = 'inline-block';
        if (document.querySelector(".main").classList.length == 1) {
            document.querySelector('.project__info_ul').style.display = "block";
        }
    }
});

mobileDesctopButtom.addEventListener('click',function () {
    if(document.querySelector(".main").classList.length==1) {
        mobileDesctopButtom.innerHTML = 'Desctop';
        document.querySelector(".main").classList.add('mobile');
        document.querySelector('.project__info_ul').style.display = "none";
    }
    else{
        document.querySelector(".main").classList.remove('mobile');
        document.querySelector('.project__info_ul').style.display = "block";
        mobileDesctopButtom.innerHTML = 'Mobile';
    }
});
