const sliderInit = (function() {
    return function(selector) {
        const mainSlider = document.querySelector(selector); // Основной элемент слайдера
        const mainSliderWrap = mainSlider.querySelector('.slider__wrap'); // Обертка слайдера - ищется на основе основного элемента
        const sliderItems = mainSlider.querySelectorAll('.slider__item'); // Элементы слайдера
        const sliderControls = mainSlider.querySelectorAll('.slider__control'); // Элементы управления (стрелочки)
        
        const wrapWidth = parseFloat(getComputedStyle(mainSliderWrap).width); // Ширина обертки
        const itemWidth = parseFloat(getComputedStyle(sliderItems[0]).width); // Ширина элемента слайдера
        let step = (itemWidth / wrapWidth) * 100; // Шаг прокрутки (зависит от кол-ва элементов на странице
        let transform = 0;
        
        // Выбор направления (left, right) и его передача функции
        function controlClick(event) {
            let targetClick = event.target;
            if (targetClick.classList.contains('slider__control') || targetClick.offsetParent.classList.contains('slider__control')) {
                event.preventDefault();
                let clickDirection = targetClick.offsetParent.classList.contains('slider__control_left') ? 'left' : 'right';
                transformItem(clickDirection);
            }            
        }

        // Назначения стиля обертке слайдера в зависимости от направления
        function transformItem(direction) {
            if (direction === 'left') {
                transform += step;
                
            } else {
                transform -= step;
            }
            mainSliderWrap.style.transform = `translateX(${transform}%)`;
        }

        // Перебор стрелок управления и присвоения функции при событии
        sliderControls.forEach(item => {
            item.addEventListener('click', controlClick);
        });
    }
}());

const slider = sliderInit('.slider');

