let my_pics_arr = [
    {
        name: "Christopher",
        age: 37,
        picture: '../pics/Chris.jpg'
    }, {
        name: "Celine",
        age: 35,
        picture: '../pics/Celine.jpg'
    },

    {
        name: "Ethan",
        age: 3,
        picture: '../pics/Ethan.jpg'
    }
]
let html = '';

for( let i=0; i < my_pics_arr.length; i++){
    let pic = my_pics_arr[i];
    html += 
    `
    <h2>${pic.name}</h2>
    <h2>${pic.age}</h2>
    <img src="${pic.picture}" alt="${pic.name}">
    `;
}


document.querySelector(main).innerHTML(html)