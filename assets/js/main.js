// Funcao para Abrir o MenuMobile e Trocar os Icones do Menu

function menuShow() {
    let menuMobile = document.querySelector('.mobile-menu')

    if (menuMobile.classList.contains('open')) {
        menuMobile.classList.remove('open')
        document.querySelector('#openLogo').classList.add('fa-solid', 'fa-bars', 'fa-lg')
    } else {
        menuMobile.classList.add('open')
        document.querySelector('#openLogo').classList.remove('fa-solid', 'fa-bars', 'fa-lg')
        document.querySelector('#openLogo').classList.add('fa-solid', 'fa-xmark', 'fa-lg')
    }
}
// Funcao para ter um shadow quando usamos o scroll
function onScroll() {
    let shadow = document.querySelector('.nav-bar')
    let mobile = document.querySelector('#mobile-menu')

    shadow.classList.add('scroll-shadow') //Shadow para menu mobile

    if (mobile.classList.contains('open')) { // arrumando para nao aparecer o shadow quando estamos com o menu mobile aberto
        shadow.classList.remove('scroll-shadow')
    }
    if (scrollY <= 0) { // Shadow sumindo quando voltamos para posicao 0 do Y
        shadow.classList.remove('scroll-shadow')
    }
}

// Funcao para trocar a Lua pelo Sol quando ativado o modo escuro
// Funcao para trocar para DarkMode/SunMode


function changeIcon() {

    let icon = document.querySelector('#iconDarkMode')
    let icon2 = document.querySelector('#iconDarkMode2')
    let bodyBackground = document.querySelector('body');
    let navBackground = document.querySelector('.nav-bar');
    const aList = document.querySelectorAll("a");
    let menuShow = document.querySelector('#openLogo')
    let headerBackground = document.querySelector('header');







    let card1Background = document.querySelector('.card-1')
    let card2Background = document.querySelector('.card-2')
    let card3Background = document.querySelector('.card-3')

    Array.from(aList).forEach(function (el) {

        if (el.classList.contains('nav-link')) {
            el.classList.toggle('colorWhite')
        } else if (el.classList.contains('blackColor')) {
            el.classList.toggle('blackColor')

        }
    }

    );


    if (icon.classList.contains('fa-moon')) {
        icon.classList.remove('fa-moon')
        icon.classList.add('fa-sun', 'fa-regular')
        bodyBackground.classList.toggle('darkColor')
        navBackground.classList.toggle('darkColor')
        icon2.classList.add('colorWhite')
        icon2.classList.remove('fa-moon')
        icon2.classList.add('fa-sun', 'fa-regular')
        menuShow.classList.add("colorWhite")
        headerBackground.classList.add('darkColor')

    } else {
        icon.classList.add('fa-moon', 'fa-regular')
        bodyBackground.classList.toggle('darkColor')
        navBackground.classList.toggle('darkColor')
        icon2.classList.add('fa-moon', 'fa-regular')
        icon2.classList.remove('colorWhite')
        menuShow.classList.remove("colorWhite")
        headerBackground.classList.remove('darkColor')

    }

}



