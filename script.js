
const heartAmount =document.getElementById('heart-amount')
const coinAmount =document.getElementById('coinAmount')
const card = document.getElementById('card')

// Heart Count

card.addEventListener('click', function(event){

    if (event.target.classList.contains('heart-click')) {
           
    total = parseInt(heartAmount.innerText)
    total++
    heartAmount.innerText = total

    } 
})


card.addEventListener('click', function(event){

    if (event.target.classList.contains('btn-success')&& coinAmount.innerText >= 20 ) {
    
        console.log(event.target.parent)
        convertedCoin = parseInt(coinAmount.innerText)
        coin = convertedCoin - 20
        coinAmount.innerText = coin

        alert(`call`)
    

    } 
})

