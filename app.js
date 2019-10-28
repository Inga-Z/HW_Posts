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

const postSecond = {
    id: 1,
    content: 'Выпечка',
    videoUrl: 'https://www.youtube.com/watch?v=AwaI9KMvUx8',
    likesSecond: 1,
    dislikesSecond: 1,
};

const postSecondEl = document.createElement('div');
postSecondEl.className = 'card';

const videoEl = document.createElement('video');

videoEl.src = postSecond.videoUrl;
videoEl.className = 'card-video-top';
videoEl.controls = true;
postSecondEl.appendChild(videoEl);

const postSecondBodyEl = document.createElement('div');
postSecondBodyEl.className = 'card-body';
postSecondEl.appendChild(postSecondBodyEl);

const postSecondContentEl = document.createElement('p');
postSecondContentEl.textContent = postSecond.content;
postSecondBodyEl.appendChild(postSecondContentEl);

const likesSecondEl = document.createElement('button-liks');
likesSecondEl.className = 'btn btn-primary';
likesSecondEl.textContent = '❤ ' + postSecond.likesSecond;

likesSecondEl.onclick = function () {
    postSecond.likesSecond = postSecond.likesSecond + 1;
    likesSecondEl.textContent = '❤ ' + postSecond.likesSecond;
};

const dislikesSecondEl = document.createElement('button-dislikes');
dislikesSecondEl.className = 'btn btn-primary';
dislikesSecondEl.textContent = '👎' + postSecond.dislikesSecond;

dislikesSecondEl.onclick = function () {
    postSecond.dislikesSecond = postSecond.dislikesSecond + 1;
    dislikesSecondEl.textContent = '👎 ' + postSecond.dislikesSecond;
};

postSecondBodyEl.appendChild(likesSecondEl);

postSecondBodyEl.appendChild(dislikesSecondEl);

rootEl.appendChild(postSecondEl);

const postThird = {
    id: 1,
    content: 'Песенка',
    audioUrl: 'https://zaycev.net/?spa=true&trackId=10922517',
    likesThird: 1,
    dislikesThird: 1,
};

const postThirdEl = document.createElement('div');
postThirdEl.className = 'card';

const audioEl = document.createElement('audio');

audioEl.src = postThird.audioUrl;
audioEl.className = 'card-audio-top';
audioEl.controls = true;
postThirdEl.appendChild(audioEl);

const postThirdBodyEl = document.createElement('div');
postThirdBodyEl.className = 'card-body';
postThirdEl.appendChild(postThirdBodyEl);

const postThirdContentEl = document.createElement('p');
postThirdContentEl.textContent = postThird.content;
postThirdBodyEl.appendChild(postThirdContentEl);

const likesThirdEl = document.createElement('button-liks');
likesThirdEl.className = 'btn btn-primary';
likesThirdEl.textContent = '❤ ' + postThird.likesThird;

likesThirdEl.onclick = function () {
    postThird.likesThird = postThird.likesThird + 1;
    likesThirdEl.textContent = '❤ ' + postThird.likesThird;
};

const dislikesThirdEl = document.createElement('button-dislikes');
dislikesThirdEl.className = 'btn btn-primary';
dislikesThirdEl.textContent = '👎' + postThird.dislikesThird;

dislikesThirdEl.onclick = function () {
    postThird.dislikesThird = postThird.dislikesThird + 1;
    dislikesThirdEl.textContent = '👎 ' + postThird.dislikesThird;
};

postThirdBodyEl.appendChild(likesThirdEl);

postThirdBodyEl.appendChild(dislikesThirdEl);

rootEl.appendChild(postThirdEl);



