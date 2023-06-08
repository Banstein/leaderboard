import './style.css';
import postScore from './modules/postAPI.js';
import renderList from './modules/renderList.js';

const url = 'https://us-central1-js-capstone-backend.cloudfunctions.net/api/games/dkVlemfUdzOZVg2IT74T/scores/';
const scoresList = document.querySelector('.eleInject');
const form = document.querySelector('.form');
const user = document.querySelector('#name');
const score = document.querySelector('#score');
const refreshBtn = document.querySelector('.refBtn');

const getScores = async () => {
  const getScrores = await fetch(`${url}`);
  const reponse = await getScrores.json();
  const data = JSON.parse(JSON.stringify(reponse));
  renderList(data.result, scoresList);
};

refreshBtn.addEventListener('click', getScores);

form.addEventListener('submit', (e) => {
  e.preventDefault();
  postScore(url, user, score);
  form.reset();
});

window.addEventListener('load', getScores);
