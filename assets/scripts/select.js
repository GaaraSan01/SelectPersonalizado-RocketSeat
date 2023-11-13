let select = document.querySelector('.select'),
selectedValue = document.getElementById('selected__value'),
optionsViewButton = document.getElementById('option-view-button'),
inputsOptions = document.querySelectorAll('.option input')

inputsOptions.forEach((input) => {
    input.addEventListener('click', event => {
        selectedValue.textContent = input.dataset.label

        const isMouseDrTouch = 
        event.pointerType == 'mouse' ||
        event.pointerType == 'touch'

        if(isMouseDrTouch){
            optionsViewButton.click()
        }
    })
})

window.addEventListener('keydown', event => {
    if(!select.classList.contains('open')) return

    if(event.key == 'Escape' || event.key == " "){
        optionsViewButton.click()
    }
})

optionsViewButton.addEventListener('input', () => {
    select.classList.toggle('open')

    if(!select.classList.contains('open')) return

    const input =
        document.querySelector('.option input:checked')
        document.querySelector('.option input')
        
    input.focus()
})