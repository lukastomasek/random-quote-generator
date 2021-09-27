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
      quote_src.textContent = `- ${data.author}`
    })
    .catch(function(err){
      console.log(err)
    })

}


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

document.addEventListener('DOMContentLoaded', ()=> {
  generateQuote()
  console.log(RandomBg.changeBackgroundCol())
  main.style.backgroundColor = "#" + RandomBg.changeBackgroundCol()
})

quote_btn.addEventListener('click', ()=>{
  generateQuoteAsync()
  main.style.backgroundColor = "#" + RandomBg.changeBackgroundCol()
})

tweet_btn.addEventListener('click', ()=>{
  window.open(twitter_url)
})