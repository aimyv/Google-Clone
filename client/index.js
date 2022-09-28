function searchResult(){
    console.log('testing')
    document.getElementById("centerPage").style.top = "10%";
    document.getElementById("search_bar").style.display = "none";
    document.getElementById("search_bar").style.display = "none";
    document.getElementById("submitButton1").style.display = "none";
    document.getElementById("submitButton2").style.display = "none";
}
// Testing :
// const fetchAsync = async (index) => {
//     const rawData = await fetch(`http://localhost:3000/google/${index}`);
//     const googleData = await rawData.json();
//     console.log(googleData)}


// const sendToPage = async (index) => {
//     var input = document.getElementById("search_form").value;
//     const turtleData = await fetch(`https://localhost:3000/${googleData.item.url}`);
//     const turtleDataJson = await turtleData.json();
//     for(let i=0; i<turtleDataJson.length; i++){
//         let searchItem = document.createElement('li');
//         searchItem.textContent = turtleDataJson.item.url
//     }
// }
