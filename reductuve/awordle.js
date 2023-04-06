const prompt = require('prompt-sync')();

const WORDS_LIST = [
  "ABOUT",
  "ABOVE",
  "ABUSE",
  "ACTOR",
  "ACUTE",
  "ADMIT",
  "ADOPT",
  "ADULT",
  "AFTER",
  "AGAIN",
  "AGENT",
  "AGREE",
  "AHEAD",
  "ALARM",
  "ALBUM",
  "ALERT",
  "ALIKE",
  "ALIVE",
  "ALLOW",
  "ALONE",
  "ALONG",
  "ALTER",
  "AMONG",
  "ANGER",
  "ANGLE",
  "ANGRY",
  "APART",
  "APPLE",
  "APPLY",
  "ARENA",
  "ARGUE",
  "ARISE",
  "ARRAY",
  "ASIDE",
  "ASSET",
  "AUDIO",
  "AUDIT",
  "AVOID",
  "AWARD",
  "AWARE",
  "BADLY",
  "BAKER",
  "BASES",
  "BASIC",
  "BASIS",
  "BEACH",
  "BEGAN",
  "BEGIN",
  "BEGUN",
  "BEING",
  "BELOW",
  "BENCH",
  "BILLY",
  "BIRTH",
  "BLACK",
  "BLAME",
  "BLIND",
  "BLOCK",
  "BLOOD",
  "BOARD",
  "BOOST",
  "BOOTH",
  "BOUND",
  "BRAIN",
  "BRAND",
  "BREAD",
  "BREAK",
  "BREED",
  "BRIEF",
  "BRING",
  "BROAD",
  "BROKE",
  "BROWN",
  "BUILD",
  "BUILT",
  "BUYER",
  "CABLE",
  "CALIF",
  "CARRY",
  "CATCH",
  "CAUSE",
  "CHAIN",
  "CHAIR",
  "CHART",
  "CHASE",
  "CHEAP",
  "CHECK",
  "CHEST",
  "CHIEF",
  "CHILD",
  "CHINA",
  "CHOSE",
  "CIVIL",
  "CLAIM",
  "CLASS",
  "CLEAN",
  "CLEAR",
  "CLICK",
  "CLOCK",
  "CLOSE",
  "COACH",
  "COAST",
  "COULD",
  "COUNT",
  "COURT",
  "COVER",
  "CRAFT",
  "CRASH",
  "CREAM",
  "CRIME",
  "CROSS",
  "CROWD",
  "CROWN",
  "CURVE",
  "CYCLE",
  "DAILY",
  "DANCE",
  "DATED",
  "DEALT",
  "DEATH",
  "DEBUT",
  "DELAY",
  "DEPTH",
  "DOING",
  "DOUBT",
  "DOZEN",
  "DRAFT",
  "DRAMA",
  "DRAWN",
  "DREAM",
  "DRESS",
  "DRILL",
  "DRINK",
  "DRIVE",
  "DROVE",
  "DYING",
  "EAGER",
  "EARLY",
  "EARTH",
  "EIGHT",
  "ELITE",
  "EMPTY",
  "ENEMY",
  "ENJOY",
  "ENTER",
  "ENTRY",
  "EQUAL",
  "ERROR",
  "EVENT",
  "EVERY",
  "EXACT",
  "EXIST",
  "EXTRA",
  "FAITH",
  "FALSE",
  "FAULT",
  "FIBER",
  "FIELD",
  "FIFTH",
  "FIFTY",
  "FIGHT",
  "FINAL",
  "FIRST",
  "FIXED",
  "FLASH",
  "FLEET",
  "FLOOR",
  "FLUID",
  "FOCUS",
  "FORCE",
  "FORTH",
  "FORTY",
  "FORUM",
  "FOUND",
  "FRAME",
  "FRANK",
  "FRAUD",
  "FRESH",
  "FRONT",
  "FRUIT",
  "FULLY",
  "FUNNY",
  "GIANT",
  "GIVEN",
  "GLASS",
  "GLOBE",
  "GOING",
  "GRACE",
  "GRADE",
  "GRAND",
  "GRANT",
  "GRASS",
  "GREAT",
  "GREEN",
  "GROSS",
  "GROUP",
  "GROWN",
  "GUARD",
  "GUESS",
  "GUEST",
  "GUIDE",
  "HAPPY",
  "HARRY",
  "HEART",
  "HEAVY",
  "HENCE",
  "HORSE",
  "HOTEL",
  "HOUSE",
  "HUMAN",
  "IDEAL",
  "IMAGE",
  "INDEX",
  "INNER",
  "INPUT",
  "IRONY",
  "ISSUE",
  "JOINT",
  "JUDGE",
  "JUICE",
  "KNOWN",
  "LABEL",
  "LARGE",
  "LASER",
  "LATER",
  "LAUGH",
  "LAYER",
  "LEARN",
  "LEASE",
  "LEAST",
  "LEAVE",
  "LEGAL",
  "LEVEL",
  "LIGHT",
  "LIMIT",
  "LOCAL",
  "LOGIC",
  "LOOSE",
  "LOWER",
  "LUCKY",
  "LUNCH",
  "LYING",
  "MAGIC",
  "MAJOR",
  "MAKER",
  "MARCH",
  "MATCH",
  "MAYOR",
  "MEANT",
  "MEDIA",
  "METAL",
  "MIGHT",
  "MINOR",
  "MINUS",
  "MIXED",
  "MODEL",
  "MONEY",
  "MONTH",
  "MORAL",
  "MOTOR",
  "MOUNT",
  "MOUSE",
  "MOUTH",
  "MOVIE",
  "MUSIC",
  "NEEDS",
  "NEVER",
  "NEWLY",
  "NIGHT",
  "NOISE",
  "NORTH",
  "NOTED",
  "NOVEL",
  "NURSE",
  "OCCUR",
  "OCEAN",
  "OFFER",
  "OFTEN",
  "ORDER",
  "OTHER",
  "OUGHT",
  "PAINT",
  "PANEL",
  "PAPER",
  "PARTY",
  "PEACE",
  "PHASE",
  "PHONE",
  "PHOTO",
  "PIECE",
  "PILOT",
  "PITCH",
  "PLACE",
  "PLAIN",
  "PLANE",
  "PLANT",
  "PLATE",
  "POINT",
  "POUND",
  "POWER",
  "PRESS",
  "PRICE",
  "PRIDE",
  "PRIME",
  "PRINT",
  "PRIOR",
  "PRIZE",
  "PROOF",
  "PROUD",
  "PROVE",
  "QUEEN",
  "QUICK",
  "QUIET",
  "QUITE",
  "RADIO",
  "RAISE",
  "RANGE",
  "RAPID",
  "RATIO",
  "REACH",
  "READY",
  "REFER",
  "RIGHT",
  "RIVAL",
  "RIVER",
  "ROMAN",
  "ROUGH",
  "ROUND",
  "ROUTE",
  "ROYAL",
  "RURAL",
  "SCALE",
  "SCENE",
  "SCOPE",
  "SCORE",
  "SENSE",
  "SERVE",
  "SEVEN",
  "SHALL",
  "SHAPE",
  "SHARE",
  "SHARP",
  "SHEET",
  "SHELF",
  "SHELL",
  "SHIFT",
  "SHIRT",
  "SHOCK",
  "SHOOT",
  "SHORT",
  "SHOWN",
  "SIGHT",
  "SINCE",
  "SIXTH",
  "SIXTY",
  "SIZED",
  "SKILL",
  "SLEEP",
  "SLIDE",
  "SMALL",
  "SMART",
  "SMILE",
  "SMITH",
  "SMOKE",
  "SOLID",
  "SOLVE",
  "SORRY",
  "SOUND",
  "SOUTH",
  "SPACE",
  "SPARE",
  "SPEAK",
  "SPEED",
  "SPEND",
  "SPENT",
  "SPLIT",
  "SPOKE",
  "SPORT",
  "STAFF",
  "STAGE",
  "STAKE",
  "STAND",
  "START",
  "STATE",
  "STEAM",
  "STEEL",
  "STICK",
  "STILL",
  "STOCK",
  "STONE",
  "STOOD",
  "STORE",
  "STORM",
  "STORY",
  "STRIP",
  "STUCK",
  "STUDY",
  "STUFF",
  "STYLE",
  "SUGAR",
  "SUITE",
  "SUPER",
  "SWEET",
  "TABLE",
  "TAKEN",
  "TASTE",
  "TAXES",
  "TEACH",
  "TEETH",
  "TEXAS",
  "THANK",
  "THEFT",
  "THEIR",
  "THEME",
  "THERE",
  "THESE",
  "THICK",
  "THING",
  "THINK",
  "THIRD",
  "THOSE",
  "THREE",
  "THREW",
  "THROW",
  "TIGHT",
  "TIMES",
  "TIRED",
  "TITLE",
  "TODAY",
  "TOPIC",
  "TOTAL",
  "TOUCH",
  "TOUGH",
  "TOWER",
  "TRACK",
  "TRADE",
  "TRAIN",
  "TREAT",
  "TREND",
  "TRIAL",
  "TRIED",
  "TRIES",
  "TRUCK",
  "TRULY",
  "TRUST",
  "TRUTH",
  "TWICE",
  "UNDER",
  "UNDUE",
  "UNION",
  "UNITY",
  "UNTIL",
  "UPPER",
  "UPSET",
  "URBAN",
  "USAGE",
  "USUAL",
  "VALID",
  "VALUE",
  "VIDEO",
  "VIRUS",
  "VISIT",
  "VITAL",
  "VOICE",
  "WASTE",
  "WATCH",
  "WATER",
  "WHEEL",
  "WHERE",
  "WHICH",
  "WHILE",
  "WHITE",
  "WHOLE",
  "WHOSE",
  "WOMAN",
  "WORLD",
  "WORRY",
  "WORSE",
  "WORST",
  "WORTH",
  "WOULD",
  "WOUND",
  "WRITE",
  "WRONG",
  "WROTE",
  "YIELD",
  "YOUNG",
  "YOUTH",
];

