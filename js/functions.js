// Функция для проверки длины строки
const isStringLengthValid = (string, maxLength) => {
  return string.length <= maxLength;
};

// Тесты функция 1
console.log(isStringLengthValid('проверяемая строка', 20)); // true
console.log(isStringLengthValid('проверяемая строка', 18)); // true
console.log(isStringLengthValid('проверяемая строка', 10)); // false

// Функция для проверки, является ли строка палиндромом
const isPalindrome = (str) => {
  const normalizedStr = str.replaceAll(' ', '').toLowerCase();
  let reversedStr = '';
  for (let i = normalizedStr.length - 1; i >= 0; i--) {
    reversedStr += normalizedStr[i];
  }
  return reversedStr === normalizedStr;
};

// Тесты функция 2
console.log(isPalindrome('топот')); // true
console.log(isPalindrome('ДовОд')); // true
console.log(isPalindrome('Кекс'));  // false
console.log(isPalindrome('Лёша на полке клопа нашёл ')); // true
