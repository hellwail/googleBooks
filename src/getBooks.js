import{getStars} from './starsRating.js';

const apiKey = "AIzaSyD5olFns5h9FLIMdSEF5iZDIkDVxAEjz4I";
const output = document.querySelector(".products-container");
const loadBtn = document.querySelector(".load-btn__container");
const genre = document.querySelectorAll(".book-genres__link");


genre.forEach(item =>{
    item.addEventListener('click', getBooks);
})
genre.forEach(link => {
    link.addEventListener('click', () => {
      genre.forEach(link => link.classList.remove('active-link'));
      link.classList.add('active-link');
    });
  });

function getBooks(event){
    let startIndex = 0; 
    const limit = 6; 
    const loadMore = () => { 
        startIndex += limit; 
        fetch(`https://www.googleapis.com/books/v1/volumes?q="subject:${event.target.innerText}"&key=${apiKey}&printType=books&startIndex=${startIndex}&maxResults=${limit}&langRestrict=en`)
            .then(response => {
                return response.json()
            })
            .then (data => {
                data.items.forEach (book => {
                    const bookTemplate = `<div class="product-item">
                        <div class="product-img">
                            <img src=${book.volumeInfo.imageLinks ? book.volumeInfo.imageLinks.thumbnail : "img/placeholder.png"} class="book-img" alt="book">
                        </div>
                        <div class ="product-decription">
                            <p class="img-description author">${book.volumeInfo.authors ? book.volumeInfo.authors : 'Unknown Author'}</p>
                            <p class="img-description books-title">${book.volumeInfo.title ? book.volumeInfo.title : 'Unknown Book Name'}</p>
                            ${book.volumeInfo.averageRating ? `<p class="img-description about-book rating">${getStars(book.volumeInfo.averageRating)}</p>` : ''}
                             <p class="img-description about-book truncate-3">${book.volumeInfo.description ? book.volumeInfo.description : 'No Description Available'}</p>
                              ${book.volumeInfo.price ? `<p class="img-description price">${book.volumeInfo.price}</p>`: ''}
                            <button class="product-btn">Buy now</button>
                        </div>
                    </div>`;
                    output.innerHTML += bookTemplate;
                });
            });
    };

    fetch(`https://www.googleapis.com/books/v1/volumes?q="subject:${event.target.innerText}"&key=${apiKey}&printType=books&startIndex=${startIndex}&maxResults=${limit}&langRestrict=en`)
        .then(response => {
            return response.json();
        })
        .then(data => {
            output.innerHTML = '';
            data.items.forEach(book => {
                const bookTemplate = `<div class="product-item">
                    <div class="product-img">
                        <img src=${book.volumeInfo.imageLinks ? book.volumeInfo.imageLinks.thumbnail : "img/placeholder.png"} class="book-img" alt="book">
                    </div>
                    <div class ="product-decription">
                    <p class="img-description author">${book.volumeInfo.authors ? book.volumeInfo.authors : 'Unknown Author'}</p>
                    <p class="img-description books-title">${book.volumeInfo.title ? book.volumeInfo.title : 'Unknown Book Name'}</p>
                    ${book.volumeInfo.averageRating ? `<p class="img-description about-book rating">${getStars(book.volumeInfo.averageRating)}</p>` : ''}
                    <p class="img-description about-book truncate-3">${book.volumeInfo.description ? book.volumeInfo.description : 'No Description Available'}</p>
                    ${book.volumeInfo.price ? `<p class="img-description price">${book.volumeInfo.price}</p>`: ''}
                        <button class="product-btn">Buy now</button>
                    </div>
                </div>`;
                output.innerHTML += bookTemplate;
            });
            loadBtn.addEventListener('click', loadMore);
            });
        };

        window.addEventListener('load', () => {
            document.querySelector('.active-link').click()  
            });

            

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
    
