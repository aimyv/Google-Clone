function searchResult(){
    console.log('testing')
    document.getElementById("centerPage").style.top = "10%";
    document.getElementById("centerPage").style.marginTop = "5%";
    // document.getElementById("search_bar").style.display = "none";
    // document.getElementById("submitButton1").style.display = "none";
    // document.getElementById("submitButton2").style.display = "none";
}
let index=1;
const resultList = document.getElementById('divResult');
resultList.innerHTML = "";

const fetchAsync = async (index) => {
    const rawData = await fetch(`http://localhost:3000/google/${index}`)
    const googleData = await rawData.json();
    console.log(googleData);
}


async function append(input){
    let a = 1;
    let b = 11;
    if (input === 'tiger') {
        a = 11;
        b = 21;
    } else if (input === 'koala') {
        a = 21;
        b = 31;
    }
    for(let i=a; i<b; i++){
        let rawData2 = await fetch(`http://localhost:3000/google/${i}`)
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

form.addEventListener('submit', (e) => {
    e.preventDefault()
    console.log(e.target.value);
    const searchQuery = document.getElementById('search_bar').value
    console.log(searchQuery)
    if(searchQuery == 'turtle'){
        clear()
        append('turtle')
    } else if(searchQuery == 'tiger'){
        clear()
        append('tiger')
    } else if(searchQuery == 'koala'){
        clear()
        append('koala')
    } else if(searchQuery == ''){
        clear()
    } else{
        return console.log(`Search query for ${searchQuery} does not exist yet`)
    }
})

fetchAsync(index).catch(err => console.log(err));

const btn = document.getElementById('submitButton1');
