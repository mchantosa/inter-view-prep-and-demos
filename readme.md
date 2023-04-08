# Reductuve: aWordle.js

I created this program for an application demonstration. This is my first pass at a command line Wordle emulator. It draws from a fixed pool of a few hundred 5 letter words. It has no dictionary to cross reference user submitted words, so 'aeiou' and 'zzzzz' are both perfectly acceptable. It took me a day.

## How to play

A game board will consist of 

*  **Untried letters:** This is a list of letters which remain untested against the word.
*  **Known letters in word:** Letters that are known to be in the word, letters can appear hear more than once.
*  **Known letters not in word:** Letters that are known to not be in the word
*  **WORD:** Letters appear hear if the letter placement is correct
*  **Attempts:** A record of words you have tried

You will be prompted to guess, the board will update based on your guesses. You have 6 tries.

# Reductuve: aWordle.html

I adapted the command line version of this application to be a single-page web application so I could deliver it via gist, [you can play it here](https://githubraw.com/mchantosa/inter-view-prep-and-demos/main/reductive/aWordle.html). It took me a day, albeit a very full one. Warning: the dictionary api I used is AWESOME! It is very hard 😆.
