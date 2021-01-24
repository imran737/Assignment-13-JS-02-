// Changing case


// var name = prompt("enter name");
// var teacher = ["ALI", "MUGHAL" , "BASIT", "GHOUS", "AHMED"]
// name = name.toUpperCase();
// for (var i=0; i<teacher.length; i++){
//     if (name === teacher[i]){
//         alert("true");
//     }
// }

// var name = prompt("enter name");
// var teacher = ["ali", "mughal" , "basit", "ghous", "ahmed"]
// name = name.toLowerCase();
// for (var i=0; i<teacher.length; i++){
//     if (name === teacher[i]){
//         alert("true");
//     }
// }

// Strings: measuring length and extracting parts


// var mobile = prompt("enter mobile");
// var numChars = mobile.length;
// document.write(numChars);

// var name = prompt("enter name");
// var lastChar = name.charAt (name.length-1);
// document.write(lastChar);

// Strings: finding segments

// var name = ("pakistani");
// var index = name.indexOf("n");
// document.write(index);

// var user = prompt("Enter user name: ");
//         matchFound = true;
//         for ( var i = 0; i < user.length; i++){
//             num = user.charCodeAt(i)
           
//             if ( num == 33 || num == 44 || num == 46 || num == 64){
//                 alert("Please enter valid username.");
//                 matchFound = false;
//                 break;
//             }

//         }
        
//         if (matchFound){
//         alert(user + " Welcome you are logged in");}


// Strings: finding a character at a location

// var char = 'pakistani'
// var index = char.charAt(3);
// document.write(index)

// Strings: replacing characters

// var city = "Hyderabad";
// var capital = city.replace("Hyder","Islam");
// document.write(capital);

// var message = "Ali and Sami are best friends. They play cricket and football together.";
// var rep = message.replace(/and/g, "&");
// document.write(rep);

// Rounding numbers

// var num = 3.45214;
// document.write(parseFloat(num));
// document.write(Math.round(num));
// document.write(Math.floor(num));
// document.write(Math.ceil(num));

// var minus = -2.678;
// document.write(parseFloat(minus));
// document.write(Math.round(minus));
// document.write(Math.floor(minus));
// document.write(Math.ceil(minus));

// Generating random numbers

// var num = Math.random()*6.9999999999999999
// document.write(Math.floor(num));


// var a = Math.random()*1.9999999999999999
// var toss = Math.floor(a);
// document.write(toss)
// if(toss === 0){
//     alert("Heads");
// }else if(toss === 1){
//     alert("Tails")
// }

// var user = parseInt(prompt("enter number between 1 to 10"));
// var secret = Math.floor(Math.random()*10.9999999999999999);
// if (user === secret){
//     alert("Congtulate")
// }else{
//     alert("Try Again")
// }

// Converting strings to integers and decimals

// var user = parseFloat(prompt("enter your weight"));
// // document.write(user);
// // document.write(user +"kgs");
// document.write(user + "Kilograms")

// Converting strings to numbers, numbers to strings

// var a = "472";
// var num = parseInt(a);
// document.write(typeof(a));
// document.write(num);
// document.write("<br>"+typeof(num));


// var num = 35.36;
// var str = num.toString();
// document.write(str);

// var num = 3536;
// var str = num.toString();
// document.write(str);

// Controlling the length of decimals

// var percentage = 30 / 45 * 100;
// document.write(percentage.toFixed(2));
