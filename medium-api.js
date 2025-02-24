function htmlToText(html) {
    // Remove HTML tags using a regular expression
    return html.replace(/<[^>]*>/g, ' ').replace(/\s+/g, ' ').trim();
}
function getFirstNWords(input, n) {
    // Split the string into words using whitespace as the delimiter
    var words = input.split(/\s+/);

    // Use slice to get the first n words and join them back into a string
    var firstNWords = words.slice(0, n).join(' ');

    return firstNWords;
}
function dataToBlogCard(data) {
    return ` <div class="blog-img-card">
                <div class="image-wrapper">
                    <img src="${data['img']}" alt="${data['title']}-thumbnail">
                </div>
                <div class="blog-btn">
                    <a href="${data['guid']}" target="#blank"><button>Read More
                        <img src="https://img.icons8.com/ios-glyphs/30/circled-chevron-right.png"
                            alt="circled-chevron-right" />
                    </button></a>
                </div>
            </div>
            <div class="blog-text">
                <h1 class="blog-text-heading heading"><span>${data['id']}</span>${data['title']}</h1>
                <p class="blog-text-detail">${data['desc']}...Read more</p>
            </div>`

}

function renderMediumArticles() {
    const mediumUserName = "anasaltaf";
    const mediumArticleLink = `https://api.rss2json.com/v1/api.json?rss_url=https://medium.com/feed/@${mediumUserName}`;
    const blogSectionWrapper = document.querySelector('.blog-section-wrapper')
    fetch(mediumArticleLink)
        .then(response => response.json())
        .then(data => {
            if (data.status === 'ok' && data.items) {
                // console.log(`Found ${data.items.length} articles for ${mediumUserName}:`);

                data.items.forEach((article, index) => {
                    // console.log(`\nArticle #${index + 1}:`);
                    // console.log('----------------------------');

                    // Log all article properties
                    idx = index < 10 ? '0' + (index + 1) : index + 1
                    title = article[Object.keys(article)[0]]
                    pubData = article[Object.keys(article)[1]]
                    link = article[Object.keys(article)[2]]
                    guid = article[Object.keys(article)[3]]
                    author = article[Object.keys(article)[4]]
                    img = article[Object.keys(article)[5]]
                    description = article[Object.keys(article)[6]]
                    // content = article[Object.keys(article)[7]]
                    var blodData = {
                        id: idx,
                        title: title,
                        data: pubData,
                        link: link,
                        guid: guid,
                        author: author,
                        img: description.toString().match(/<img[^>]+src="([^">]+)"/)[1],
                        desc: getFirstNWords(htmlToText(description), 70)
                    }
                    // console.log(blodData)
                    const blogElement = document.createElement('section')
                    blogElement.classList.add('blog-section')
                    blogElement.innerHTML = dataToBlogCard(blodData)
                    blogSectionWrapper.append(blogElement)


                });

            } else {
                console.error('Error fetching articles:', data.message || 'Unknown error');
            }
        })
        .catch(error => console.error('Fetch Error:', error));
}

// Call the function to display articles
renderMediumArticles();