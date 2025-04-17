AOS.init();

let doc = document
let body = doc.querySelector('body')


doc.querySelector('.header-menu-toggle').addEventListener('click', HeaderMenu)
doc.querySelector('.header-nav__close').addEventListener('click', HeaderMenu)
doc.querySelector('.header-nav h3').addEventListener('click', HeaderMenu)
function HeaderMenu(el) {
    el.preventDefault()
    if (body.classList.contains('menu-is-open')) {
        body.classList.remove('menu-is-open')
    }else{
        body.classList.add('menu-is-open')
    }
}

// Функция для прокрутки числа в about-stats
let id_ladder = doc.querySelectorAll('#id_ladder')
function lettime(elem, sped, spedcont) {
    let num_tex = Number(elem.innerHTML)
    let num_tex2 = 0
    elem.innerHTML = 0
    setTimeout(() => {
        let intra = setInterval(() => {
            if (num_tex2 < num_tex) {
                num_tex2 += 1 * sped
                elem.innerHTML = num_tex2
            } else {
                clearInterval(intra)
            }
        }, spedcont)
    }, 1000)
}
function tim_akt() {
    lettime(id_ladder[0], 1, 5)
    lettime(id_ladder[1], 5, 5)
    lettime(id_ladder[2], 1, 5)
    lettime(id_ladder[3], 1, 5)
}
let nub_blanck = false
// Создаем новый observer (наблюдатель)
let observer = new IntersectionObserver(function (entries) {
    entries.forEach(function (entry) {
        if (entry.isIntersecting) {
            if (nub_blanck == false) {
                tim_akt()
                nub_blanck = true
            }
        }
    });
});

observer.observe(id_ladder[0]);














