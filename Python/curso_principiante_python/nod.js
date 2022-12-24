let word = 'Esta compa que';
let invertWord = '';
word = word.replace(' ', '');
word = word.toLowerCase();

for (let i = word.length - 1; i >= 0; i--) {
  invertWord = invertWord + word[i];
}

if (word === invertWord) {
  console.log('EQUAL');
} else {
  console.log('NOT EQUAL');
}