class Wordle {

  static LETTERS = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
  static WORDS = WORDS_LIST;

  constructor(){
    this.setBoard();
  }

  setBoard(){
    this.lettersNotTried = Wordle.LETTERS.split('')
    this.lettersIn = [];
    this.lettersOut = [];
    this.attempts = [];
    this.observableWord = ['_', '_', '_', '_', '_']
    this.tries = 0;
  }

  static getRandomWord(){
    const length = this.WORDS.length;
    return this.WORDS[Math.floor(Math.random()*length)];
  }

  printAttempts(){
    const indent = '          '
    const printAttempt = (attempt) =>{
      let returnStr = '';
      attempt.split('').forEach(letter=>{
        if(this.lettersOut.includes(letter)){
          returnStr += letter.toLowerCase();
        } else returnStr += letter;
      })
      return returnStr.split('').join(' ');
    }
    if(this.attempts.length === 0) return `${indent}no attempts made\n`
    else {
      let returnStr = ``;
      this.attempts.forEach(attempt=>{
        returnStr += `${indent}${printAttempt(attempt)}\n`
      })
      return returnStr;
    }
  }

  printLettersIn(){return `[${this.lettersIn.join(' ')}]`}
  
  printLettersOut(){return `[${this.lettersOut.join(' ')}]`}
  
