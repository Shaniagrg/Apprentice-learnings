/******************************************
Treehouse FSJS Techdegree:
project 1 - A Random Quote Generator
******************************************/

// For assistance: 
  // Check the "Project Resources" section of the project instructions
  // Reach out in your Slack community - https://treehouse-fsjs-102.slack.com/app_redirect?channel=chit-chat

/*** 
 * `quotes` array 
***/

let quotes = [
    {
      quote: "The future depends on what you do today.",
      source: "Mahatma Gandhi",
      tags: ["History","Inspiration"]
    },
    {
      quote: "The only way to do great work is to love what you do.",
      source: "Steve Jobs",
      year: 2005
    },
    {
      quote: "It always seems impossible until it's done.",
      source: "Nelson Mandela",
      citation: "https://www.nelsonmandela.org/",
      citationName: "Long Walk to Freedom",
      year: 2001
    },
    {
      quote: "The only limit to our realization of tomorrow is our doubts of today.",
      source: "Franklin D. Roosevelt"
    },
    {
      quote: "Believe you can and you're halfway there.",
      source: "Theodore Roosevelt"
    },
    {
      quote: "Success is not final, failure is not fatal: it is the courage to continue that counts.",
      source: "Winston Churchill",
      citation: "https://www.winstonchurchill.org/",
      citationName: "Speech to the House of Commons",
      year: 1949
    },
    {
      quote: "The journey of a thousand miles begins with one step.",
      source: "Lao Tzu"
    }
  ];
  
  
  /***
   * `getRandomQuote` function
  ***/
  function getRandomQuote (){
    let randomNumber = Math.floor(Math.random() * quotes.length);
    return quotes[randomNumber];
  }
  //function return random color
  
  /***
   * `printQuote` function
  ***/
  function printQuote(){
    let randomQuote = getRandomQuote();
    //call random color
    let quoteHtml = `<p class="quote"> ${randomQuote.quote}</p> 
                     <p class="source"> ${randomQuote.source} `;
  
  
    if (randomQuote.year){
      quoteHtml += `<span class="year"> ${randomQuote.year} </span>`
    }
    
    if (randomQuote.citation){ 
      quoteHtml += `<span class="citation"> 
                      <a target = "_blank" href = "${randomQuote.citation}">${randomQuote.citationName}</a> 
                    </span>`
    } 
    if (randomQuote.tags){
      quoteHtml += `<span> ${randomQuote.tags.join(', ')}</span>`;
    
    }
    quoteHtml += '</p>';
    document.getElementById('quote-box').innerHTML = quoteHtml; 
  
  }
  printQuote(); 
  
  /***
   * click event listener for the print quote button
   * DO NOT CHANGE THE CODE BELOW!!
  ***/
  
  document.getElementById('load-quote').addEventListener("click", printQuote, false);