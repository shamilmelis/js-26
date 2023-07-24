// ========================= элементы =========================
const row = document.querySelector('.row')
const select = document.querySelector('.regionSelect')

// ========================= Массив в котором находиться значение выбранного option =========================
const regionArr = [];

// ========================= Countries API =========================
const checkRegion = () => {
    fetch(`https://restcountries.com/v3.1/region/${regionArr}`)
        .then(res => res.json())
        .then(data => {
            row.innerHTML = ''
            data.map(country => {
                row.innerHTML += `
                <div class="col">
                    <div class="box">
                        <img src=${country.flags.png} alt="" class="inner-img">
                        <h1 class="inner-title">${country.name.official}</h1>
                        <p class="inner-text">${country.capital}</p>
                    </div>
                </div>
                `
            })
        })
}

// ========================= Функция которая показывает регион =========================
select.addEventListener('click', () => {
    if (regionArr.length > 0) {
        regionArr.splice(0, 1)
    }
    regionArr.push(select.value)
    checkRegion()
})