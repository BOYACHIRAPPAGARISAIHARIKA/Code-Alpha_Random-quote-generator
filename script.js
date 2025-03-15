const quotes = [
    {
        quote: "The only way to do great work is to love what you do.",
        author: "Steve Jobs"
    },
    {
        quote: "Innovation distinguishes between a leader and a follower.",
        author: "Steve Jobs"
    },
    {
        quote: "The future belongs to those who believe in the beauty of their dreams.",
        author: "Eleanor Roosevelt"
    },
    {
        quote: "Success is not final, failure is not fatal: it is the courage to continue that counts.",
        author: "Winston Churchill"
    },
    {
        quote: "The only impossible journey is the one you never begin.",
        author: "Tony Robbins"
    }
];

const quoteEl = document.getElementById('quote');
const authorEl = document.getElementById('author');
const newQuoteBtn = document.getElementById('new-quote');
const twitterBtn = document.getElementById('twitter');

function newQuote() {
    const randomIndex = Math.floor(Math.random() * quotes.length);
    const { quote, author } = quotes[randomIndex];
    
    quoteEl.textContent = quote;
    authorEl.textContent = author;
}

function tweetQuote() {
    const twitterUrl = `https://twitter.com/intent/tweet?text=${encodeURIComponent(
        `"${quoteEl.textContent}" - ${authorEl.textContent}`
    )}`;
    window.open(twitterUrl, '_blank');
}

// Event Listeners
newQuoteBtn.addEventListener('click', newQuote);
twitterBtn.addEventListener('click', tweetQuote);

// Initial Quote
newQuote();
