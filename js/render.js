import { photos } from './main.js';

// находим шаблон и контейнер на странице
const pictureTemplate = document.querySelector('#picture').content;
const picturesContainer = document.querySelector('.pictures');

// функция для создания одной миниатюры
const createPicture = (photo) => {
  // копируем шаблон
  const pictureElement = pictureTemplate.cloneNode(true);

  // заполняем данными из объекта фотографии
  const imgElement = pictureElement.querySelector('.picture__img');
  imgElement.src = photo.url;
  imgElement.alt = photo.description;

  pictureElement.querySelector('.picture__likes').textContent = photo.likes;
  pictureElement.querySelector('.picture__comments').textContent = photo.comments.length;

  return pictureElement;
};

// функция для отрисовки всех миниатюр
const renderPictures = () => {
  // Создаём фрагмент документа (для быстрой вставки)
  const fragment = document.createDocumentFragment();

  // для каждой фотографии создаём миниатюру и добавляем во фрагмент
  photos.forEach((photo) => {
    fragment.appendChild(createPicture(photo));
  });

  // вставляем всё сразу в контейнер
  picturesContainer.appendChild(fragment);
};

// запускаем отрисовку
renderPictures();
