let comments = [{
    name: 'Connor Walton',
    date: '02/17/2021',
    comment: 'This is art. This is inexplicable magic expressed in the purest way, everything that makes up this majestic work deserves reverence. Let us appreciate this for what it is and what it contains.'
}, {
    name: 'Emilie Beach',
    date: '01/09/2021',
    comment: 'I feel blessed to have seen them in person. What a show! They were just perfection. If there was one day of my life I could relive, this would be it. What an incredible day.'
}, {
    name: 'Theodore Duncan',
    date: '12/20/2020',
    comment: 'I can`t stop listening. Every time I hear one of their songs - the vocals - it gives me goosebumps. Shivers straight down my spine. What a beautiful expression of creativity.'
}];



let commentsForm = document.querySelector('.conversation-section__form');
commentsForm.addEventListener('submit', function commentsFormHandler(event) {
    event.preventDefault();
    let name = event.target.name.value;

    let date = new Date();
    let day = date.getDate();
    let month = date.getMonth() + 1;
    let year = date.getFullYear();
    date = month + '/' + day + '/' + year;

    let comment = event.target.comment.value;
    let newComment = {
        name: name,
        date: date,
        comment: comment
    };
    comments.unshift(newComment);

    commentsForm.reset();
    deleteAll();
    parentFunction();
});



function deleteAll() {
    document.querySelector('.conversation-section__guestbook').remove();
};



window.onload = parentFunction();

function parentFunction() {
    let parentElement = document.createElement('div');
    parentElement.classList.add('conversation-section__guestbook');
    let divider = document.createElement('div');
    divider.classList.add('divider', 'conversation-section__guestbook-divider');
    let parentParent = document.querySelector('.conversation-section');
    parentParent.appendChild(parentElement);
    parentElement.appendChild(divider);

    loadComment();
};




function loadComment() {
    comments.forEach((data) => displayComment(data));
};

function displayComment(comment) {
    let divider = document.createElement('div');
    divider.classList.add('divider', 'conversation-section__guestbook-divider');
    let guestbookContainer = document.createElement('div');
    guestbookContainer.classList.add('conversation-section__guestbook-container');
    let guestbookPhoto = document.createElement('div');
    guestbookPhoto.classList.add('conversation-section__guestbook-photo');
    let guestbookEntry = document.createElement('div');
    guestbookEntry.classList.add('conversation-section__guestbook-entry');
    let guestbookName = document.createElement('h4');
    guestbookName.classList.add('conversation-section__guestbook-name');
    let guestbookDate = document.createElement('div');
    guestbookDate.classList.add('conversation-section__guestbook-date');
    let guestbookText = document.createElement('div');
    guestbookText.classList.add('conversation-section__guestbook-text');

    let guestbook = document.querySelector('.conversation-section__guestbook');

    guestbook.appendChild(guestbookContainer);
    guestbookContainer.appendChild(guestbookPhoto);
    guestbookContainer.appendChild(guestbookEntry);
    guestbookEntry.appendChild(guestbookName);
    guestbookEntry.appendChild(guestbookDate);
    guestbookEntry.appendChild(guestbookText);
    guestbook.appendChild(divider);

    guestbookName.innerText = comment.name;
    guestbookDate.innerText = comment.date;
    guestbookText.innerText = comment.comment;
};