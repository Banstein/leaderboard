const renderList = (data, element) => {
  element.innerHTML = '';
  data.forEach((item) => {
    element.innerHTML += `<li class="score_and_name">${item.user}:${item.score}</li>`;
  });
};

export default renderList;