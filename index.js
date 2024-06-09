
document.addEventListener('deviceready', onDeviceReady, false);

function onDeviceReady() {
    clearAll();
    showShitShot();
    showInstructions();
    getRandomData(type);
    rn(len);
}
function clearAll() {
    const shitShotContainer = document.querySelector('.shitshot-content');
    const cardContainer = document.querySelector('.cardType-content');
    
    shitShotContainer.innerHTML='';
    cardContainer.innerHTML='';
}
  
  function showShitShot() {
    let x = Math.floor(Math.random()*5);
    
    if (x == 0){
      var targetElement = document.getElementById("target");
      targetElement.className = "animateKiss";
      
      const kissText = getRandomData("kiss");
      
      const cardType = document.createElement('h2');
      cardType.textContent = "KISS";
      
      const newP = document.createElement('p');
      newP.textContent = kissText;
      
      clearAll();
    
      document.querySelector('.cardType-content').appendChild(cardType);
      document.querySelector('.shitshot-content').appendChild(newP);
    } 
    else if(x == 1){
      var targetElement = document.getElementById("target");
      targetElement.className = "animateQuestion";
      
      const questionText = getRandomData("question");
      
      const cardType = document.createElement('h2');
      cardType.textContent = "QUESTION";
      
      const newP = document.createElement('p');
      newP.textContent = questionText;
      
      clearAll();
      
      document.querySelector('.cardType-content').appendChild(cardType);
      document.querySelector('.shitshot-content').appendChild(newP);
    } 
    else if (x == 2){
      var targetElement = document.getElementById("target");
      targetElement.className = "animateDare";
  
      const dareText = getRandomData("dare");
      
      const cardType = document.createElement('h2');
      cardType.textContent = "DARE";
      
      const newP = document.createElement('p');
      newP.textContent = dareText;
      
      clearAll();
      
      document.querySelector('.cardType-content').appendChild(cardType);
      document.querySelector('.shitshot-content').appendChild(newP);
    } 
    else if (x ==3){
      var targetElement = document.getElementById("target");
      targetElement.className = "animateGroup";
  
      const groupText = getRandomData("group");
      
      const cardType = document.createElement('h2');
      cardType.textContent = "GROUP";
      
      const newP = document.createElement('p');
      newP.textContent = groupText;
      
      clearAll();
      
      document.querySelector('.cardType-content').appendChild(cardType);
      document.querySelector('.shitshot-content').appendChild(newP);
    } 
    else if (x == 4){
      var targetElement = document.getElementById("target");
      targetElement.className = "animateDrink";
  
      const drinkText = getRandomData("drink");
      
      const cardType = document.createElement('h2');
      cardType.textContent = "DRINK";
      
      const newP = document.createElement('p');
      newP.textContent = drinkText;
      
      clearAll();
      
      document.querySelector('.cardType-content').appendChild(cardType);
      document.querySelector('.shitshot-content').appendChild(newP);
    } 
  }
  
  
  function showInstructions() {
      var targetElement = document.getElementById("target");
      targetElement.className = "animatePlay";
    
    const instructions = getRandomData("howToPlay");
    
    const newP = document.createElement('p');
    newP.textContent = instructions;
    
    clearAll();
    
    document.querySelector('.shitshot-content').appendChild(newP);
  }
  
  
  function getRandomData(type) {
    return data[type][rn(data[type].length)];
  }
  
  
  
  
  const howToPlay = [
    "Determine who will go first and have that player pick a card.Then go clockwise from that player After every round, everyone must take a shot. You must answer or do whatever the card tells you to. If you wish to skip a card, take two shots. If you drink for a card, people can re-choose that card."
  ];
  
  const kiss = [
    "Close your eyes. Let someone else kiss you. Rate the kiss",
    "Kiss the people that are next to you",
    "Have everyone close their eyes. Kiss the most attractive person",
    "Kiss the person in front of you",
    "Choose someone you’ve been wanting to kiss and kiss them",
    "Kiss the person you’re closest to from the group",
    "Kiss the person you know the least",
    "Think of a number, whoever guesses it must kiss you",
    "Kiss someone from your same sex",
    "Lick the person in front of you’s neck",
    "Post a picture on your story kissing someone from the group",
    "Threeway kiss! The two people by your sides",
    "Kiss your ex-situationship",
  ];
  
  const question = [
    "What’s the full name of your first kiss?",
    "When was your last kiss?",
    "How would you describe your first kiss?",
    "Do you dislike anyone from the group? Why?",
    "What’s the full name of your last kiss?",
    "What’s the full name of your worst kiss?",
    "What’s the full name of your best kiss?",
    "Who do you dislike the most from the group?",
    "Who did you lose your virginity with?",
    "Who was the first person you gave/received a blowjob to/from?",
    "What do you look for in pornhub?",
    "Who’s the most likely to make out with you?",
    "Have you tried to make out with anyone from the group?",
    "What do you have in your purse/pockets?",
    "When was the last time you pleasured yourself?",
    "Have you ever had a wet dream with someone from the group?",
    "When and what was the last lie you told?",
    "Would you ever do a threesome?",
    "Who would you do a threesome with?",
    "Have you ever sent nudes?",
    "Who do you like the most from the group?",
    "What’s the longest you’ve gone without kissing?",
    "What’s the longest you’ve gone without masturbating?",
    "Do you have a sex toy? Would you?",
    "What’s the biggest lie you’ve said?",
    "How many people have you kissed in the same day?",
    "Why did your last relationship end?",
    "How long was your last relationship?",
    "What is the weirdest place you’ve had sex in?",
    "How many people have seen you naked?",
    "How many people have you seen naked?",
    "How many people have you kissed?",
    "What turns you on?",
  ];
  
  const dare = [
    "Show the last message you sent",
    "7 minutes in heaven",
    "Let someone spit you",
    "Stay pantless for two rounds",
    "Give full access to your phone to another player",
    "Lick any part of someone else’s body",
    "Call your ex",
    "Say the full name of the last person you made out with",
    "Take off one piece of clothing chosen by another player",
    "TBH… Tell someone something you’ve always wanted to",
    "Strip-tease the person to your right!",
    "Tell the person in front of you something you don’t like about them",
    "Show another player your ‘my eyes only’ or ‘hidden’",
    "Change clothes with someone from the opposite sex",
    "Send a message to the last person you made out with telling them you want to repeat",
    "Play a random voice memo and send it to someone chosen by the group",
    "Let someone read any closed note they want",
    "Confess your feelings to your best friend",
    "Lap-dance for the person to your left",
    "Sit on the lap of the person to your right until your next turn",
    "Show the first picture in your camera roll",
    "Show your favorite photo of yourself",
    "Tell the person in front of you something you have never told anyone",
    "Put an ice down your shirt",
    "Let someone from the group read any chat they want, out loud",
    "Stay topless for two turns",
    "Let another player give you a hickey",
    "Give a hickey to the person to your left",
    "Pass an ice to another player without using your hands",
    "Let another player take your top off",
    "Let another player post a picture on your main story",
    "Show or tell: kiss list",
  ];
  
  const group = [
    "Reverse!",
    "Make a rule! Whoever doesn’t complete it must drink",
    "Never have I ever! Play a quick round, loser drinks",
    "Would you rather! Whoever is in the minority drinks",
  ];
  
  const drink = [
    "Triple shot!",
    "Drink if you have an older sibling",
    "Drink if your parents don’t know that you drink",
    "Choose someone to drink with you",
    "Drink if you don’t know a third language",
    "Drink just because the card told you to",
    "Drink if you’ve ever done something with your best friend",
    "Everyone wearing brand clothing drinks",
    "Drink if you have a ‘sneaky link’",
    "Drink if you have a cat",
    "Waterfall!",
    "Drink if you enjoy reading",
    "Drink if you have dyed hair",
    "Drink if you aren’t a virgin",
    "All guys drink!",
    "Shot!",
    "Oldest player drinks!",
    "Drink if you have a dog",
    "Drink if you have a younger sibling",
    "Everyone wearing nike drinks",
    "Shit Shot! Drink using someone’s butt as a table",
    "Drink if you’ve ever killed a pet",
    "Whoever has had the least amount of drinks, drinks",
    "Drink if you play soccer",
    "All girls drink!",
    "Youngest player drinks!",
    "Drink if you’ve ever done drugs",
    "Drink if you have colored eyes",
    "Drink if you play basketball",
    "No hands shot!",
  ];
  
  
  function rn(len) {
    return Math.floor(Math.random() * len);
  }
  
  const data = {
    howToPlay,
    kiss,
    question,
    dare,
    group,
    drink,
  };

