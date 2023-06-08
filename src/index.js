import './style.css';
import postScore from './modules/postAPI.js';
// Send Data to API ==> Create a new Game

const url = 'https://us-central1-js-capstone-backend.cloudfunctions.net/api/games/dkVlemfUdzOZVg2IT74T/scores/';

const form = document.querySelector('.form');
const user = document.querySelector('#name');
const score = document.querySelector('#score');
const refreshBtn = document.querySelector('.refBtn');

// Display the Data

const scoresList = document.querySelector('.eleInject');

const display = (data) => {
  scoresList.innerHTML = '';
  data.forEach((item) => {
    scoresList.innerHTML += `<li class="score_and_name">${item.user}:${item.score}</li>`;
  });
};

// GET Data from API

const getScoresList = async () => {
  const getScrores = await fetch(`${url}`);
  const reponse = await getScrores.json();
  const data = JSON.parse(JSON.stringify(reponse));
  display(data.result);
};

// Send Data to API ==> Create a new score for the given game

refreshBtn.addEventListener('click', getScoresList);
form.addEventListener('submit', (e) => {
  e.preventDefault();
  postScore(url, user, score);
  form.reset();
});

// Window onLoad

window.onload = getScoresList();
