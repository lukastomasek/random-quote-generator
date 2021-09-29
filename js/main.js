import RandomCol from './classes/BgChanger.js'


const quote_btn = document.getElementById('quote-btn')
const tweet_btn = document.getElementById('tweet')
const quote = document.querySelector('.quote')
const quote_src = document.querySelector('.author')
const main = document.querySelector('main')

const RandomBg = new RandomCol()

const url = "https://api.quotable.io/random?minLength=100&maxLength=140"
const twitter_url = "https://twitter.com/"

function generateQuote(){
  fetch(url)
    .then(function(data){
      return data.json()
    })
    .then(function(data){
      quote.textContent = `"${data.content}"`
      quote_src.textContent = `${data.author}`
    })
    .catch(function(err){
      console.log(err)
    })

}

const randomBackground = () => main.style.backgroundColor = "#" + RandomBg.changeBackgroundCol()

async function generateQuoteAsync(){

  try{
    let promise = await fetch(url)
    let data = await promise.json()

    if(data){
      quote.textContent = `"${data.content}"`
      quote_src.textContent = `${data.author}`
    }

  }catch(err){
    console.log(err)
    return
  }

}

function copyToClipboard(text){
  let copyQuote = text

  navigator.clipboard.writeText(copyQuote)

  alert(`Copied text to clipboard!`)

}

document.addEventListener('DOMContentLoaded', ()=> {
  generateQuote()
  randomBackground()  
})

quote_btn.addEventListener('click', ()=>{
  generateQuoteAsync()
  randomBackground()
})

tweet_btn.addEventListener('click', ()=>{
  copyToClipboard(quote.textContent)
  window.open(twitter_url)
})