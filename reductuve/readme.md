# aWordle

My first pass at a command line Wordle emulator. It draws from a fixed pool of a few hundred 5 letter words. It has no dictionary to cross reference user submitted words, so 'aeiou' and 'zzzzz' are both perfectly acceptable.

## What does it do?

A game board will consist of 

*  **Untried letters:** This is a list of letters which remain untested against the word.
*  **Known letters in word:** Letters that are known to be in the word, letters can appear hear more than once.
*  **Known letters not in word:** Letters that are known to not be in the word
*  **WORD:** Letters appear hear if the letter placement is correct
*  **Attempts:** A record of words you have tried

You will be prompted to guess, the board will update based on your guesses. You have 6 tries.