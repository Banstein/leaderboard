const postScore = async (url, user, score) => {
  await fetch(`${url}`, {
    method: 'POST',
    body: JSON.stringify({
      user: user.value,
      score: score.value,
    }),
    headers: {
      'Content-type': 'application/json; charset=UTF-8',
    },
  });
};

export default postScore;