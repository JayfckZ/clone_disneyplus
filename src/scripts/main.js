document.addEventListener('DOMContentLoaded', function(){
    const buttons = document.querySelectorAll('[data-tab-button]')
    const questions = document.querySelectorAll('[data-faq-question]')

    const heroSection = document.querySelector('.hero')
    const altHero = heroSection.clientHeight

    window.addEventListener('scroll', function(){
        const altAtual = window.scrollY
        const header = document.querySelector('.header')

        if (altAtual < altHero){
            header.classList.add('header--is-hidden')
        }
        else{
            header.classList.remove('header--is-hidden')
        }
    })


    for(let i = 0; i < buttons.length; i++){
        buttons[i].addEventListener('click', function(btn){
            const tabTarget = btn.target.dataset.tabButton;
            const tab = document.querySelector(`[data-tab-id=${tabTarget}]`)

            
            hideAll();
            tab.classList.add('shows__list--is-active')
            btn.target.classList.add('shows__tabs__buttons--is-active')
        })
    }

    for(let i=0; i < questions.length; i++){
        questions[i].addEventListener('click', openClose)
    }
})

function openClose(element){
    const classe = 'faq__questions__item--is-open'
    const qstPai = element.target.parentNode
    qstPai.classList.toggle(classe)

}

function hideAll(){
    const tabsContainer = document.querySelectorAll('[data-tab-id]')
    const buttonsContainer = document.querySelectorAll('[data-tab-button]')

    for(let i=0; i < tabsContainer.length; i++){
        tabsContainer[i].classList.remove('shows__list--is-active')
    }
    for(let i=0; i < buttonsContainer.length; i++){
        buttonsContainer[i].classList.remove('shows__tabs__buttons--is-active')
    }
}   