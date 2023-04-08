import{getStars} from './starsRating.js';

const apiKey = "AIzaSyD5olFns5h9FLIMdSEF5iZDIkDVxAEjz4I";
const output = document.querySelector(".products-container");
const loadBtn = document.querySelector(".load-btn__container");
const genre = document.querySelectorAll(".product-genres__link");
let cartCount = 0;

genre.forEach(item =>{
    item.addEventListener('click', getBooks);
})
genre.forEach(link => {
    link.addEventListener('click', () => {
      genre.forEach(link => link.classList.remove('product-genres__active'));
      link.classList.add('product-genres__active');
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
                            <img src=${book.volumeInfo.imageLinks ? book.volumeInfo.imageLinks.thumbnail : "./src/img/placeholders/placeholder.png"} class="product-img" alt="book">
                        </div>
                        <div class ="product-description__container">
                            <p class="product-description author truncate">${book.volumeInfo.authors ? book.volumeInfo.authors : 'Unknown Author'}</p>
                            <p class="product-description product-title truncate-fourth">${book.volumeInfo.title ? book.volumeInfo.title : 'Unknown Book Name'}</p>
                            ${book.volumeInfo.averageRating ? `<p class="product-description about-book rating">${getStars(book.volumeInfo.averageRating)}</p>` : ''}
                             <p class="product-description about-book truncate">${book.volumeInfo.description ? book.volumeInfo.description : 'No Description Available'}</p>
                            ${book.volumeInfo.price ? `<p class="product-description product-price">${book.volumeInfo.price}</p>`: ''}
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
                    <img src=${book.volumeInfo.imageLinks ? book.volumeInfo.imageLinks.thumbnail : "./src/img/placeholders/placeholder.png"} class="product-img" alt="book">
                </div>
                <div class ="product-description__container">
                    <p class="product-description author truncate">${book.volumeInfo.authors ? book.volumeInfo.authors : 'Unknown Author'}</p>
                    <p class="product-description product-title truncate-fourth">${book.volumeInfo.title ? book.volumeInfo.title : 'Unknown Book Name'}</p>
                    ${book.volumeInfo.averageRating ? `<p class="product-description about-book rating">${getStars(book.volumeInfo.averageRating)}</p>` : ''}
                     <p class="product-description about-book truncate">${book.volumeInfo.description ? book.volumeInfo.description : 'No Description Available'}</p>
                    ${book.volumeInfo.price ? `<p class="product-description product-price">${book.volumeInfo.price}</p>`: ''}
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
            document.querySelector('.product-genres__active').click()  
            });

                
            
            

export {getBooks};

