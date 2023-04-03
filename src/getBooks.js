const apiKey = "AIzaSyD5olFns5h9FLIMdSEF5iZDIkDVxAEjz4I";
const output = document.querySelector(".products-container");
const load = document.querySelector(".load-btn");
const genre = document.querySelectorAll(".book-genres__link");

genre.forEach(item =>{
    item.addEventListener('click', getBooks);
})


function getBooks(event){
    fetch(`https://www.googleapis.com/books/v1/volumes?q="subject:${event.target.innerText}"&key=${apiKey}&printType=books&startIndex=0&maxResults=6&langRestrict=en`)
    .then(response => {
        return response.json()
    })
    .then (data => {
        output.innerHTML = ''
        data.items.forEach (book => {
            const bookTemplate = `
            <div class="product-item">
            <div class="product-img">
            <img src = ${book.volumeInfo.imageLinks ? book.volumeInfo.imageLinks.thumbnail : "img/2.png"} class = "book-img" alt="book">
            </div>
            <div class ="product-decription">
            <p class="img-description author">${book.volumeInfo.authors}</p>
            <p class="img-description books-title">${book.volumeInfo.title}</p>
            <p class="img-description about-book truncate-3">${book.volumeInfo.description}</p>
            <p class="img-description price">${book.volumeInfo.price}</p>
            <button class="product-btn">Buy now</button>
            </div>
            `;
            output.innerHTML += bookTemplate;
        })
    })
}

load.addEventListener('click', getBooks);

export {getBooks};

  

// Bestsellers `https://www.googleapis.com/books/v1/volumes?q="subject:Bestsellers"&key=${apiKey}&printType=books&startIndex=0&maxResults=6&langRestrict=en`
// Art&Fashion  `https://www.googleapis.com/books/v1/volumes?q="subject:Art&Fashion"&key=${apiKey}&printType=books&startIndex=0&maxResults=6&langRestrict=en`
// Biography  `https://www.googleapis.com/books/v1/volumes?q="subject:Biography"&key=${apiKey}&printType=books&startIndex=0&maxResults=6&langRestrict=en`
// Business  `https://www.googleapis.com/books/v1/volumes?q="subject:Business"&key=${apiKey}&printType=books&startIndex=0&maxResults=6&langRestrict=en`
// Childrens  `https://www.googleapis.com/books/v1/volumes?q="subject:Childrens"&key=${apiKey}&printType=books&startIndex=0&maxResults=6&langRestrict=en`
// Education  `https://www.googleapis.com/books/v1/volumes?q="subject:Education"&key=${apiKey}&printType=books&startIndex=0&maxResults=6&langRestrict=en`
// Fiction&Poetry  `https://www.googleapis.com/books/v1/volumes?q="subject:Fiction&Poetry"&key=${apiKey}&printType=books&startIndex=0&maxResults=6&langRestrict=en`
// Film, TV&Drama  `https://www.googleapis.com/books/v1/volumes?q="subject:Film&TV&Drama"&key=${apiKey}&printType=books&startIndex=0&maxResults=6&langRestrict=en`
// Food&Drink  `https://www.googleapis.com/books/v1/volumes?q="subject:Food&Drink"&key=${apiKey}&printType=books&startIndex=0&maxResults=6&langRestrict=en`
    
