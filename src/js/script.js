/**
 * Cleans and normalizes the input string by replacing line breaks, removing special characters,
 * and replacing multiple whitespace with a single space.
 *
 * @param {string} str - The input string to be cleaned.
 * @returns {string} The cleaned and normalized string.
 */
const cleanAndNormalize = (str) => {
    if (!str) {
        throw new Error("Please provide a value as an argument for the cleanAndNormalize function.");
    }

    // Replace line breaks with space
    str = str.replace(/(?:\r\n|\r|\n)/g, " ");

    // Remove special characters except for alphanumeric, space, dot, and hyphen
    str = str.replace(/[^a-zA-Z0-9\-.\s]/g, "");

    // Replace multiple whitespace with a single space
    str = str.replace(/\s+/g, " ");

    return str.trim();
};

/**
 * Counts the number of words in a cleaned and normalized string.
 *
 * @param {string} str - The cleaned and normalized string.
 * @returns {number} The number of words in the string.
 */
const wordCount = (str) => {
    return str.split(" ").length;
};

/**
 * Updates the word count in the UI based on the input textarea value.
 */
const updateWordCount = () => {
    const elWordCountTextarea = document.getElementById("wordCountTextarea");
    const elWordCountValue = document.getElementById("word-count");

    const cleanedText = cleanAndNormalize(elWordCountTextarea.value);
    const numberOfWords = wordCount(cleanedText);

    elWordCountValue.innerText = numberOfWords;

    // Update the class based on the number of words
    elWordCountValue.classList.toggle("text-danger", numberOfWords < 1);
    elWordCountValue.classList.toggle("text-success", numberOfWords >= 1);
};

/**
 * Adds an event listener to the window's load event and attaches an input event listener
 * to the wordCountTextarea to update the word count in the UI.
 */
window.addEventListener("load", () => {
    const elWordCountTextarea = document.getElementById("wordCountTextarea");
    elWordCountTextarea.addEventListener("input", updateWordCount);
});
