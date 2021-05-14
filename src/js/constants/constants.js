export const NEWS_API_KEY = '691afaa89d8147d4b78ffbd65a7055a0'
export const NEWS_API_URL = 'https://nomoreparties.co/news/v2/everything';
export const ERROR = 'Это обязательное поле';
export const ERROR_REQUEST_TITLE = 'Ошибка';
export const ERROR_REQUEST_TEXT = 'Ошибка сети, попробуйте снова';
export const ERROR_SEARCH_TITLE = 'Ничего не найдено';
export const ERROR_SEARCH_TEXT = 'К сожалению по вашему запросу ничего не найдено.';

//селекторы
export const copyright = document.querySelector('.footer__copyright');
export const form = document.querySelector('.form');
export const newsCardContainer = document.querySelector('.cards-items');
export const showMoreNewsBtn = document.querySelector('.cards__button');
export const formButton = document.querySelector('.form__button');
export const preloader = document.querySelector('#preloader');
export const notFoundSection = document.querySelector('#not-found');
export const searchTitle = document.querySelector('.search-result__title');
export const searchDescription = document.querySelector('.search-result__paragraph')

export const news = {
  firstCard: 5,
  lastCard: 10
}

export const template = `<template id="NewsCard">
                          <li class="card"> 
                            <a class="card__link" href="" target="_blank">
                              <img class="card__img" src="" alt="">
                              <div class="card__container">
                                <p class="card__date"></p>
                                <h3 class="card__title"></h3>
                                <p class="card__paragraph"></p>
                              </div>
                              <p class="card__source"></p>
                            </a>
                          </li>
                         </template>`