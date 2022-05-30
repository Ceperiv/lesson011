// // -створити форму з інпутами для name та age.
// //     При відправці форми записати об'єкт в localstorage
// const h1 = document.querySelector('h1')
// const br = document.createElement('br')
//
// const form = document.createElement('form')
// form.name = 'userforms'
//
// const input1 = document.createElement('input')
// input1.type = 'name';
//
// const input2 = document.createElement('input')
// input2.type = 'number';
// input2.max = 122
// input2.min = 0
//
//
// const button = document.createElement('button')
// button.innerHTML = `<h4> -  save  -  </h4>`
//
// form.append(input1, br, input2, br, button)
// h1.after(form)
//
// button.onclick = function (e) {
//     if (input1 && input2 && input2.value <= 122 && input2.value >= 0 && input1.value !== "" && input2.value !== "") {
//         let obj = JSON.parse(localStorage.getItem('key')) || []
//         if (obj.length >= 5) {
//             obj.splice(0, 1)
//             obj.push({name: input1.value, age: input2.value})
//         } else {
//             obj.push({name: input1.value, age: input2.value})
//         }
//         localStorage.setItem('key', JSON.stringify(obj))
//     } else {
//         e.preventDefault()
//         alert('input error')
//     }
// }
// input1.insertAdjacentHTML('beforebegin', '<h3>user name:</h3>')
// input2.insertAdjacentHTML('beforebegin', '<h3>age:</h3>')


// -створити форму з інпутами для model,type та volume автівки.
//     при відпарвці форми об'єкти зберігаються в масиві в локальному сховищі.

const br = document.createElement('br')
const h1 = document.querySelector('h1')
const form = document.createElement('form')
form.name = 'userforms'

const model = document.createElement('input')
model.type = 'text';

const type = document.createElement('input')
type.type = 'text';

const volume = document.createElement('input')
volume.type = 'number';

const button = document.createElement('button')

button.innerHTML = `<h4> -  write down  -  </h4>`
form.append(model, br, type, br, volume, br, button)

h1.after(form)
model.insertAdjacentHTML('beforebegin', '<h3>Марка автомобіля:</h3>')
type.insertAdjacentHTML('beforebegin', '<h3>Тип палива:</h3>')
volume.insertAdjacentHTML('beforebegin', '<h3>Потужність двигуна:</h3>')




const save = (a, b, c) => {
    const carObj = JSON.parse(localStorage.getItem('cars')) || []
    carObj.push({ a, b, c });
    localStorage.setItem('cars', JSON.stringify(carObj))
    console.log(carObj.length);
    const divka = document.createElement('div')
    form.after(divka)
    divka.style.display = 'flex'
    divka.insertAdjacentHTML("beforeend", `<h3>${a}</h3>---<h4>${b}</h4>---<p>${c}</p>`)
}


button.onclick = (e) => {
    e.preventDefault()
    save(model.value, type.value, volume.value)
    model.value = ''
    type.value = ''
    volume.value = ''
}



