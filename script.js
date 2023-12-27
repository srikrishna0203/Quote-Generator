let quote = document.querySelector('#quote');
let person = document.querySelector('.person')
let btn = document.querySelector('#new-quote')

const quotes =
[{quote:"'To live is the rarest thing in the world. Most people exist, that is all.' ",person:" Oscar Wilde"},
{quote:"That it will never come again is what makes life so sweet.' ",person:"Emily Dickinson"},
{quote:"'It is never too late to be what you might have been.' ",person:"George Eliot"},
{quote:"'To be yourself in a world that is constantly trying to make you something else is the greatest accomplishment.' ",person:"Ralph Waldo Emerson"},
{quote:"'Pain is inevitable. Suffering is optional.' ",person:"Haruki Murakami"},
{quote:"All the world's a stage, and all the men and women merely players.' ",person:"William Shakespeare"},
{quote:"'Be kind, for everyone you meet is fighting a hard battle.' ",person:"Plato"},
{quote:"'Unable are the loved to die for love is immortality.' ",person:"Emily Dickinson"},
{quote:" 'Let me live, love, and say it well in good sentences.' ",person:"Sylvia Plath"},
{quote:"'Don't let your happiness depend on something you may lose.' ",person:"C.S. Lewis"}]


btn.addEventListener('click',function(){
    let randomquote = Math.floor(Math.random()*quotes.length)
    console.log(randomquote);
    quote.innerText=quotes[randomquote].quote;
    person.innerText=quotes[randomquote].person;
})