const posts = [
  {
    name: "Vincent van Gogh",
    username: "vincey1853",
    location: "Zundert, Netherlands",
    avatar: "images/avatar-vangogh.jpg",
    post: "images/post-vangogh.jpg",
    comment: "just took a few mushrooms lol",
    likes: 21,
  },
  {
    name: "Gustave Courbet",
    username: "gus1819",
    location: "Ornans, France",
    avatar: "images/avatar-courbet.jpg",
    post: "images/post-courbet.jpg",
    comment: "i'm feelin a bit stressed tbh",
    likes: 4,
  },
  {
    name: "Joseph Ducreux",
    username: "jd1735",
    location: "Paris, France",
    avatar: "images/avatar-ducreux.jpg",
    post: "images/post-ducreux.jpg",
    comment:
      "gm friends! which coin are YOU stacking up today?? post below and WAGMI!",
    likes: 152,
  },
];
let rootEl = document.querySelector(".container");
console.log(rootEl);
let html = "";

for (let i = 0; i < posts.length; i++) {
  html += `
        <div class="card">
        <header>
            <img id="avatar" src="${posts[i].avatar}" alt="vangogh pic" />
            <div>
                <h4 id="name">${posts[i].name}</h4>
                <p id="location">${posts[i].location}</p>
            </div>
        </header>
        <main>
            <img id="post" src="${posts[i].post}" alt="vangogh potrait paint" />
            <div class="icons">
                <img src="images/icon-heart.png" alt="like icon" />
                <img src="images/icon-comment.png" alt="comment icon" />
                <img src="images/icon-dm.png" alt="share icon" />
            </div>
            <p id="likes">
                ${posts[i].likes} likes
            </p>
            <p id="user-name">
                ${posts[i].username}<span id="comment">${posts[i].comment}</span>
            </p>
        </main>
        </div>
`;
}
rootEl.innerHTML += html;
