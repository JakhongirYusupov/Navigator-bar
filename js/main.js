const bar = document.querySelector('.aside_btn_bar')
const close = document.querySelector('.aside_btn_close')
const main = document.querySelector('.main')
const aside = document.querySelector('.aside')


bar.addEventListener('click', () => {
    bar.classList.add('bar')
    close.classList.add('close')
    main.classList.add('main_right')
    aside.classList.add('aside_right')
})
close.addEventListener('click', () => {
    bar.classList.remove('bar')
    close.classList.remove('close')
    main.classList.remove('main_right')
    aside.classList.remove('aside_right')
})