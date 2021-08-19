
function getPin(){
    const pin = Math.round(Math.random()*10000);
    const pinString = pin +'';
   if(pinString.length==4){
       return pin;
   }
   else{
    //    console.log('got 3 digit and calling again', pin)
       return getPin();
   }
}

function generatePin(){
 
   const pin =getPin();
document.getElementById('display-pin').value =pin;
 
    // console.log(pin);
}

document.getElementById('key-pad').addEventListener('click',function(event){
    const number=(event.target.innerText);
    const calcInput= document.getElementById('typed-numbers');
    if (isNaN(number)){
        if(number =='C'){
            calcInput.value='';
        }
    }
    else{

        const previousNumber = calcInput.value;
        const newCalc = previousNumber+number;
      
        calcInput.value = newCalc;
    }
    // console.log(number);
    
});

function verifyPin(){
    const pin =document.getElementById('display-pin').value;
    const typedNUmbers =document.getElementById('typed-numbers').value;
    const succsessMessage=document.getElementById('notify-success');
    const failError=document.getElementById('notify-fail');
    if (pin == typedNUmbers){
     
        succsessMessage.style.display='block';
       failError.style.display='none';
    }
    else{

        failError.style.display='block';
        
        succsessMessage.style.display='none';

    }
}