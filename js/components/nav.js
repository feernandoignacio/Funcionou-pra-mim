window.addEventListener("scroll", function(){
    let header = document.querySelector('.header');
    header.classList.toggle('scroll', window.scrollY > 0);
});

/*Tradutor*/
const idiomaIcone = document.querySelector('.idioma-switcher i');
const idiomaOpcoes = document.querySelector('.idioma-opcoes');

if (idiomaIcone) {
    idiomaIcone.addEventListener('click', () => {
        if (idiomaOpcoes) {
            idiomaOpcoes.classList.toggle('hidden');
        }
    });
}


/*Menu responsivel*/
document.addEventListener('DOMContentLoaded', () => {
    const abrirMenu = document.querySelector('.abrir-menu');
    const menuMobile = document.getElementById('menu-mobile');
    const btnFechar = document.querySelector('.btn-fechar');
    const overlayMenu = document.querySelector('.overlay-menu');
    const menuLinks = document.querySelectorAll('.menu-mobile .link-nav');

    function toggleMenu() {
        if (menuMobile) {
            menuMobile.classList.toggle('aberto');
        }
        if (overlayMenu) {
            overlayMenu.classList.toggle('aberto');
        }
    }

    if (abrirMenu) {
        abrirMenu.addEventListener('click', toggleMenu);
    }
    if (btnFechar) {
        btnFechar.addEventListener('click', toggleMenu);
    }
    if (overlayMenu) {
        overlayMenu.addEventListener('click', toggleMenu);
    }

    if (menuLinks) {
        menuLinks.forEach(link => {
            link.addEventListener('click', () => {
                if (menuMobile) {
                    menuMobile.classList.remove('aberto');
                }
                if (overlayMenu) {
                    overlayMenu.classList.remove('aberto');
                }
            });
        });
    }
});