  printLettersNotTried(){return `[${this.lettersNotTried.join(' ')}]`}

  printObservableWord(){return this.observableWord.join(' ')}

  ask(msg, noMsg, huhMsg){
    const returnFnc = function(){
      console.log(msg)
      let ans = prompt('=> ',).trim().toUpperCase()[0];
      if('N'===ans) {
        console.clear();
        console.log(noMsg)
      } else if('Y'!==ans) {
        console.clear();
        console.log(`${huhMsg}`);
        ans = returnFnc(msg, noMsg, huhMsg);
      }
      if(typeof ans === 'string'){
        return ans==='Y';
      } else return ans;
    }

    return returnFnc;
  }

  greetings () {
    console.log('Greetings Hooman, happy to see you. Welcome to this knockoff attempt at Wordle.')
    prompt('[Press Enter]');
    console.clear()

    this.ask(
      "Want to start a game?",
      "Too bad, maybe next time", 
      "Please answer Y/N"
    )();
  }

  playAgain = this.ask(
    "Another round?",
    "Thanks for hanging out 🫰", 
    "Please answer Y/N"
  )

  pickAWord(msg){
    console.log(msg)
    let word = prompt('=> ',).trim().toUpperCase();
    if (word.length !== 5) {
      this.displayBoard()
      this.pickAWord('Please pick a word with 5 letters')
    } else if (word.match(/[^A-Z]/)) {
      this.displayBoard()
      this.pickAWord('Please use only a-z and A-Z characters')
    } else {
      this.attempts.unshift(word);
      this.updateBoard(word);
      this.displayBoard();
    }
  }

