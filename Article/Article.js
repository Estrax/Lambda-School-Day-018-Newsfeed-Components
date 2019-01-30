// Because classes are not hoised you will need to start your code at the bottom of the page.  Look for the comment "START HERE"

class Article {
  constructor(domElement) {
    // assign this.domElement to the passed in domElement
    this.domElement = domElement;
    // create a reference to the ".expandButton" class. 
    this.expandButton = domElement.querySelector('.expandButton');
    // Using your expandButton reference, update the text on your expandButton to say "expand"
    this.expandButton.textContent = "expand"
    // Set a click handler on the expandButton reference, calling the expandArticle method.
    this.expandButton.addEventListener('click', () => this.expandArticle());
  }

  expandArticle() {
    // Using our reference to the domElement, toggle a class to expand or hide the article.
    this.domElement.classList.toggle("article-open");
  }
}

/* START HERE: 

- Select all classes named ".article" and assign that value to the articles variable.  

- With your selection in place, now chain .forEach() on to the articles variable to iterate over the articles NodeList and create a new instance of Article by passing in each article as a parameter to the constructor.

*/

const date = new Date();

const articleContent = {
  "title": [
    "Lambda Ipsum",
    "What about another Ipsum",
    "Still not enough Ipsum",
    "Wanna go for an Ipsum?",
    "It's been a long day without you, my Ipsum...",
    "I am not sure...",
    "What do YOU think?",
    "Should be great, but...",
  ],
  "paragraphs": [
    "Single origin bar, in, aroma dark variety barista blue mountain aroma sweet viennese organic. Crema rich crema mazagran as turkish breve wings redeye rich sugar. Cortado skinny aged body filter dark viennese shop. And medium milk sugar java cup milk barista body crema. To go robusta café au lait organic ut, caffeine, frappuccino so caffeine mug macchiato.",
    "Epic cheeseburgers come in all kinds of manifestations, but we want them in and around our mouth no matter what. Slide those smashed patties with the gently caramelized meat fat between a toasted brioche bun and pass it over. You fall in love with the cheeseburger itself but the journey ain’t half bad either.",
    "I love sugar plum toffee dessert icing sesame snaps sesame snaps. Marshmallow powder cotton candy chocolate cake sesame snaps icing. I love I love muffin tootsie roll cookie. Pudding I love I love biscuit dessert chocolate. Tootsie roll fruitcake halvah pastry sugar plum. I love sesame snaps cake powder chupa chups I love jujubes lemon drops. Chocolate dessert.",
    "In response to violent demonstrations by protesters, the French government began regulating the amount of sugar that can be added to wine in the early twentieth century. How do you hold a wine glass? There is a right and a wrong way. When at a wine tasting event, one is not frowned upon for spitting wine out. Terroir is the taste of the territory. The actual color.",
    "Throwing rocks at trains younger women if you have a BMI under 25 proper grammar. No robots posing as real people MFA don't waste my time I'm really good at are you really going to rule me out becausae of it?, let's get weird it's huge my other half I am currently addicted to my deep, manly voice. Skydiving ask your mother ask your mother clubbing I starred in my own reality show my alter-ego is.",
    "With lots of self-respect no robots posing as real people I am oddly aroused by my last partner told me. P90X cosplay my alter-ego is in my birthday suit there's no such thing as a typical Friday night, unworthy of serious consideration lol clubbing be my partner in crime giving massages. Ask your mother keep up with me I'm kind of a genius I will love you forever I will love you forever if you have a BMI under 25.",
    "New friends food just looking to have some fun passionate about. My favorite word is fitness my friends tell me they don't get why I'm single amazing women I've met jazz cafes, tacos Catcher in the Rye mountain biking Breaking Bad Portlandia. Portlandia The Daily Show activity partners Kurosawa my goofy smile happy hour.",
    "Happy hour it depends on the night making lasagna from scratch fixing my scooter. My smartphone food life is short Neutral Milk Hotel quizzo, Woody Allen recently moved back fascinates me fixing my scooter short-term dating. Recently moved back Sunday funday bikes I'm not good at filling out these things open-minded easy-going.",
    "For the benefit of those with flash photography... Train, say your prayers, take your vitamins. If you smell, what The Rock is cooking! Ooooh yeah! Ohhhh yes! WOOOOO! Hey yo. Who's next?!",
    "But we've met before. That was a long time ago, I was a kid at St. Swithin's, It used to be funded by the Wayne Foundation. It's an orphanage. My mum died when I was small, it was a car accident. I don't remember it. My dad got shot a couple of years later for a gambling debt. Oh I remember that one just fine. Not a lot of people know what it feels like to be angry in your bones. I mean they understand. The fosters parents. ",
    "The G' movida, ball NGV culture fix dandenong frankston bogans the storm, warehouse chic empire of the sun cold drip coffee footscray hobos ticket inspector, south melb dim sims the melbourne cup fed square carlton swanston, pellegrini's myki queues kath and kim.",
    "Yes! If there were such a thing as a drudgeon, that is what we'd be to them. You're not comfortable with your sexuality? Oh, I'm very comfortable with my sexuality, I just don't want to be slapped in the face with their sexuality. Unbelievable! Some idiot disabled his firewall, meaning all the computers on Seven are teeming with viruses, plus I've just had to walk all.",
    "Shut up, do what I tell you, I'm not interested; these are just some of the things you'll be hearing if you answer this ad. I'm an idiot and I dont care about anyone but myself. P.S. No dogs! Shut up, do what I tell you, I'm not interested; these are just some of the things you'll be hearing if you answer this ad. I'm an idiot and I dont care about anyone but myself. P.S. No dogs! Well that's easy to remember. 0118 999 88199 9119 725! ",
    "Flamingo hotel capriotti's lounges stand tease lax chips! Breaking even shooter the excalibur aria fremont street rack, bellagio shuffle all in chateau! Wildcard hard rock hotel sin city the mgm grand price fruit loop baccarat. Spaghetti bowl royal flush hard rock hotel pot new york, new york the district convention center the mirage! Body english price odds the excalibur shops at crystals the chapel of love, mandalay bay bellagio comps.",
    "Top of the world two pair fold fremont street wildcard comps straight push! Bars town square betting limits the district the chapel of love, new york, new york convention center shops at crystals ante. The strip hit flush mandalay bay ante; pit flamingo hotel zappos aria? High roller bellagio sixth street royal flush probability bluff; mandalay bay parlay all in tapped out? Price baccarat two pair full house shuffle lax odds! House edge?",
    "The pairs odds double down stratosphere fold: hit fashion show mall the chandelier the mirage! Unlv score dayclubs house edge haze tao vegas givecamp, stratosphere blind chateau odds shooter payoff! Shops at crystals house edge spaghetti bowl the district betting limits push probability haze! Bluff pot card counting pit boss aria house edge blind tao. Ante shops at crystals bars double down fold convention center tapped out? Shuffle lock!",
    "Chicken andouille boudin picanha, porchetta chuck sirloin capicola cow alcatra pancetta. Shoulder landjaeger venison, buffalo pork chop frankfurter meatloaf turkey salami. Ham beef spare ribs pastrami drumstick ball tip. Jerky bacon cupim shoulder, turducken cow biltong tongue. Tongue meatball sausage shoulder turkey tenderloin meatloaf, pork loin doner venison turducken cupim.",
    "Drumstick salami prosciutto shoulder ball tip hamburger. Tri-tip chicken sausage prosciutto beef. Pork chop porchetta pancetta shankle tri-tip, ham hock spare ribs. Boudin cow andouille, turducken strip steak jerky hamburger tongue salami chicken shank pork chuck pork chop. Salami chicken swine pork chop, pastrami buffalo beef ribs picanha shankle ribeye ham hock kevin leberkas rump. Bresaola bacon pancetta pork loin turducken cupim burgdoggen ribeye rump tenderloin beef.",
    "Ribeye fatback turducken porchetta. Bresaola alcatra burgdoggen drumstick leberkas, pork chop fatback pork loin ball tip tri-tip sirloin turkey filet mignon. Spare ribs brisket tail landjaeger chicken, boudin andouille. Pork loin beef ball tip, meatball picanha strip steak corned beef chicken pastrami ribeye kevin.",
    "Jarlsberg brie camembert de normandie. Goat cheddar everyone loves stilton edam croque monsieur cream cheese cauliflower cheese. Ricotta red leicester airedale when the cheese comes out everybody's happy fromage babybel queso smelly cheese. The big cheese when the cheese comes out everybody's happy parmesan paneer fondue cheddar blue castello roquefort. Smelly cheese gouda.",
    "Mascarpone st. agur blue cheese monterey jack. Red leicester mascarpone pepper jack gouda chalk and cheese cheeseburger cheese triangles cheese and biscuits. Smelly cheese brie cheddar cheeseburger dolcelatte mascarpone camembert de normandie cream cheese. Who moved my cheese bocconcini macaroni cheese cheese slices hard cheese hard cheese st. agur blue cheese stilton. Boursin swiss cheese.",
    "Pommy ipsum we'll be 'avin less of that eton mess down South bowler hat goggledegook have a kip, eton mess done up like a kipper hard cheese old boy I bid you good day throw a spanner in the works flabbergasted laughing gear bargain Betty, shortbread trouble and strife rather crisps scrubber see a man about a dog. Bad Wolf chav apple and pears tallywhacker it's me peepers cottage pie, scally.",
    "The ship set ground on the shore of this uncharted desert isle with Gilligan the Skipper too the millionaire and his wife. If you have a problem if no one else can help and if you can find them maybe you can hire The A-Team! But they got diff'rent strokes. It takes diff'rent strokes - it takes diff'rent strokes to move the world. Movin' on up to the east side. We finally got a piece of the pie.",
    "Leverage agile frameworks to provide a robust synopsis for high level overviews. Iterative approaches to corporate strategy foster collaborative thinking to further the overall value proposition. Organically grow the holistic world view of disruptive innovation via workplace diversity and empowerment.",
    "Bring to the table win-win survival strategies to ensure proactive domination. At the end of the day, going forward, a new normal that has evolved from generation X is on the runway heading towards a streamlined cloud solution. User generated content in real-time will have multiple touchpoints for offshoring."
  ],
  "date": date.toLocaleString('en-us', { month: 'short' }) + " " + date.getDate() + ", " + date.getFullYear()
}

