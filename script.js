// const quotes = [
//   {
//     quote: "The best way to get started is to quit talking and begin doing.",
//     author: "Walt Disney"
//   },
//   {
//     quote: "Don’t let yesterday take up too much of today.",
//     author: "Dotman"
//   },
//   {
//     quote: "It’s not whether you get knocked down, it’s whether you get up.",
//     author: "Vince Lombardi"
//   },
//   {
//     quote: "Success is not in what you have, but who you are.",
//     author: "Bo Bennett"
//   },
//   {
//     quote: "Believe you can and you're halfway there.",
//     author: "Theodore Roosevelt"
//   }
// ];

// function generateQuote() {
//   let quoteDisplay = document.querySelector("#quote")
//   let authorDisplay = document.querySelector("#author")
//   let quoteNumber = Math.random()*5;
//   let quotesNumber = Math.floor(quoteNumber);

//   let quote = quotes[quotesNumber].quote;
//   let author = quotes[quotesNumber].author;
//   quoteDisplay.innerHTML = quote;
//   authorDisplay.innerHTML = author;
// }


let quote = "";
let author = "";
let quoteDisplay = document.querySelector("#quote")
let authorDisplay = document.querySelector("#author")

async function generateQuote() {
  try {
    
    let response = await fetch ("https://api.quotable.io/random");
    let data = await response.json();

    quote = data.content;
    author = data.author
    console.log(quote);
    console.log(author);
    quoteDisplay.innerHTML = quote;
    authorDisplay.innerHTML = author;

    
  } catch (error) {
    quoteDisplay.innerHTML = "Check Your Network";
    
  }  
}