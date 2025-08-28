
const heartAmount =document.getElementById('heart-amount')
const coinAmount =document.getElementById('coinAmount')
const card = document.getElementById('card')
const historyContainer = document.getElementById('history-container')
const clearButton = document.getElementById('clear-button')

const history = [];


// Heart Count

card.addEventListener('click', function(event){

    if (event.target.classList.contains('heart-click')) {
           
    total = parseInt(heartAmount.innerText)
    total++
    heartAmount.innerText = total


    
    } 
})

card.addEventListener('click', function(event){

    if (event.target.classList.contains('copy-button')) {
           
        helplineNumber = event.target.parentNode.parentNode.children[3].innerText

        navigator.clipboard.writeText(helplineNumber).then(() => {
        alert("Copied Number " + helplineNumber);
      });


    
    } 
})

card.addEventListener('click', function(event){

    if (event.target.classList.contains('btn-success')&& coinAmount.innerText >= 20 ) {

        let timeString = new Date().toLocaleTimeString();
    
        
        convertedCoin = parseInt(coinAmount.innerText)
        coin = convertedCoin - 20
        coinAmount.innerText = coin

        helplineNumber = event.target.parentNode.parentNode.children[3].innerText
        helplineName = event.target.parentNode.parentNode.children[1].innerText
        alert(` 📞 Calling ${helplineName} ${helplineNumber}......`)
    
 

        const div = document.createElement('div')


       div.innerHTML = `<div class="flex justify-between items-center bg-blue-100 p-3 rounded-lg mb-2">
            <div>
                <h1 class="font-bold">${helplineName}</h1>
                <p>${helplineNumber}</p>
            </div>

            <p>${timeString}</p>
            </div> `


       historyContainer.appendChild(div)
       

        console.log(data.date)

    } 

    else if(coinAmount.innerText < 20){
        alert("Insufficient Coin, You need atleast 20 coins")
    }
})

clearButton.addEventListener('click', function(){

     if (historyContainer) {
      historyContainer.replaceChildren(); // Removes all children
    }
})






