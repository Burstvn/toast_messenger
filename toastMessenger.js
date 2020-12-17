const main = document.querySelector('.main')

function addToast(element, title, messenger, type){
    const toast = document.createElement('div')
    toast.addEventListener('click',(e)=>{
        if(e.target.classList.value == 'fa fa-times'){
            toast.remove()
            clearTimeout(delay)
        }
    })
    const icons = {
        success: 'fa fa-check-circle',
        warning: 'fa fa-times-circle',
        error: 'fa fa-info-circle',
        info: 'fa fa-info-circle',
    }
    const icon = icons[type]

    toast.classList.add('toast', `toast--${type}`)
    toast.innerHTML = `<div class="toast__icon">
                            <i class="${icon}" aria-hidden="true"></i>
                        </div>
                        <div class="toast__content">
                            <div class="toast__content__title">
                                ${title}
                            </div>
                            <div class="toast__content__messenger">
                                ${messenger}
                            </div>
                        </div>
                        <div class="toast__close">
                            <i class="fa fa-times" aria-hidden="true"></i>
                        </div>`
    
    element.appendChild(toast)
    const delay = setTimeout(()=>{
        toast.remove()
    },5000)
}





