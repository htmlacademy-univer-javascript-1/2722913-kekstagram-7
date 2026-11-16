// Функция для получения случайного числа в диапазоне от min до max
export const getRandomNumber = (min, max) => {
  const rand = min + Math.random() * (max + 1 - min);
  return Math.floor(rand);
};

// Функция для получения случайного элемента массива
export const getRandomArrayElement = (elements) => elements[getRandomNumber(0, elements.length - 1)];
