let number = 0;



function converter (){
    let modulo =  [];
    let resto;
    let decimal=0;

    if(number === 0){
        modulo.unshift(0);
    }

    while(number >= 1){

        if(number%2 === 1){
            resto = `${number%2}`;
            modulo.unshift(`${resto}`);
            decimal = ( number-resto)/2;
            number= decimal;
    
        } else if(number%2 === 0){
            resto = `${number%2}`;
            modulo.unshift(`${resto}`);
            decimal = number/2;
            number= decimal;
        }
    }  
    console.log(modulo);
    
}



converter(); 