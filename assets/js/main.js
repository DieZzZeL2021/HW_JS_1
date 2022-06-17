/** @format */

var myNum = 10,
  myStr = 'строка',
  myBool = true,
  myArr = [1, 2, 3, 4, 5];

var myObj = {
  first: 'First Name',
  last: 'Last Name',
};

var decimal2 = myNum.toFixed(2);

var i = 20;
// console.log(i++);
// console.log(++i);
// console.log(i--);
// console.log(--i);

var myTest = 20;
myTest += myNum;
myTest -= myNum;
myTest *= myNum;
myTest /= myNum;
myTest %= myNum;

var myPi = Math.PI;
var myRound = Math.round(89.279);
var myRandom = Math.random() * 10;
var myPow = Math.pow(3, 5);

var strObj = {
  str: 'Мама мыла раму, рама мыла маму',
};
strObj.length = strObj.str.length;

var isRamaPos = strObj.str.indexOf('рама');
// console.log('🚀 ~ isRamaPos', isRamaPos);

var strReplace = strObj.str;
console.log('🚀 ~ strReplace', strReplace);

strReplace = strReplace.replace('мыла', 'моет');
console.log('🚀 ~ strReplace', strReplace);

strReplace = strReplace.replace('рама', 'Рама');
console.log('🚀 ~ strReplace', strReplace);

strReplace = strReplace.replace('мыла', 'держит');
console.log('🚀 ~ strReplace', strReplace);

console.log(strReplace.toUpperCase());
console.log(strReplace.toLowerCase());
