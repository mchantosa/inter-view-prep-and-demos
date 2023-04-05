const prompt = require('prompt-sync')();

class Wordle {
  static LETTERS = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';

  static WORDS = getWordList();

  static getRandomWord(){
    const length = this.WORDS.length;
    return this.WORDS[Math.floor(Math.random()*length)];
  }

  constructor(){
    this.setBoard();
  }
  
  setBoard(){
    this.lettersNotTried = Wordle.LETTERS.split()
    this.lettersIn = [];
    this.lettersOut = [];
    this.tries = 0;
  }

  printLettersIn(){return this.lettersIn.join('')}
  
  printLettersOut(){return this.lettersOut.join('')}
  
  printLettersNotTried(){return this.lettersNotTried.join('')}

  greetings(){
    console.log(`Want to play?`)
    let ans = prompt('=> ',).trim().toUpperCase()[0];
    if('N'===ans) {
      console.clear();
      console.log("Too bad, maybe next time")
    } else if('Y'!==ans) {
      console.clear();
      console.log("Please answer Y/N");
      ans = this.greetings();
    }
    return ans;
  }

  fareTheWell(){
    console.log('Thank you for visiting, have a wonderful day!')
  }
  
  displayBoard(header){
    console. clear();
    if(header)console.log(header)
    else console.log('')
    console.log(`\n\nA Wordle inspired game\n`
      + `Letters with correct placement will remain in word\n\n`
      + `Word:         Letters in word: ${this.printLettersIn()}\n` 
      + `_ _ _ _ _     Letters not in word: ${this.printLettersOut()}\n\n`
      + `Untried letters: ${this.printLettersNotTried()}\n`
    )

  }
  
  play(){
    const letsPlay = this.greetings();
    
    if(letsPlay==='Y') {
      this.word = Wordle.getRandomWord();
      this.displayBoard('Welcome Hooman');
      while(this.tries<6){
        //pick a word 
        //if word in words
          //for each letter
            //if letter in word open letters, add to letters in
            //if letter not in word open letters, add to letters out
            //remove from untried letters
        //if 
      }
    } else {
      this.fareTheWell();
    }
  }

}


let wordle = new Wordle();
wordle.play();

function getWordList(){
  let words = `About	Alert	Argue	Beach
    Above	Alike	Arise	Began
    Abuse	Alive	Array	Begin
    Actor	Allow	Aside	Begun
    Acute	Alone	Asset	Being
    Admit	Along	Audio	Below
    Adopt	Alter	Audit	Bench
    Adult	Among	Avoid	Billy
    After	Anger	Award	Birth
    Again	Angle	Aware	Black
    Agent	Angry	Badly	Blame
    Agree	Apart	Baker	Blind
    Ahead	Apple	Bases	Block
    Alarm	Apply	Basic	Blood
    Album	Arena	Basis	Board
    Boost	Buyer	China	Cover
    Booth	Cable	Chose	Craft
    Bound	Calif	Civil	Crash
    Brain	Carry	Claim	Cream
    Brand	Catch	Class	Crime
    Bread	Cause	Clean	Cross
    Break	Chain	Clear	Crowd
    Breed	Chair	Click	Crown
    Brief	Chart	Clock	Curve
    Bring	Chase	Close	Cycle
    Broad	Cheap	Coach	Daily
    Broke	Check	Coast	Dance
    Brown	Chest	Could	Dated
    Build	Chief	Count	Dealt
    Built	Child	Court	Death
    Debut	Entry	Forth	Group
    Delay	Equal	Forty	Grown
    Depth	Error	Forum	Guard
    Doing	Event	Found	Guess
    Doubt	Every	Frame	Guest
    Dozen	Exact	Frank	Guide
    Draft	Exist	Fraud	Happy
    Drama	Extra	Fresh	Harry
    Drawn	Faith	Front	Heart
    Dream	False	Fruit	Heavy
    Dress	Fault	Fully	Hence
    Drill	Fiber	Funny	Night
    Drink	Field	Giant	Horse
    Drive	Fifth	Given	Hotel
    Drove	Fifty	Glass	House
    Dying	Fight	Globe	Human
    Eager	Final	Going	Ideal
    Early	First	Grace	Image
    Earth	Fixed	Grade	Index
    Eight	Flash	Grand	Inner
    Elite	Fleet	Grant	Input
    Empty	Floor	Grass	Issue
    Enemy	Fluid	Great	Irony
    Enjoy	Focus	Green	Juice
    Enter	Force	Gross	Joint
    Judge	Metal	Media	Newly
    Known	Local	Might	Noise
    Label	Logic	Minor	North
    Large	Loose	Minus	Noted
    Laser	Lower	Mixed	Novel
    Later	Lucky	Model	Nurse
    Laugh	Lunch	Money	Occur
    Layer	Lying	Month	Ocean
    Learn	Magic	Moral	Offer
    Lease	Major	Motor	Often
    Least	Maker	Mount	Order
    Leave	March	Mouse	Other
    Legal	Music	Mouth	Ought
    Level	Match	Movie	Paint
    Light	Mayor	Needs	Paper
    Limit	Meant	Never	Party
    Peace	Power	Radio	Round
    Panel	Press	Raise	Route
    Phase	Price	Range	Royal
    Phone	Pride	Rapid	Rural
    Photo	Prime	Ratio	Scale
    Piece	Print	Reach	Scene
    Pilot	Prior	Ready	Scope
    Pitch	Prize	Refer	Score
    Place	Proof	Right	Sense
    Plain	Proud	Rival	Serve
    Plane	Prove	River	Seven
    Plant	Queen	Quick	Shall
    Plate	Sixth	Stand	Shape
    Point	Quiet	Roman	Share
    Pound	Quite	Rough	Sharp
    Sheet	Spare	Style	Times
    Shelf	Speak	Sugar	Tired
    Shell	Speed	Suite	Title
    Shift	Spend	Super	Today
    Shirt	Spent	Sweet	Topic
    Shock	Split	Table	Total
    Shoot	Spoke	Taken	Touch
    Short	Sport	Taste	Tough
    Shown	Staff	Taxes	Tower
    Sight	Stage	Teach	Track
    Since	Stake	Teeth	Trade
    Sixty	Start	Texas	Treat
    Sized	State	Thank	Trend
    Skill	Steam	Theft	Trial
    Sleep	Steel	Their	Tried
    Slide	Stick	Theme	Tries
    Small	Still	There	Truck
    Smart	Stock	These	Truly
    Smile	Stone	Thick	Trust
    Smith	Stood	Thing	Truth
    Smoke	Store	Think	Twice
    Solid	Storm	Third	Under
    Solve	Story	Those	Undue
    Sorry	Strip	Three	Union
    Sound	Stuck	Threw	Unity
    South	Study	Throw	Until
    Space	Stuff	Tight	Upper
    Upset	Whole	Waste	Wound
    Urban	Whose	Watch	Write
    Usage	Woman	Water	Wrong
    Usual	Train	Wheel	Wrote
    Valid	World	Where	Yield
    Value	Worry	Which	Young
    Video	Worse	While	Youth
    Virus	Worst	White	Worth
    Visit	Would	Vital	Voice`
  words = words.split(/[ \t\r\n\f]/);
  return words.map(word => word.toUpperCase());
}