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
    "I love sugar plum toffee dessert icing sesame snaps sesame snaps. Marshmallow powder cotton candy chocolate cake sesame snaps icing. I love I love muffin tootsie roll cookie. Pudding I love I love biscuit dessert chocolate. Tootsie roll fruitcake halvah pastry sugar plum. I love sesame snaps cake powder chupa chups I love jujubes lemon drops. Chocolate dessert liquorice marzipan jelly marzipan halvah. Cookie cake croissant. I love caramels cotton candy cheesecake sweet I love brownie. Chocolate bar gummies cheesecake jujubes lollipop cheesecake sweet. Chocolate chupa chups fruitcake toffee I love I love bear claw toffee cheesecake. Chupa chups bear claw I love I love sweet gummies I love sweet I love. Pudding powder carrot cake toffee gummies bonbon croissant. Pie cake I love oat cake."
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