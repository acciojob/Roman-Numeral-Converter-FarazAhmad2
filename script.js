function convertToRoman(num) {
  	const obj = {
      0:['M',1000], 
      1:['D', 500], 
      2:['C', 100], 
      3:['L', 50], 
      4:['X', 10], 
      5:['V', 5], 
      6:['I', 1]
    };

  //your code here
	let res = '';
  let x = {};

  res += 'M'.repeat(Math.floor(num / 1000));
  num %= 1000;
  if (num < 1000 && num >= 900) {
    res += 'CM'
    num -= 900;
  }

  if (num < 900 && num >= 500) {
    res += 'D'
    num -= 500;
    res += 'C'.repeat(Math.floor(num / 100));
    num %= 100;
  }

  if (num < 500 && num >= 400) {
    res += 'CD'
    num -= 400;
    num %= 100;
  }

  if (num < 100 && num >= 90) {
    res += 'XC'
    num -= 90;
  }

  if (num < 90 && num >= 50) {
    res += 'L'
    num -= 50;
    res += 'X'.repeat(Math.floor(num / 10));
    num %= 10;
  }

  if (num < 50 && num >= 40) {
    res += 'XL'
    num -= 40;
  }

  if (num >= 10 && num < 40) {
    res += 'X'.repeat(Math.floor(num / 10));
    num %= 10;
  }

  if (num >= 9 && num < 10) {
    res += 'IX'
  }

  if (num >= 5 && num < 9) {
    res += 'V'
    num -= 5;
    res += 'I'.repeat(Math.floor(num / 5));
  }

  if (num == 4) {
    res += 'IV'
  }

  if (num > 0 && num < 4) {
    res += 'I'.repeat(num);
  }

  return res;

}
// You can test your code by running the above function and printing it to console by pressing the run button at the top. To run it with input 36, uncomment the following line

// console.log(convertToRoman(36));




// do not edit below this line
module.exports = convertToRoman
