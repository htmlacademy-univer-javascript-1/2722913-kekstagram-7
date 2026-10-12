import { getRandomNumber, getRandomArrayElement } from './util.js';
import { DESCRIPTIONS, NAMES, MESSAGES } from './data.js';

// Функция для генерации одного комментария
let commentId = 1;

const createComment = () => {
  const messagesCount = getRandomNumber(1, 2);
  const commentMessages = [];

  for (let i = 0; i < messagesCount; i++) {
    commentMessages.push(getRandomArrayElement(MESSAGES));
  }

  return {
    id: commentId++,
    avatar: `img/avatar-${getRandomNumber(1, 6)}.svg`,
    message: commentMessages.join(' '),
    name: getRandomArrayElement(NAMES)
  };
};

// Функция для генерации массива комментариев
const createComments = () => {
  const commentsCount = getRandomNumber(0, 30);
  const comments = [];

  for (let i = 1; i <= commentsCount; i++) {
    comments.push(createComment());
  }

  return comments;
};

// Функция для генерации одного объекта фотографии
const createPhoto = (id) => ({
  id,
  url: `photos/${id}.jpg`,
  description: DESCRIPTIONS[id - 1],
  likes: getRandomNumber(15, 200),
  comments: createComments()
});

// Создание массива (25 фото)
const createPhotosArray = () => {
  const photosArray = [];

  for (let i = 1; i <= 25; i++) {
    photosArray.push(createPhoto(i));
  }

  return photosArray;
};

// Генерация массива и сохранение в переменную
export const photos = createPhotosArray();
