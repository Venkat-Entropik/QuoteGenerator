const quotes=document.getElementById('quote');
const author=document.getElementById('author');
const clickButton=document.getElementById('but');
clickButton.addEventListener('click',function(){
    let num=Math.random()*quotesArray.length;
    let index=parseInt(num);
    quotes.innerText=quotesArray[index].text;
    author.innerText=quotesArray[index].author;
})