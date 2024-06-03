//плавное появление блоков

function isInViewport(element) {
    const rect = element.getBoundingClientRect();
    return rect.top <= (window.innerHeight || document.documentElement.clientHeight);
}

const animBlock = function() {
    const blockShow = document.querySelectorAll('.blockSix-table, .cardGray, .laptopVideo-img, .grid-item, .grid-item-outside, .step')


    function showBlock() {
        blockShow.forEach((item) => {
            if (isInViewport(item)) {
                item.classList.add('show');
            }
        })
    }

    window.addEventListener('scroll', showBlock);
    showBlock();
};

//закрытие модального окна
const modalItems = document.querySelectorAll('.modal-menu-item')

modalItems.forEach((item) => {
    item.addEventListener('click', (item) => closedModal());
})

//замена фона
const back = document.getElementById('backGround');

function changeBack() {
    if(screen.width  <= 660) {
        back.src ='./img/bacs.png'
    }
    else {
        back.src ='./img/Group 1242 (5).png'
    }
}

// создание карточек
const objectCard = {
arrImg : ["./img/GgridImg1.svg", "./img/GgridImg2.svg", "./img/GgridImg3.svg", "./img/GgridImg4.svg", "./img/GgridImg5.svg", "./img/GgridImg6.svg", "./img/GgridImg7.svg"],
arrTitle : ['Огромное количество практики', 'Современные методики обучения', 'Простое и понятное изложение', 'Гибкий график занятий', 'Прямая связь с опытными программистами', 'Оплата небольшими частями', 'Быстрый и легкий возврат'],
arrText : ['Более 500 самостоятельных заданий и 20 полноценных больших проектов', 'Спиральное обучение: погружаемся в материал постепенно, виток за витком', 'Вместо заумных терминов – примеры из реального мира', 'Учитесь в любое время в удобном для вас темпе', 'Задавайте вопросы и отправляйте свой код на проверку', 'Платите только за тот материал, который сейчас изучаете, а не за весь курс сразу', 'Если передумаете учиться – вернем деньги за 3 рабочих дня']
}

for (let i = 0; i < objectCard.arrImg.length; i++) {
    var parentElement = document.querySelector('.blockThree-cards-grid');
    
        var cards = document.createElement('div');
        cards.classList.add('grid-item-outside');
        cards.setAttribute('id', 'grid-item'+ (i + 1));

        var card = document.createElement('div');
        card.classList.add('grid-item-inner');
    
        var cardImg = document.createElement('img');
        cardImg.src = objectCard.arrImg[i];
        cardImg.classList.add('cardGrid-image');
    
        var cardTitle = document.createElement('p');
        cardTitle.textContent = objectCard.arrTitle[i];
        cardTitle.classList.add('boldTextInCard');
    
        var cardText = document.createElement('p')
        cardText.textContent = objectCard.arrText[i];
        cardText.classList.add('textCard');

        card.appendChild(cardImg);
        card.appendChild(cardTitle);
        card.appendChild(cardText);

        cards.appendChild(card);
    
        parentElement.appendChild(cards);
}

//замена положения текста 
const textCenter = document.querySelectorAll('.step-text');

function changePosition() {
    if(screen.width  <= 1000) {
        textCenter.forEach(elem => {
            elem.classList.remove('textStart');
        })
    }
}


function checkVisibility() {
    var elementLeft = document.querySelector('.footer-social');
    var elementRight = document.querySelector('.footer-menu-contacts');

    var elementLeftPosition = elementLeft.getBoundingClientRect().top;
    var elementRightPosition = elementRight.getBoundingClientRect().top;
    var windowHeight = window.innerHeight;

    // Проверяем, достиг ли скролл до элемента
    if (elementLeftPosition <= windowHeight) {
        elementLeft.classList.add('socialAnim');
    }
    if (elementRightPosition <= windowHeight) {
        elementRight.classList.add('socialAnim__right');
    }
}

document.addEventListener('DOMContentLoaded', function() {
    checkVisibility();
    changePosition();
    changeBack();
    animBlock();
});

window.addEventListener('scroll', function() {
    checkVisibility();
    changePosition();
    changeBack();
    animBlock();
});


// появляение бургерной кнопки (убрано)
// const burgerButton = document.querySelector('.burger');
// const burgerMenu = document.querySelector('.burger-menu');
// const modal = document.querySelector('.modal__outside');
// const modalClosed = document.querySelector('.modal-button');
// const header = document.querySelector('.header');

// function handelBurger() {
//     burgerButton.classList.toggle('active');
// }

// burgerButton.addEventListener('click', handelBurger);

// const closedModal = function() {
//     modal.style.display = 'none'
//     burgerButton.style.display = 'block'
//     header.style.zIndex = 2
// }

// modalClosed.addEventListener('click', function() {
//     closedModal()
// });

// burgerButton.addEventListener('click', function() {
//     modal.style.display = 'block'
//         burgerButton.style.display = 'none'
//         header.style.zIndex = -1
//         handelBurger()
// })