/** @format */

var myNum = 10;
var myStr = 'строка';
var myBool = true;
var myArr = [1, 2, 3, 4, 5];
var myObj = {
  first: 'First Name',
  last: 'Last Name',
};

var decimal2 = myNum.toFixed(2);

var i = 10;
console.log('🚀 ~ file: main.js ~ line 14 ~ i', ++i);
console.log('🚀 ~ file: main.js ~ line 14 ~ i', i++);
console.log('🚀 ~ file: main.js ~ line 14 ~ i', --i);
console.log('🚀 ~ file: main.js ~ line 14 ~ i', i--);

var myTest = 20;
myTest += myNum;
myTest -= myNum;
myTest *= myNum;
myTest /= myNum;
myTest %= myNum;

var myPi = Math.PI;
console.log('🚀 ~ file: main.js ~ line 28 ~ myPi', myPi);
var myRound = Math.round(89.279);
console.log('🚀 ~ file: main.js ~ line 30 ~ myRound', myRound);
var myRandom = Math.random() * 10;
console.log('🚀 ~ file: main.js ~ line 32 ~ myRandom', myRandom);
var myPow = Math.pow(3, 5);
console.log('🚀 ~ file: main.js ~ line 34 ~ myPow', myPow);

var strObj = {
  str: 'Мама мыла раму, рама мыла маму',
};
strObj.length = strObj.str.length;

var isRamaPos = strObj.str.indexOf('рама');
console.log('🚀 ~ file: main.js ~ line 41 ~ isRamaPos', isRamaPos);

var strReplace = strObj.str.replace('мыла', 'моет');
strReplace = strReplace.replace('рама', 'Рама');
strReplace = strReplace.replace('мыла', 'держит');
console.log('🚀 ~ file: main.js ~ line 45 ~ strReplace', strReplace);

console.log(strReplace.toUpperCase());
console.log(strReplace.toLowerCase());
var myPi = Math.PI;
console.log('🚀 ~ file: main.js ~ line 28 ~ myPi', myPi);
var myRound = Math.round(89.279);
console.log('🚀 ~ file: main.js ~ line 30 ~ myRound', myRound);
var myRandom = Math.random() * 10;
console.log('🚀 ~ file: main.js ~ line 32 ~ myRandom', myRandom);
var myPow = Math.pow(3, 5);
console.log('🚀 ~ file: main.js ~ line 34 ~ myPow', myPow);

var strObj = {
  str: 'Мама мыла раму, рама мыла маму',
};
strObj.length = strObj.str.length;

var isRamaPos = strObj.str.indexOf('рама');
console.log('🚀 ~ file: main.js ~ line 41 ~ isRamaPos', isRamaPos);

var strReplace = strObj.str.replace('мыла', 'моет');
strReplace = strReplace.replace('рама', 'Рама');
strReplace = strReplace.replace('мыла', 'держит');
console.log('🚀 ~ file: main.js ~ line 45 ~ strReplace', strReplace);

console.log(strReplace.toUpperCase());
console.log(strReplace.toLowerCase());
