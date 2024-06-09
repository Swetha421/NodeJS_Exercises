// Function to count word frequency
function wordFrequencyCounter(text) {
    // Removing punctuation and converting text to lowercase
    let cleanedText = text.replace(/[^\w\s]/g, '').toLowerCase();
    
    // Splitting the text into words
    let words = cleanedText.split(/\s+/);

    // Creating a Map to store word counts
    let wordMap = new Map();

    // Counting the frequency of each word
    words.forEach(word => {
        if (wordMap.has(word)) {
            wordMap.set(word, wordMap.get(word) + 1);
        } else {
            wordMap.set(word, 1);
        }
    });

    // Converting the Map to an array and sorting by frequency
    let sortedWordArray = Array.from(wordMap).sort((a, b) => b[1] - a[1]);

    // Logging the sorted word counts
    sortedWordArray.forEach(([word, count]) => {
        console.log(`${word}: ${count}`);
    });
}

// Reading input from the console
const readline = require('readline').createInterface({
    input: process.stdin,
    output: process.stdout
});

readline.question('Enter a text string: ', text => {
    wordFrequencyCounter(text);
    readline.close();
});