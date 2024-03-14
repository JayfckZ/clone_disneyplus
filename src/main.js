document.addEventListener('DOMContentLoaded', function(){
    const buttons = document.querySelectorAll('[data-tab-button]')
    
    for(let i = 0; i < buttons.length; i++){
        buttons[i].addEventListener('click', function(btn){
            const tabTarget = btn.target.dataset.tabButton;
            const tab = document.querySelector(`[data-tab-id=${tabTarget}]`)

            
            hideAll();
            tab.classList.add('shows__list--is-active')
            btn.target.classList.add('shows__tabs__buttons--is-active')
        })
    }
})

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