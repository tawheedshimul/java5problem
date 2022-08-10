
//**-------1 no problem------**//
//Radians to Degree//
//*****//

function radianToDegree(rad){
    const radsToDegs = rad * 180 / Math.PI;
    const result = radsToDegs.toFixed(2);
    // console.log(result);
    return result;
}
// radianToDegree();




//**-------2 no problem------**//
//The given file name is a javascript or not//
//*****//

function isJavaScriptFile(tuiKida){
    if (tuiKida.endsWith('.js') == true){
        return true;
    }

    else{
        return false;
    }
}

const tuikida = isJavaScriptFile('amiJava.js');
console.log(tuikida);


//**-------3 no problem------**//
//Calculate the total price//
//*****//

const oilBuy = [
    { name: 'diesel', price: 114, quantity: 30},
    { name: 'petrol', price: 130, quantity: 20},
    { name: 'octane', price: 135, quantity: 10},
];

function oilPrice(oil){
    let sum = 0;
    for(let i = 0; i<oil.length; i++){
        const product= oil[i];
        sum = sum + product.price*product.quantity;
    }
    return sum;

}

const expense = oilPrice(oilBuy);
console.log('total cost', expense);

//**-------4 no problem------**//
//Calculate the total price//
//*****//