const articles_new = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];

articles_new.forEach(() => {
  let article1 = document.createElement('div');
  let article1_h2 = document.createElement('h2')
  let article1_p1 = document.createElement('p');
  let article1_p2 = document.createElement('p');
  let article1_p3 = document.createElement('p');
  let article1_p4 = document.createElement('p');
  let article1_span = document.createElement('span');
  article1.classList.toggle("article");

  article1_h2.textContent = articleContent.title[Math.floor(Math.random()*articleContent.title.length)];
  article1_p1.textContent = articleContent.date;
  article1_p1.classList.toggle("date");
  article1_p2.textContent = articleContent.paragraphs[Math.floor(Math.random()*articleContent.paragraphs.length)];
  article1_p3.textContent = articleContent.paragraphs[Math.floor(Math.random()*articleContent.paragraphs.length)];
  article1_p4.textContent = articleContent.paragraphs[Math.floor(Math.random()*articleContent.paragraphs.length)];
  article1_span.classList.toggle('expandButton');

  article1.append(article1_h2);
  article1.append(article1_p1);
  article1.append(article1_p2);
  article1.append(article1_p3);
  article1.append(article1_p4);
  article1.append(article1_span);
  document.querySelector('body').appendChild(article1);
});

let articles = document.querySelectorAll('.article');
articles.forEach(article => new Article(article));