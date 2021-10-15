const wordInput = document.querySelector('#problem-5 #rhyme-with-input');
const showRhymesButton = document.querySelector('#problem-5 #show-rhymes-button');
const clearButton = document.querySelector('#problem-5 #clear-rhymes-button');
const rhymesOutput = document.querySelector('#problem-5 #rhymes');

function getRhymes(rel_rhy, callback) {
    fetch(`https://api.datamuse.com/words?${(new URLSearchParams({rel_rhy})).toString()}`)
        .then((response) => response.json())
        .then((data) => {
            callback(data);
        }, (err) => {
            console.error(err);
        });
}




// Write your code here
showRhymesButton.addEventListener('click', () =>{
    rhy_word = wordInput.value;

    //rhymesOutput.remove('li');

    getRhymes(rhy_word, (result) =>{
        ///console.log(result);
        rhy
        for( const key in result){
            const wordict = result[key];
            const newWord = wordict['word'];
            console.log(newWord);
            const newlist = document.createElement('li');
            newlist.classList.add('list-group-item');
            newlist.textContent = newWord;
            rhymesOutput.append(newlist);
        }
    });


});


clearButton.addEventListener('click', () => {
    wordInput.value = "";
});