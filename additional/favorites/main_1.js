// створити під кожен об'єкт свій блок з конопкою "додати до улюблених" при натисканні на яку об'єкт потрапляє
// до масиву favorites улюблених обраних об'єктів в локальному сховищі.
// Створити сторніку favorites.html при переході на яку потрібно вивест в документ всіх обраних на попередньому етапі.


const users = [
    {name: 'sasha', age: 31, status: false},
    {name: 'petya', age: 30, status: true},
    {name: 'kolya', age: 29, status: true},
    {name: 'dasha', age: 28, status: false},
    {name: 'max', age: 30, status: true},
    {name: 'anya', age: 31, status: false},
    {name: 'oleg', age: 28, status: false},
    {name: 'andrey', age: 29, status: true},
    {name: 'masha', age: 30, status: true},
    {name: 'natasha', age: 31, status: false},
    {name: 'max', age: 31, status: true}
];


const container = document.getElementById('container');

for (let user of users) {
    const toFavoritesBtn = document.createElement('button')
    toFavoritesBtn.innerText = 'to favorites'

    const p = document.createElement('p')
    p.insertAdjacentHTML('afterbegin', `${user.name} - ${user.age} - ${user.status}`)
    p.append(toFavoritesBtn)
    container.append(p)

    toFavoritesBtn.onclick = function (e) {
        const obj = JSON.parse(localStorage.getItem('favorites')) || []
        obj.push({name: user.name, age: user.age, status: user.status})
        localStorage.setItem('favorites', JSON.stringify(obj))
        toFavoritesBtn.disabled = true
    }

}
