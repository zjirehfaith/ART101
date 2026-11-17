function startButton() {
    // we added and removed classList so that we can't see the auto div box, but you can still see the buttons
    // borrowed/referenced from W3Schools
  document.getElementById('startbutton');
  document.getElementById('questionbox').classList.remove('hidden');
}

function selectAnswer(choice) {
  document.getElementById('questionbox').classList.add('hidden');
  
  // this code is from W3Schools, we found it from trying to find out how to target an id
  const answerdiv = document.getElementById('answerbox');
  const textanswer = document.getElementById('textanswer');

}