var marks= [45, 81, 63, 98, 56, 35, 23]
var max= marks[0];
for(var i=0; i<marks.length; i++)

{
    var element= marks[i];
    if(element>max) {max=element;}
}
console.log("heighest marks:", max);


// sum of the array elements

var numbers= [45, 81, 63, 98, 56, 35, 23]
var sum= 0;
for (var i=0; i< numbers.length; i++){
        var element= numbers[i];
        sum= sum+element;
        }

        console.log("Total of the numbers:", sum);


// 15.7 Remove duplicate item from an arry

var name= [3, 6, 2, 7, 3, 2, 8, 1, 9, 11, 56];
var uniqueName= [];

for (var i=0; i<name.length; i++){
        var element= name[i];
        var index= uniqueName.indexOf(element);
        if(index== -1){uniqueName.push(element);}
}
    console.log (uniqueName);


//     

// var name = ["Jamal", "Kamal", "Moriom", "Abul", "sikder"]
// console.log (name.length);



// var words = ["Jamal", "Kamal", "Moriom", "Abul", "sikder"]; 
// function tinyFriends( names ) {
//       // create an array of the words
  
//     for ( i = 0; i < words.length; i++ ){   // Looping through the array to find index
//       var length = words[i].length;    // Setting  variable 'length' as the length of an index in the array
//       var min = Math.min(length);   // Setting variable 'min' to index in the array that's the shortest
//       return min;   // min should return whatever length is the shortest?
//     }
//   }
  
//   var shortestNames =  words;
//   console.log (shortestNames);
//
function tinyFriends (name){
        var smallest= 0;
        for (var i=0; i<name.length; i++){
            var element = name[i].length;
            var min = Math.min (element);
            return min;
        }
    }
    var name = ["Jamal Kamal Moriom Abul sikder"];
    var result = tinyFriends(name);
    console.log = ("Tiny Friends Name:", result);
    
    // 
    