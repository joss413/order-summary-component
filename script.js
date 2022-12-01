fetch("https://api.adviceslip.com/advice")
    .then(response => response.json())
    .then(result => {
      id.innerHTML = `Advice #${result.slip.id}`;
      advice.innerHTML = `\"${result.slip.advice}\"`;
    });