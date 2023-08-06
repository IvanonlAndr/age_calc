let blockInputs = document.querySelectorAll('.block__input')
let dayInput = document.querySelector('#day')
let monthInput = document.querySelector('#month')
let yearInput = document.querySelector('#year')
let countYears = document.querySelector('#countYears')
let countMonths = document.querySelector('#countMonths')
let countDays = document.querySelector('#countDays')
let labels = document.querySelectorAll('label')
let shows = document.querySelectorAll('.show')
let ageButton = document.querySelector('#ageButton')
console.log(shows[0])
let date = new Date()
console.log(date)
let day = date.getDate()
console.log(day)
let month = date.getMonth() + 1
console.log(month)
let year = date.getFullYear() + 1
console.log(year)
countDays.textContent = '--'
countYears.textContent = '--'
countMonths.textContent = '--'
let objMonth = {
    0: '0',
    1: 'January',
    2: 'February',
    3: 'March',
    4: 'April',
    5: 'May',
    6: 'June',
    7: 'July',
    8: 'August',
    9: 'September',
    10: 'October',
    11: 'November',
    12: 'December',
}

ageButton.addEventListener('click', function () {
    countDays.textContent = `${dayInput.value - day}`
    if (dayInput.value === '') {
        dayInput.classList.add('error')
        countDays.textContent = '--'
        labels[0].style.color = 'red'
        shows[0].style.display = 'block'
    }

    if (countDays.textContent < 0) {
        countDays.textContent = `${day - dayInput.value}`
    }
    console.log(objMonth[monthInput.value])
    if (dayInput.value < 1 || dayInput.value > 31) {
        dayInput.classList.add('error')
        countDays.textContent = '--'
        labels[0].style.color = 'red'
        shows[0].style.display = 'block'
    }

    countMonths.textContent = `${monthInput.value - month}`
    if (monthInput.value === '') {
        monthInput.classList.add('error')
        countMonths.textContent = '--'
        labels[1].style.color = 'red'
        shows[1].style.display = 'block'
    }

    if (monthInput.value < 1 || monthInput.value > 12) {
        monthInput.classList.add('error')
        countMonths.textContent = '--'
        labels[1].style.color = 'red'
        shows[1].style.display = 'block'
    }

    if (objMonth[monthInput.value] === objMonth[12] && dayInput.value > 30 || objMonth[monthInput.value] === objMonth[2] && dayInput.value > 29 || objMonth[monthInput.value] === objMonth[4] && dayInput.value > 30 || objMonth[monthInput.value] === objMonth[6] && dayInput.value > 30 || objMonth[monthInput.value] === objMonth[9] && dayInput.value > 30 || objMonth[monthInput.value] === objMonth[11] && dayInput.value > 30) {
        countDays.textContent = '--'
        labels[0].style.color = 'red'
        shows[0].style.display = 'block'
        countMonths.textContent = '--'
        labels[1].style.color = 'red'
        shows[1].style.display = 'block'
        countYears.textContent = '--'
    }

    if (countMonths.textContent < 0) {
        countMonths.textContent = `${month - monthInput.value}`
    }

    countYears.textContent = `${year - yearInput.value}`
    if (yearInput.value === '') {
        yearInput.classList.add('error')
        countYears.textContent = '--'
        labels[2].style.color = 'red'
        shows[2].style.display = 'block'
    }
    if (yearInput.value > year) {
        yearInput.classList.add('error')
        countYears.textContent = '--'
        labels[2].style.color = 'red'
        shows[2].style.display = 'block'
    }

    if (monthInput.value > month) {
        countYears.textContent = `${year - yearInput.value - 1}`
    }

    if (dayInput.value > day) {
        countYears.textContent = `${year - yearInput.value - 1}`
    }
})

let lastDay = new Date(month + 1, year, 0).getDate()

console.log(lastDay)