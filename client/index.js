function searchResult(){
    console.log('testing')
    document.getElementById("centerPage").style.top = "10%";
    document.getElementById("search_bar").style.display = "none";
    document.getElementById("search_bar").style.display = "none";
    document.getElementById("submitButton1").style.display = "none";
    document.getElementById("submitButton2").style.display = "none";
}
let index=1;

const fetchAsync = async (index) => {
    let rawData = await fetch(`http://localhost:3000/google/${index}`)
    let googleData = await rawData.json();
    console.log(googleData);   

    const resultList = document.getElementById('list');
    resultList.innerHTML = "";
    for(let i=1; i<11; i++){
        let li = document.createElement('li');
        li.textContent = googleData.url;
        resultList.appendChild(li); 
}
}


fetchAsync(index).catch(err => console.log(err));

const btn = document.getElementById('submitButton1');

// btn.addEventListener('click', () => {
//     const resultList = document.getElementById('divResult');
//     resultList.innerHTML = "";
//         for(let i=0; i<10; i++){
//             let li = document.createElement('li');
//             li.textContent = googleData.url[i];
//             resultList.appendChild(li);
//     }
// })



// const input = document.getElementById("search_bar");

// function searchFunction(){
    
// }

