import{getStars} from './starsRating.js';

const apiKey = "AIzaSyD5olFns5h9FLIMdSEF5iZDIkDVxAEjz4I";
const output = document.querySelector(".products-container");
const loadBtn = document.querySelector(".load-btn__container");
const genre = document.querySelectorAll(".book-genres__link");
let cartCount = 0;

genre.forEach(item =>{
    item.addEventListener('click', getBooks);
})
genre.forEach(link => {
    link.addEventListener('click', () => {
      genre.forEach(link => link.classList.remove('book-genres__active'));
      link.classList.add('book-genres__active');
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
                    const bookTemplate = `<div class="product">
                        <div class="product-img__container">
                            <img src=${book.volumeInfo.imageLinks ? book.volumeInfo.imageLinks.thumbnail : "img/placeholder.png"} class="product-img" alt="book">
                        </div>
                        <div class ="product-description__container">
                            <p class="product-img__description author">${book.volumeInfo.authors ? book.volumeInfo.authors : 'Unknown Author'}</p>
                            <p class="product-img__description product-title">${book.volumeInfo.title ? book.volumeInfo.title : 'Unknown Book Name'}</p>
                            ${book.volumeInfo.averageRating ? `<p class="product-img__description about-book rating">${getStars(book.volumeInfo.averageRating)}</p>` : ''}
                             <p class="product-img__description about-book truncate">${book.volumeInfo.description ? book.volumeInfo.description : 'No Description Available'}</p>
                            ${book.volumeInfo.price ? `<p class="product-img__description product-price">${book.volumeInfo.price}</p>`: ''}
                            <button class="product-btn buy-btn" id="s">Buy now</button>
                        </div>
                    </div>`;
                    output.innerHTML += bookTemplate;

                    // basket tracker function
                    function basketCounter(){
                        const buyBtn = document.querySelectorAll('.buy-btn');
                        const cartCountElem = document.getElementById('cart-count');
                        const tracker = document.getElementById('cart-count');
                        
                        buyBtn.forEach((elem)=>{
                        elem.addEventListener("click", () => {
                            if (cartCount == 0){
                            tracker.classList.add('active-bag');}
                            cartCount++;
                            cartCountElem.textContent = cartCount;
                          });
                        });
                        }
                        basketCounter();
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
                const bookTemplate = `<div class="product">
                <div class="product-img__container">
                    <img src=${book.volumeInfo.imageLinks ? book.volumeInfo.imageLinks.thumbnail : "img/placeholder.png"} class="product-img" alt="book">
                </div>
                <div class ="product-description__container">
                    <p class="product-img__description author">${book.volumeInfo.authors ? book.volumeInfo.authors : 'Unknown Author'}</p>
                    <p class="product-img__description product-title">${book.volumeInfo.title ? book.volumeInfo.title : 'Unknown Book Name'}</p>
                    ${book.volumeInfo.averageRating ? `<p class="product-img__description about-book rating">${getStars(book.volumeInfo.averageRating)}</p>` : ''}
                     <p class="product-img__description about-book truncate">${book.volumeInfo.description ? book.volumeInfo.description : 'No Description Available'}</p>
                    ${book.volumeInfo.price ? `<p class="product-img__description product-price">${book.volumeInfo.price}</p>`: ''}
                    <button class="product-btn buy-btn" id = "s">Buy now</button>
                </div>
            </div>`;
                output.innerHTML += bookTemplate;

                // basket tracker function
                function basketCounter(){
                    const buyBtn = document.querySelectorAll('.buy-btn');
                    const cartCountElem = document.getElementById('cart-count');
                    const tracker = document.getElementById('cart-count');
                    
                    buyBtn.forEach((elem)=>{
                    elem.addEventListener("click", () => {
                        if (cartCount == 0){
                        tracker.classList.add('active-bag');}
                        cartCount++;
                        cartCountElem.textContent = cartCount;
                      });
                    });
                    }
                    basketCounter();
            });
            loadBtn.addEventListener('click', loadMore);
            });
            
        };

        window.addEventListener('load', () => {
            document.querySelector('.book-genres__active').click()  
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
    
