function menuToggle(){
    var iconMenu = document.querySelector('.hamburguer');
    var slider = document.querySelector('.menu-mobile');    
    
    iconMenu.classList.toggle("change");

    if(slider.classList.contains('hide')){
        slider.classList.add('show');
        slider.classList.remove('hide');
    }else{
        slider.classList.add('hide');
        slider.classList.remove('show');
    }

}