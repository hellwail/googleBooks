const apiKey = "";


function getBooks(){
    fetch(`https://www.googleapis.com/books/v1/volumes?q="subject:Film&TV&Drama"&key=${apiKey}&printType=books&startIndex=0&maxResults=6&langRestrict=en`)
    .then(data => data.json())
    .then(data => {
        console.log(data);
    })
}
getBooks();



  

// Bestsellers `https://www.googleapis.com/books/v1/volumes?q="subject:Bestsellers"&key=${apiKey}&printType=books&startIndex=0&maxResults=6&langRestrict=en`
// Art&Fashion  `https://www.googleapis.com/books/v1/volumes?q="subject:Art&Fashion"&key=${apiKey}&printType=books&startIndex=0&maxResults=6&langRestrict=en`
// Biography  `https://www.googleapis.com/books/v1/volumes?q="subject:Biography"&key=${apiKey}&printType=books&startIndex=0&maxResults=6&langRestrict=en`
// Business  `https://www.googleapis.com/books/v1/volumes?q="subject:Business"&key=${apiKey}&printType=books&startIndex=0&maxResults=6&langRestrict=en`
// Childrens  `https://www.googleapis.com/books/v1/volumes?q="subject:Childrens"&key=${apiKey}&printType=books&startIndex=0&maxResults=6&langRestrict=en`
// Education  `https://www.googleapis.com/books/v1/volumes?q="subject:Education"&key=${apiKey}&printType=books&startIndex=0&maxResults=6&langRestrict=en`
// Fiction&Poetry  `https://www.googleapis.com/books/v1/volumes?q="subject:Fiction&Poetry"&key=${apiKey}&printType=books&startIndex=0&maxResults=6&langRestrict=en`
// Film, TV&Drama  `https://www.googleapis.com/books/v1/volumes?q="subject:Film&TV&Drama"&key=${apiKey}&printType=books&startIndex=0&maxResults=6&langRestrict=en`
// Food&Drink  `https://www.googleapis.com/books/v1/volumes?q="subject:Food&Drink"&key=${apiKey}&printType=books&startIndex=0&maxResults=6&langRestrict=en`
    
