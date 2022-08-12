
//-----Answer to the probelem no ((1))-----//


function radianToDegree(rad){
    const radsToDegs = rad * 180 / Math.PI;
    const result = radsToDegs.toFixed(2);
    // console.log(result);
    if (typeof rad !== 'Number'){
        return 'enter number'
    }
    return result;
}
radianToDegree(20);



//-----Answer to the probelem no ((2))-----//


function isJavaScriptFile(tuiKida){
    if (tuiKida.endsWith('.js') == true){
        return true;
    }

    else{
        return false;
    }
}

const tuikida = isJavaScriptFile('amiJava.js');
// console.log(tuikida);


//-----Answer to the probelem no ((3))-----//

function oilPrice(diesel, petrol, octane){
    const totalDiselPrice = diesel*114;
    const totalPetrolPrice = petrol*130;
    const totalOctanePrice = octane*135;
    const totalPrice = totalDiselPrice + totalPetrolPrice + totalOctanePrice ;

    if(typeof (diesel,petrol,octane) !== 'number'){
        return "Enter Oil Quantity";
    }

    return totalPrice;

}

const totalOilPrice = oilPrice(1, 0, 4);
// console.log(totalOilPrice);

//-----Answer to the probelem no ((4))-----//

function publicBusFare(peoples) {
    const myBus = peoples % 50;
    const myCar = myBus % 11;
    const publicBusCost = myCar * 250;
    if (typeof peoples !== 'number') {
        return 'please enter  a people number'
    }
    return publicBusCost;
}
const result = publicBusFare(3484);
// console.log(result);

//-----Answer to the probelem no ((5))-----//


function isBestFriend(myFriend, yourFriend){
    if (typeof myFriend !== 'object' || typeof yourFriend !== 'object'){
        return 'enter string'
    }
    else if (myFriend.name == yourFriend.friend && yourFriend.name == myFriend.friend){
        return true;
    }
    else{
        return false;
    }
    
}

const myFriend = {name: 'akash', friend: 'kotha'};
const yourFriend = {name:'kotha', friend:'akash'};
const isTrueBestFriend = isBestFriend (myFriend, yourFriend);

// console.log(isTrueBestFriend);


