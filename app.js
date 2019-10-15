console.log('worked');

const rootEl = document.getElementById('root');

console.log(rootEl);

const post = {
    id: 999,
    content: 'Первый пост в моей соц.сети',
    imageUrl: 'https://placekitten.com/300/300',
    likes: 6,
};

const postEl = document.createElement('div');
postEl.className = 'card';

const imgEl = document.createElement('img');
imgEl.src = post.imageUrl;
imgEl.className = 'card-img-top';
postEl.appendChild(imgEl);

const postBodyEl = document.createElement('div');
postBodyEl.className = 'card-body';
postEl.appendChild(postBodyEl);

const postContentEl = document.createElement('p');
postContentEl.textContent = post.content;
postBodyEl.appendChild(postContentEl);

const likesEl = document.createElement('button');
likesEl.className = 'btn btn-primary';
likesEl.textContent = '❤ ' + post.likes;

likesEl.onclick = function () {
    post.likes = post.likes + 1;
    likesEl.textContent = '❤ ' + post.likes;
};

postBodyEl.appendChild(likesEl);

rootEl.appendChild(postEl);

