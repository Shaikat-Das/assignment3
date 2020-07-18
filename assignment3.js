// wood Calculator

function woodCalculator(chair, table, bed){
    var stdQuantityForChair = 1*1;
    var stdQuantityForTable = 1*3;
    var stdQuantityForBed =1*5;

    var woodForChair = chair*stdQuantityForChair;
    var woodForTable = table*stdQuantityForTable;
    var woodForBed = bed*stdQuantityForBed;

    var totalWood = woodForChair+woodForTable+woodForBed;
    return totalWood;
}
var result = woodCalculator(3, 3, 3);
console.log("Total wood required (ft3):", result);


// feet to mile converter

function feetToMile(feet){
    var mile = feet/5280;
    return mile; 
}
    var convertFeet = feetToMile (20560);
    console.log (convertFeet);

// Brick Calculator

function brickCalculator (n){
    if (n<= 10) {
        return (15000*n);
        
    }
    else if (n>10 && n<=20) {
        return (15000*10)+(12000*(n-10));
    
    }
    else if (n>20) {
        return (15000*10)+12000*(n-(10+n-20))+(10000*(n-20));

    }
}
var result = brickCalculator (5); 
console.log ("Your required Brick Quantity:", result);

// tinyFriend

function tinyFriend (name){ 
        var smallestName = name[0];
        for (var i=0; i<name.length; i++){
            var currentName = name[i];
            if (char == " "){
                count++;
            }
            if (currentName < smallestName){
                smallestName = currentName;
            }

        }
        return smallestName = tinyFriend (['Jorina, Morjina, Sabana, Jabana, Khabana, boltu']);
        console.log (smallestName);
}