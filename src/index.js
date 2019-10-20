var projectInfoArray = document.querySelectorAll('.project__info');

projectInfoArray.forEach(function (projectInfo) {
    projectInfo.setAttribute('infoOpen', false);
    projectInfo.addEventListener('click' , function () {
        if(document.querySelector(".main").classList.length>1 || window.innerWidth<650) {
            if (this.getAttribute("infoOpen") == 'false') {
                document.querySelector('.project__info_ul').style.display = "block";
                this.setAttribute('infoOpen', true);
            }
            else{
                this.setAttribute('infoOpen', false);
                document.querySelector('.project__info_ul').style.display = "none";
            }
        }
    });
});



let projectsArray = document.querySelectorAll('.project');
let slider = document.querySelector('.slider__content');
let projectNumber = 0;
let buttomsEnable = true;
let nextProject = null;

slider.innerHTML = '';
slider.append(projectsArray[0]);


document.querySelector('.slider__left').addEventListener('click' , function () {
    slideGoGo(1);
});
document.querySelector('.slider__right').addEventListener('click' , function () {
    slideGoGo(-1);
});

function slideGoGo(arrow) {
    if(buttomsEnable){
        buttomsEnable = false;
        projectNumber +=arrow;
        if(projectNumber >= projectsArray.length){
            projectNumber = 0;
        }
        if(projectNumber <0 ){
            projectNumber = projectsArray.length-1;
        }
        nextProject = projectsArray[projectNumber];
        slider.append(nextProject);

        nextProject.style.left = arrow>0?'100%':'-100%';
        nextProject.style.bottom = '100%';
        var firstLeft = 0;
        var secondLeft = arrow>0?100:-100;;
        interrval = setInterval(function (){
            firstLeft+=-3*arrow;
            secondLeft+=-3*arrow;
            slider.children[0].style.left = `${firstLeft}%`;
            slider.children[1].style.left = `${secondLeft}%`;
            if ((secondLeft >0 && arrow<0) || (secondLeft <1 && arrow>0)) {
                clearInterval(interrval);
                buttomsEnable = true;
                slider.innerHTML = '';
                nextProject.style.left = '0%';
                nextProject.style.bottom = '0%';
                slider.append(nextProject);
                return
            }
        },1);
    }
}



var panels = document.querySelectorAll('.education__part');

panels.forEach(function (panel) {
    let panelName = panel.children[0];
    let panelInfo = panel.children[1];
    panelInfo.style.bottom = '70px';
    panel.style.height = '50px';
    panelName.setAttribute('open',false);
    panelName.addEventListener('click' , function () {
       if(this.getAttribute('open')=='false') {
           if(this.parentElement.classList.contains("openOffPanel")){
               this.parentElement.classList.remove("openOffPanel");
               this.parentElement.children[1].classList.remove('openOff');
           }
           this.parentElement.children[1].classList.add('openOn');
           this.parentElement.classList.add('openOnPanel');
           this.setAttribute('open', true);
       }
        else{
           this.parentElement.children[1].classList.remove('openOn');
           this.parentElement.classList.remove("openOnPanel");
           this.parentElement.children[1].classList.add('openOff');
           this.parentElement.classList.add('openOffPanel');
           this.setAttribute('open', false);
        }
    });
});

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



const swipeDetect = (el) => {
    let startX = 0;
    let startY = 0;
    let distX = 0;
    let distY = 0;
    let startTime = 0;
    let time = 0;
    let maxTime = 300;
    let minDistX = 150;
    let maxDistY = 50;

    el.addEventListener('touchstart' , function (e) {
        if(document.querySelector(".main").classList.length>1 || window.innerWidth<650) {
            let touchObj = e.changedTouches[0];
            startX = touchObj.pageX;
            startY = touchObj.pageY;
            startTime = new Date().getTime();
            e.preventDefault();
        }
    });

    el.addEventListener('touchend' , function (e) {
        if(document.querySelector(".main").classList.length>1 || window.innerWidth<650) {
            let touchObj = e.changedTouches[0];
            distX = startX - touchObj.pageX;
            distY = startY - touchObj.pageY;
            time = new Date().getTime() - startTime;
            if (time < maxTime && Math.abs(distX) > minDistX && Math.abs(distY) < maxDistY) {
                if (distX < 0) {
                    slideGoGo(-1);
                } else {
                    slideGoGo(1);
                }
            }

            e.preventDefault();
        }
    });
}


let element = document.querySelector('.slider__content');
swipeDetect(element);