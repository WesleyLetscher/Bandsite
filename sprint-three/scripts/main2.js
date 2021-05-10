let API_KEY = '1b0f285f-ad7c-4c1a-acae-3b7af8f337d8';
let commentsURL = ('https://project-1-api.herokuapp.com/comments?api_key=1b0f285f-ad7c-4c1a-acae-3b7af8f337d8');

window.onload = parentFunction();

function parentFunction() {
    let parentElement = document.createElement('div');
    parentElement.classList.add('conversation-section__guestbook');
    let divider = document.createElement('div');
    divider.classList.add('divider', 'conversation-section__guestbook-divider');
    let parentParent = document.querySelector('.conversation-section');
    parentParent.appendChild(parentElement);
    parentElement.appendChild(divider);

    displayComment();
};

function displayComments() {
    axios.get(commentsURL)
        .then(res => {

            res.data.sort(function sortData(a, b) {
                return b.timestamp - a.timestamp
            });

            res.data.forEach(res => {


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

                let time = new Date(res.timestamp);
                guestbookDate.innerText = time.toLocaleDateString();

                guestbookName.innerText = res.name;
                guestbookText.innerText = res.comment;
            });
        })
        .catch(err => console.log(err));
};

function deleteAll() {
    document.querySelector('.conversation-section__guestbook').remove();
}

const commentsForm = document.querySelector('.conversation-section__form');

commentsForm.addEventListener('submit', function commentsFormHandler(event) {
    event.preventDefault();

    let name = commentsForm.name.value;
    let comment = commentsForm.comment.value;

    if (name == 0 && comment == 0) {
        document.querySelector('.conversation-section__form-input-name').style.backgroundColor = '#FFF0F0';
        document.querySelector('.conversation-section__form-input-name').style.borderColor = '#FF0000';
        document.querySelector('.conversation-section__form-input-comment').style.backgroundColor = '#FFF0F0';
        document.querySelector('.conversation-section__form-input-comment').style.borderColor = '#FF0000';
        console.error('WHOA! Looks like were missing some of your info!');
    } else if (name == 0) {
        document.querySelector('.conversation-section__form-input-name').style.backgroundColor = '#FFF0F0';
        document.querySelector('.conversation-section__form-input-name').style.borderColor = '#FF0000';
        document.querySelector('.conversation-section__form-input-comment').style.backgroundColor = '#FAFAFA';
        document.querySelector('.conversation-section__form-input-comment').style.borderColor = '#AFAFAF';
        console.error('Please fill out your name!');
    } else if (comment == 0) {
        document.querySelector('.conversation-section__form-input-name').style.backgroundColor = '#FAFAFA';
        document.querySelector('.conversation-section__form-input-name').style.borderColor = '#AFAFAF';
        document.querySelector('.conversation-section__form-input-comment').style.backgroundColor = '#FFF0F0';
        document.querySelector('.conversation-section__form-input-comment').style.borderColor = '#FF0000';
        console.error("Tell us how you really feel!");
    } else {
        document.querySelector('.conversation-section__form-input-name').style.backgroundColor = '#FAFAFA';
        document.querySelector('.conversation-section__form-input-name').style.borderColor = '#AFAFAF';
        document.querySelector('.conversation-section__form-input-comment').style.backgroundColor = '#FAFAFA';
        document.querySelector('.conversation-section__form-input-comment').style.borderColor = '#AFAFAF';

        axios.post(commentsURL, {
                name: commentsForm.name.value,
                comment: commentsForm.comment.value,
            })
            .then(res => {
                commentsForm.reset();
                deleteAll();
                parentFunction();
                console.log(res);
            })
            .catch(err => {
                console.log(err);
            })
    }
})