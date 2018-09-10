// Page Elements

const engadget = document.getElementById('engadget');
const recode = document.getElementById('recode');
const nextWeb = document.getElementById('nextWeb');
const main = document.getElementsByTagName('main')[0];

// News API Data

const apiKey = '5f98182fd11448f79edd6f9350d5fbbc';
const engadgetUrl = 'https://newsapi.org/v2/top-headlines?sources=le-monde&apiKey=5f98182fd11448f79edd6f9350d5fbbc';
const recodeUrl = 'https://newsapi.org/v2/top-headlines?sources=le-monde&apiKey=5f98182fd11448f79edd6f9350d5fbbc';
const nextWebUrl = 'https://newsapi.org/v2/everything?sources=le-monde&apiKey=5f98182fd11448f79edd6f9350d5fbbc';

// Request News Function
async function getNews(engadgetUrl) {
    let response = await fetch(engadgetUrl);
    let jsonResponse = await response.json();

    let articlesArray = jsonResponse.articles.slice(0, 5);

    return articlesArray;
}
// Render Function

function renderNews(articles) {
    articles.map((article, index) => {
        let articleRow =
            '<div class="articlerow">' +
            ' <div class="article">' +
            '   <h2 class="title">' + article.title + '</h2>' +
            '   <h3>By ' + article.author + '</h3>' +
            '   <p> ' + article.description + '</p>' +
            '   <a href="' + article.url + '" target="_blank" class="readmore"><p>Read More</p></a>' +
            ' </div>' +
            ' <div class="share">' +
            '   <img class="storyimage" src="' + article.urlToImage + '" />' +
            '   <a href="https://twitter.com/<your user name>" target="_blank"><button type="button" class="tweet" id="tweet ' + index + '">' +
            '   <i class="fa fa-twitter" aria-hidden="true"></i>Tweet This</button></a>' +
            ' </div>' +
            '</div>';

        main.innerHTML += articleRow;
    });
    return articles;
}

// Post Tweet Function

function sendTweets(newsObjects) {
    let tweetButtons = document.getElementsByClassName('tweet');
    for (let i = 0; i < tweetButtons.length; i++) {
        tweetButtons[i].addEventListener('click', function () {
            // Call Post Status function here
            tweetButtons[i].innerHTML = "Tweeted";
        }, false);
    }
}

// Button Event Listeners

engadget.addEventListener('click', function () {
    main.innerHTML = ' ';
    // Call getNews() here
    getNews(engadgetUrl).then(articlesArray => renderNews(articlesArray));
}, false);

recode.addEventListener('click', function () {
    main.innerHTML = ' ';
    // Call getNews() here
    getNews(recodeUrl).then(articlesArray => renderNews(articlesArray));
}, false);

nextWeb.addEventListener('click', function () {
    main.innerHTML = ' ';
    // Call getNews() here
    getNews(nextWebUrl).then(articlesArray => renderNews(articlesArray));
}, false);