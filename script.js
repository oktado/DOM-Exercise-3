let card = document.getElementById("card");

let fruits = [
    {
        image : "./bananas-white-background.jpg",
        title : "Pisang",
        Colour : "Kuning",
        taste  : "Manis,tekstur lembut.",
    },
    {
        image : "./orange-white-white.jpg",
        title : "Jeruk",
        Colour : "Oranye",
        taste  : "Asam, Manis, tekstur kasar dan berserat.",
    },
    {
        image : "./ripe-tasty-raw-striped-fruit.jpg",
        title : "Semangka",
        Colour : "Merah",
        taste  : "Manis, segar, mengandung banyak air.",
    },
];

card.innerHTML = fruits.map((fruit) => 
     `<div class="card">
        <img src="${fruit.image}" class="card-img-top">
        <div class="card-body">
            <h5 class="card-text">${fruit.title}</h5>
            <p class="card-text">${fruit.Colour}</p>
            <p class="card-text">${fruit.taste}</p>
        </div>
    </div>`   
);