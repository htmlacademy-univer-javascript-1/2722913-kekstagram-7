// Функция для получения случайного числа в диапазоне от min до max (включительно)
const getRandomNumber = (min, max) => {
  const rand = min + Math.random() * (max + 1 - min);
  return Math.floor(rand);
};

// Функция для получения случайного элемента массива
const getRandomArrayElement = (elements) => elements[getRandomNumber(0, elements.length - 1)];

// Массив с описаниями фотографий (25 штук)
const DESCRIPTIONS = [
  'Закат на берегу океана',
  'Прогулка по горному лесу',
  'Уютное кафе в центре города',
  'Встреча заката на крыше',
  'Весенний парк в цвету',
  'Кофейное утро',
  'Прогулка на велосипеде',
  'Пикник с друзьями',
  'Зимний вечер',
  'Путешествие на море',
  'Городские огни',
  'Утренняя пробежка',
  'Фотосессия в студии',
  'День рождения',
  'Концерт любимой группы',
  'Выходные на природе',
  'Новый ресторан',
  'Прогулка с собакой',
  'Закат в горах',
  'Уютная квартира',
  'Поездка на машине',
  'Шопинг с подругами',
  'Спортзал после работы',
  'Вечеринка',
  'Семейный ужин'
];

// Массив с именами комментаторов
const NAMES = [
  'Арина',
  'Кирилл',
  'Кристина',
  'Александр',
  'Анастасия',
  'Степан',
  'Полина',
  'Никита',
  'Дарья',
  'Семен'
];

// Массив с фразами для комментариев
const MESSAGES = [
  'Всё отлично!',
  'В целом всё неплохо. Но не всё.',
  'Когда вы делаете фотографию, хорошо бы убирать палец из кадра. В конце концов это просто непрофессионально.',
  'Моя бабушка случайно чихнула с фотоаппаратом в руках и у неё получилась фотография лучше.',
  'Я поскользнулся на банановой кожуре и уронил фотоаппарат на кота и у меня получилась фотография лучше.',
  'Лица у людей на фотке перекошены, как будто их избивают. Как можно было поймать такой неудачный момент?!'
];

// Функция для генерации одного комментария
let commentId = 1;

const createComment = () => {
  // Берём одно или два случайных предложения
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

// Генерирация массив и сохранение в переменную
const photos = createPhotosArray(); // eslint-disable-line no-unused-vars

// Проверка
// console.log(photos);
