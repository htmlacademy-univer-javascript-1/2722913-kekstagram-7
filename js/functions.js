// Функция для проверки длины строки
const isStringLengthValid = (string, maxLength) => {
  return string.length <= maxLength;
};

// Тесты
console.log(isStringLengthValid('проверяемая строка', 20)); // true
console.log(isStringLengthValid('проверяемая строка', 18)); // true
console.log(isStringLengthValid('проверяемая строка', 10)); // false
