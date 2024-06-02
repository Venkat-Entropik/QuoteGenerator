const quotes=document.getElementById('quote'); // this is javascript function
const author=document.getElementById('author');
const clickButton=document.getElementById('but');
clickButton.addEventListener('click',function(){
    let num=Math.random()*quotesArray.length;
    let index=parseInt(num);
    quotes.innerText=quotesArray[index].text;
    author.innerText=quotesArray[index].author;
})