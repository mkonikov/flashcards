function shuffle(array) {
  //TAKEN FROM: https://stackoverflow.com/questions/2450954/how-to-randomize-shuffle-a-javascript-array
  var currentIndex = array.length, temporaryValue, randomIndex;

  // While there remain elements to shuffle...
  while (0 !== currentIndex) {

    // Pick a remaining element...
    randomIndex = Math.floor(Math.random() * currentIndex);
    currentIndex -= 1;

    // And swap it with the current element.
    temporaryValue = array[currentIndex];
    array[currentIndex] = array[randomIndex];
    array[randomIndex] = temporaryValue;
  }

  return array;
}

const change = () => {
  const card = shuffle(window.cards)[0];
  document.querySelector('#slide').innerText = card;
}


(function() {

  window.addEventListener('click', change);
  window.addEventListener('keydown', change);
  // window.addEventListener('keydown', function (e) {
  //   switch (e.keyCode) {
  //     case 37:
  //       change();
  //       break;
  //     case 39:
  //       change();
  //       break;
  //     case 83: //s
  //       change();
  //       break;
  //   }
  // })
})();
