console.log('worked');

const rootEl = document.getElementById('root');

console.log(rootEl);

const post = {
    id: 1,
    content: 'Кошка',
    imageUrl: 'https://placekitten.com/200/200',
    likes: 1,
    dislikes: 1,
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

const likesEl = document.createElement('button-liks');
likesEl.className = 'btn btn-primary';
likesEl.textContent = '❤ ' + post.likes;

likesEl.onclick = function () {
    post.likes = post.likes + 1;
    likesEl.textContent = '❤ ' + post.likes;
};

const dislikesEl = document.createElement('button-dislikes');
dislikesEl.className = 'btn btn-primary';
dislikesEl.textContent = '👎' + post.dislikes;

dislikesEl.onclick = function () {
    post.dislikes = post.dislikes + 1;
    dislikesEl.textContent = '👎 ' + post.dislikes;
};

postBodyEl.appendChild(likesEl);

postBodyEl.appendChild(dislikesEl);

rootEl.appendChild(postEl);

