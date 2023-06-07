const input = document.querySelector('.input')
const btn = document.querySelector('button')
const p = document.querySelector('p')
const btnSwap = document.querySelector('.swap')
const one = document.querySelector('.one')
const two = document.querySelector('.two')
const emoji = document.querySelector('.emoji')
let celsius


const celsiusToFahrenheit = () => {
    celsius = input.value
    fahrenheit = Math.floor((celsius * 1.8) + 32)
    p.textContent = `${celsius} celsius degree is equal to ${fahrenheit} fahrenheit degree`
}

const fahrenheitToCelsius = () => {
    fahrenheit = input.value
    celsius = Math.floor((fahrenheit - 32) /1.8)
    p.textContent = `${fahrenheit} fahrenheit degree is equal to ${celsius} celsius degree`
}

const swap = () => {
    if (one.textContent === 'C°' && two.textContent === 'F°') {
        one.textContent = 'F°'
        two.textContent = 'C°'
        
    } else if (one.textContent === 'F°' && two.textContent === 'C°') {
        one.textContent = 'C°'
        two.textContent = 'F°'
    }
    
} 


const start = () => {
    if(input.value === '') {
        p.textContent = 'You need to write something'
    } else if (input.value !== '' && one.textContent === 'C°' && two.textContent === 'F°') {
        celsiusToFahrenheit()
        emojiCheck()
    } else if (input.value !== '' && one.textContent === 'F°' && two.textContent === 'C°') {
        fahrenheitToCelsius()
        emojiCheck()
    }
}


const emojiCheck = () => {
    if(celsius >= 30 ) {
        emoji.textContent = '🥵'
    } else if (celsius < 30 && celsius > 1) {
        emoji.textContent = '🙂'
    } else if ( celsius < 1) {
        emoji.textContent = '🥶'
    }
}


btnSwap.addEventListener('click', swap)
btn.addEventListener('click', start)