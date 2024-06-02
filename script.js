const quotes=document.getElementById('quote'); // this is javascript function
const author=document.getElementById('author');
const onclickButtonHandler=document.getElementById('but');
onclickButtonHandler.addEventListener('click',function(){
    let num=Math.random()*quotesArray.length;
    let index=parseInt(num);
    quotes.innerText=quotesArray[index].text;
    author.innerText=quotesArray[index].author;
})