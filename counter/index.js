// Initial State of the app
const DEFAULT = 0
let counter = DEFAULT

const counterDOM = document.querySelector('#counter')
const btns = document.querySelectorAll('.btn')
const btnDecr = document.querySelector('#btnDecr')
const btnReset = document.querySelector('#btnReset')
const btnIncr = document.querySelector('#btnIncr')

/**
 * Listener
 */
// btns.forEach(function(btn) {
//     btn.addEventListener('click', function(e) {
//         if (e.currentTarget.id === 'btnDecr') {
//             onDecreaseClicked()   
//         } else if (e.currentTarget.id === 'btnIncr') {
//             onIncreaseClicked()
//         } else {
//             onResetClicked()
//         }
//     })
// })

btnDecr.addEventListener('click', () => onDecreaseClicked())
btnReset.addEventListener('click', () => onResetClicked())
btnIncr.addEventListener('click', () => onIncreaseClicked())



// Handlers

/**
 * Actions taken after 'Decrease' button clicked.
 * Actions include decreasing the counter.
 */
function onDecreaseClicked() {
    decreaseCounter()
}

/**
 * Actions taken after 'Increase' button clicked.
 * Actions include increasing the counter.
 */
function onIncreaseClicked() {
    increaseCounter()
}

/**
 * Actions taken after 'Reset' button clicked.
 * Actions include reseting the counter.
 */
function onResetClicked() {
    resetCounter(counter)
}

// Model

/**
 * Decreases the counter and syncs the UI
 */
function decreaseCounter() {
    counter-- 
    showCounter(counter)
}

/**
 * Increases the counter and syncs the UI
 */
function increaseCounter() {
    counter++ 
    showCounter(counter)
}

/**
 * Resets the counter and syncs the UI
 */
function resetCounter() {
    counter = DEFAULT 
    showCounter(counter)
}

// View

/**
 * Assigns counter to the corresponsing UI element
 * and styles accordingly. 
 * @param {Number|String} counter - the counter value
 */
function showCounter(counter) {
    counterDOM.innerHTML = counter
    styleCounter(counter)
}

/**
 * Assigns a specific color style to the counter
 * value. Green, when positive value, red when
 * negative value, black when zero.
 * 
 * @param {Number} counter - the counter value 
 */
function styleCounter(counter) {
    if (counter > 0 ) {
        counterDOM.style.color = 'green'
    } else if (counter < 0) {
        counterDOM.style.color = 'red'
    } else {
        counterDOM.style.color = 'black'
    }
}


// simple

// const DEFAULT = 0
// let counter = DEFAULT

// btnDecrDOM.addEventListener('click', function() {
//     counter--
//     counterDOM.innerHTML = counter
// })

// btnResetDOM.addEventListener('click', function() {
//     counter = DEFAULT
//     counterDOM.innerHTML = counter
// })

// btnIncrDOM.addEventListener('click', function() {
//     counter++
//     counterDOM.innerHTML = counter
// })

