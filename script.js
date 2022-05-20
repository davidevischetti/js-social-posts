posts.forEach(element => {
    // RICHIAMO LA FUNZIONE CREAZIONE HTML
    createHtmlFunc(element);
});

posts.forEach(element => {
    // RICHIAMO LA FUNZIONE PER AGGIUNGERE LIKE
    addLikeFunc (element)
});

// FUNZIONE CREAZIONE L'HTML
function createHtmlFunc (obj) {
    const myContainer = document.getElementById('container');

    myContainer.innerHTML +=
    `<div class="post">
    <div class="post__header">
        <div class="post-meta">                    
            <div class="post-meta__icon">
                <img class="profile-pic" src=${obj.author.image} alt="${obj.author.name}>                    
            </div>
            <div class="post-meta__data">
                <div class="post-meta__author">${obj.author.name}</div>
                <div class="post-meta__time">${obj.created}</div>
            </div>                    
        </div>
    </div>
    <div class="post__text">${obj.content}</div>
    <div class="post__image">
        <img src="${obj.media}" alt="">
    </div>
    <div class="post__footer">
        <div class="likes js-likes">
            <div class="likes__cta">
                <a class="like-button  js-like-button${obj.id}" href="#like-counter-${obj.id}" data-postid="${obj.id}">
                    <i class="like-button__icon fas fa-thumbs-up" aria-hidden="true"></i>
                    <span class="like-button__label">Mi Piace</span>
                </a>
            </div>
            <div class="likes__counter">
                Piace a <b id="like-counter-${obj.id}" class="js-likes-counter">${obj.likes}</b> persone
            </div>
        </div> 
    </div>            
    </div>`;
};

// FUNZIONE PER AGGIUNGERE LIKE
function addLikeFunc (obj) {
    let myBtn = document.querySelector(`.js-like-button${obj.id}`);
    myBtn.removeAttribute('href');
    let myLikes = document.getElementById(`like-counter-${obj.id}`);
    
    myBtn.addEventListener('click', function () {
        obj.likes ++;
        myLikes.innerHTML = obj.likes;
        
        myBtn.classList.add('like-button--liked');
    });
};