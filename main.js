var button = document.querySelector(".button");



function convert(){
    price=document.querySelector('.price').value;
    currency = document.querySelector('.currency').value;
    result='';
    
    
    if(currency == 'dollar'){
        result= price/3.5 + ' Dollars'
    }
    
    else if(currency=='dinar'){
        result= price/5 + ' Dinars'
    }
    document.querySelector('.result').innerText = 'Converted Price: ' + result;


}

button.onclick=convert;

