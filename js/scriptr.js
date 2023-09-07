let inptTextInformation = document.getElementById('inputText')



const inptButton1 = () => {
    let check = document.getElementById('check')

    if (!inptTextInformation.value) {
        
        inptTextInformation.style.border = 'red solid 1px'
        check.style.display = 'block'
       
      
    } else {
        inptTextInformation.style.border = ''
        check.style.display = ''
        check.innerText=`sucessfull`
        console.log(inptTextInformation.value);
        inptTextInformation.value = ''
    }
    
};
const targetInputButton = document.getElementById('btn');
targetInputButton.addEventListener("click", inptButton1);

//Adicionar evento ao último botão
let lastInptTextInformation = document.querySelector('input.lastInputText')
const lastButton = () => {
    let alertCheckImail = document.getElementById('alertCheckImail');

    if (!lastInptTextInformation.value) {
        lastInptTextInformation.style.border = 'red solid 1px'
        alertCheckImail.innerText=``
    } else {
        alertCheckImail.style.display = 'block';
    
        alert('Check seu email para fazer a confirmação!');
        lastInptTextInformation.value = ''
        lastInptTextInformation.style.border = ''
    }
    
};
const targetLastButton = document.querySelector('input.btn2')
targetLastButton.addEventListener("click", lastButton);

window.addEventListener('resize', function() {
    var body = document.querySelector('body');
    var screenWidth = window.innerWidth;
  
    if (screenWidth < 768) {
      body.classList.add('small-screen');
    } else {
      body.classList.remove('small-screen');
    }
  });