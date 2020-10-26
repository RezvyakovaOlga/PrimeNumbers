var numEnterEl = document.getElementById ('num')
var btnCheckEl = document.querySelector (".knopka")
var divAnswerEl = document.getElementById ('answer')

function Calculation (num) {

    num = numEnterEl.value;
    
    if (num === "") 
        
    return divAnswerEl.innerText = 'Enter your number, please';
    
    num = parseFloat(num) 
        
    if ( num < 0 || Number.isInteger(num) !== true) {
    
        return divAnswerEl.innerText = num +' is not a natural number'

        }
    
   if (num % 2 === 0 || num === 1) {

        return divAnswerEl.innerText = num +' is not a prime number'

        }
 
        
    var i = 3, isPrime = true;
    
    while (isPrime && i <= Math.sqrt(num)) {
                
        if (num % i === 0) {
    
            isPrime = false
           
        }
    
            i += 2
      } 
    
     
       return (isPrime === true ? divAnswerEl.innerText = num + ' is a prime number' : divAnswerEl.innerText = num + ' is not a prime number') 
 }


function Clean () {

    divAnswerEl.innerText = ""

}

function Enter (event) {

    if (event.keyCode === 13) 
    btnCheckEl.click()

}


btnCheckEl.addEventListener ('click', Calculation)
numEnterEl.addEventListener ('input', Clean)
numEnterEl.addEventListener('keyup', Enter)