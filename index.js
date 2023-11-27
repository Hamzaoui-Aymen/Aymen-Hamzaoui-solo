const quotes = [
    "The only limit to our realization of tomorrow will be our doubts of today. - Franklin D. Roosevelt",
    "It always seems impossible until it's done. - Nelson Mandela",
    "Do not wait to strike till the iron is hot, but make it hot by striking. - William Butler Yeats",
    "The only way to do great work is to love what you do. - Steve Jobs",
    "Believe you can and you're halfway there. -Theodore Roosevelt",
    "Success is not final, failure is not fatal: It is the courage to continue that counts. - Winston Churchill",
    "The future belongs to those who believe in the beauty of their dreams. - Eleanor Roosevelt",
    "It is better to fail in originality than to succeed in imitation. - Herman Melville",
    "Success is getting what you want, happiness is wanting what you get. - W. P. Kinsella",
    "There are three ways to ultimate success, The first way is to be kind. The second way is to be kind. The third way is to be kind. -Mister Rogers",
    "Concentrate all your thoughts upon the work in hand. The sun's rays do not burn until brought to a focus.  - Alexander Graham Bell",
    "Either you run the day or the day runs you. - Jim Rohn",
    "I’m a greater believer in luck, and I find the harder I work the more I have of it. - Thomas Jefferson",
    "Setting goals is the first step in turning the invisible into the visible. - Tony Robbins",
    "Success consists of going from failure to failure without loss of enthusiasm. – Winston Churchill",
    "Successful people are not gifted; they just work hard, then succeed on purpose. -G.K. Nielson",
    "The only thing we never get enough of is love; and the only thing we never give enough of is love. — Henry Miller",
    "Love makes your soul crawl out from its hiding place. - Zora Neale Hurston",
    "Have enough courage to trust love one more time and always one more time. - Maya Angelou",
    "Love is composed of a single soul inhabiting two bodies. - Aristotle",
    "I love you not because of who you are, but because of who I am when I am with you. — Roy Croft",
    "Success in business requires training and discipline and hard work. But if you're not frightened by these things, the opportunities are just as great today as they ever were. -David Rockefeller",
    "Success is the sum of small efforts, repeated day in and day out. -Robert Collier"



];

function add_q(data) {
    const ulElement = document.getElementById('list');
    ulElement.innerHTML = '';
    for (let i = 0; i < data.length; i++) {
        const newListItem = document.createElement('li');
        newListItem.textContent = data[i];
        ulElement.append(newListItem);
    }
}

function get() {
    const ulElement = document.getElementById('quoteDisplay');
    ulElement.innerHTML = '';

    const data = document.getElementById("search").value;
    add_q(searchStringInArray(quotes, data))

}


function searchStringInArray(array, searchString) {
    temp = []
    for (let i = 0; i < array.length; i++) {
        if (array[i].toUpperCase().includes(searchString.toUpperCase())) {
            temp.push(array[i]);
        }
    }

    if (temp.length != 0) {
        return temp;
    } else {
        return false;
    }
}

function generateQuote() {
    const ulElement = document.getElementById('list');
    ulElement.innerHTML = '';
    const randomIndex = Math.floor(Math.random() * quotes.length);
    const quote = quotes[randomIndex];
    document.getElementById("quoteDisplay").innerText = quote;
}



