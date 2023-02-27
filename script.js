const pwordfield = document.querySelector('#password');

var upper = ['A', 'B', 'C'];

var lower = ['a', 'b', 'c'];

var number = ['1', '2', '3', '4'];

var specialChar = ['!','@','#','$','%','^','&','*','(',')'];
var splitChar = specialChar[0].split('');

console.log(specialChar, ':', splitChar);

var upperSelect = confirm('upper?');
var lowerSelect = confirm('lower?');
var numberSelect = confirm('number?');
var specialSelect = confirm('special Characters?');
var pwdLength = null;
var getLength = function() {
    pwdLength = prompt('pwd length');
    if(pwdLength < 8 || pwdLength > 128){
        alert('password length wrong')
        getLength();
    }    
};

var dataSet = [];


if(upperSelect){
    dataSet = dataSet.concat(upper);
}
if(lowerSelect){
    dataSet = dataSet.concat(lower);
}
if(numberSelect){
    dataSet = dataSet.concat(number);
}
if(specialSelect){
    dataSet = dataSet.concat(specialChar);
}
console.log(dataSet);

getLength();

var pwdString = '';
for (let i = 0; i < pwdLength; i++){
    pwdString = pwdString.concat(dataSet[Math.floor(Math.random() * dataSet.length)]);
}
console.log(pwdString);

pwordfield.value = pwdString;