  updateBoard(word){
    word.split('').forEach((letter,index)=>{
      this.lettersNotTried = this.lettersNotTried
        .filter(lntLetter => lntLetter !== letter);
      
      const re = RegExp(`${letter}`,'g')
      const trueWordMatches = this.word.match(re);
      const trueWordCount = (trueWordMatches)? trueWordMatches.length : 0;
      const playedWordCount = word.split('').filter(ltr=> ltr === letter).length
      const lettersInCount = this.lettersIn.filter(inLetter => inLetter === letter).length;
      if(playedWordCount > lettersInCount){
        for(let i = 0; 
          i < Math.min(trueWordCount-lettersInCount, playedWordCount-lettersInCount); 
          i++){
          this.lettersIn.push(letter);
        }
        this.lettersIn.sort();
      }
      if(!this.word.includes(letter) && !this.lettersOut.includes(letter)) {
        this.lettersOut.push(letter)
        this.lettersOut.sort() 
      }
      if(letter === this.word[index]){
        this.observableWord[index] = letter;
      }
    })
  }

  fareTheeWell(){
    console.log('Thank you for visiting, have a wonderful day!')
  }
  
  displayBoard(header){
    console. clear();
    if(header) console.log(`${header}`)
    else console.log('')
    console.log(`Letters with correct placement will be shown in WORD\n\n`
      + `Untried letters: ${this.printLettersNotTried()}\n`
      + `Known letters in word: ${this.printLettersIn()}\n` 
      + `Known letters not in word: ${this.printLettersOut()}\n\n`
      + `WORD:     ${this.printObservableWord()}\n`
      + `ATTEMPTS:\n`
      + `${this.printAttempts()}`
    )
  }
  displayGameSummary(){
    console.log(`WORD: ${this.word}\n\n` 
      + `ATTEMPTS:\n`
      +`-------------\n`
      + `${this.printAttempts()}`
    )
  }
  playerWon(){
    return this.word === this.attempts[0]
  }
  
  playARound(){
    this.word = Wordle.getRandomWord();
      this.displayBoard('Welcome Hooman');
      while(this.tries<6){
        this.pickAWord('Pick a word');
        this.tries++;
        if(this.playerWon())break;
      }
      console.clear();
      this.displayGameSummary();
      if(this.playerWon()){
        console.log(`You're a winner 🎈`);
      }else {
        console.log(`Better luck next time`);
      }
       
  }

  play(){
    console.clear();
    const letsPlay = this.greetings();
    if(letsPlay) {
      while(true){
        this.playARound();
        if(this.playAgain()){
          this.setBoard()
        } else {
          break;
        }
      }
    } 
  }
}

let wordle = new Wordle();
wordle.play();
