const container = document.getElementById('container');

let info = []
 info = JSON.parse( localStorage.getItem('favorites'))
console.log(info);

const ulEl = document.createElement('ul')
for (let item of info) {
 const liEl = document.createElement('li')

 liEl.insertAdjacentHTML("afterbegin", `${item.name} - ${item.age} - ${item.status}`)
 ulEl.append(liEl)
}
container.append(ulEl)
