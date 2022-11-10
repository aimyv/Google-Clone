// Deployed backend: https://google-clone-99dk.onrender.com
function iconRefresh(){
    location.reload()
}

let index=1;
const resultList = document.getElementById('divResult');
resultList.innerHTML = "";

const fetchAsync = async (index) => {
    // const rawData = await fetch(`http://localhost:3000/google/${index}`)
    const rawData = await fetch(`https://google-clone-99dk.onrender.com/google/${index}`)
    const googleData = await rawData.json();
    console.log(googleData);
}

async function append(input){
    let a;
    let b;
    if (input === 'turtle') {
        a = 1;
        b = 11;
    } else if (input === 'tiger') {
        a = 11;
        b = 21;
    } else if (input === 'koala') {
        a = 21;
        b = 31;
    } 
    for(let i=a; i<b; i++){
        // let rawData2 = await fetch(`http://localhost:3000/google/${i}`)
        let rawData2 = await fetch(`https://google-clone-99dk.onrender.com/google/${i}`)
        let googleData2 = await rawData2.json();
        console.log(googleData2);

        let div = document.createElement('div')
        div.className = `div${i}`
        resultList.appendChild(div)
        let gap = document.createElement('br')

        let li = document.createElement('li');
        li.textContent = googleData2.breadcrumb
        li.className = "breadCrumb"
        div.appendChild(li); 
        div.appendChild(gap)

        let li2 = document.createElement('a');
        li2.textContent = googleData2.title;
        li2.className = "title"
        li2.href = googleData2.url
        div.appendChild(li2); 
        div.appendChild(gap)

        let li3 = document.createElement('li');
        li3.textContent = googleData2.description
        li3.className = "description"
        div.appendChild(li3); 
        div.appendChild(gap)
        
    }
}

async function clear() {
    resultList.innerHTML = '';
}

const form = document.getElementById('search_form')

const btn1 = document.getElementById('submitButton1')
const btn2 = document.getElementById('submitButton2')
let searchCount = 0;
let randomCount = 0;

btn1.addEventListener('click', () => searchCount++)
btn2.addEventListener('click', () => randomCount++)

form.addEventListener('submit', (e) => {
    e.preventDefault()
    console.log(e.target.value);
    const searchQuery = document.getElementById('search_bar').value

    // filters non-letters
    const filter = /[^A-Za-z]/g; 
    const filteredQuery = searchQuery.replace(filter, '');

    // checks user has searched for any of the three terms and alerts them if not
    const search = filteredQuery.toLowerCase()
    const match = (search === 'turtle') || (search === 'tiger') || (search === 'koala');
    if(match && searchCount === 1) {
        append(search)
    } else if (match && randomCount === 1) {
        randomFetch(search)
    } else if(search === '' && randomCount === 1) {
        randomWebsite()
    } else{
        alert(`Search query for ${searchQuery} does not exist yet. Search for "turtle", "tiger", or "koala" instead.`)
    }
    
    clear()
    searchCount = 0
    randomCount = 0
})

const randomFetch = async (item) => {
    // const randData = await fetch(`http://localhost:3000/google/random/${item}`)
    const randData = await fetch(`https://google-clone-99dk.onrender.com/google/random/${item}`)
    const randomData = await randData.json();
    console.log(randomData)

    window.location.href = randomData.url
}

async function randomWebsite(){
    // let rawData3 = await fetch(`http://localhost:3000/google/random`)
    let rawData3 = await fetch(`https://google-clone-99dk.onrender.com/google/random`)
    let googleData3 = await rawData3.json();
    console.log(googleData3);

    window.location.href = googleData3.url
}

fetchAsync(index).catch(err => console.log(err));

const btn = document.getElementById('submitButton1');
