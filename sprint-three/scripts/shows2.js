let titles = ['DATES', 'DATE', 'VENUE', 'LOCATION'];

let API_KEY = "1b0f285f-ad7c-4c1a-acae-3b7af8f337d8";
const API_showsURL = 'https://project-1-api.herokuapp.com/showdates?api_key=1b0f285f-ad7c-4c1a-acae-3b7af8f337d8';


window.onload = parentFunction();

function parentFunction() {
    let parentElement = document.createElement('div');
    parentElement.classList.add('show-dates__shows-container');
    let parentParent = document.querySelector('.show-dates');
    parentParent.appendChild(parentElement);

    headings();


};


function headings() {
    let heading = document.createElement('div');
    heading.classList.add('show-dates__shows-headings');
    let headingsTitleDate = document.createElement('p');
    headingsTitleDate.classList.add('show-dates__shows-headings-title', 'show-dates__shows-headings-title-date');

    let headingsTitleVenue = document.createElement('p');
    headingsTitleVenue.classList.add('show-dates__shows-headings-title', 'show-dates__shows-headings-title-venue');;
    let headingsTitleLocation = document.createElement('p');
    headingsTitleLocation.classList.add('show-dates__shows-headings-title', 'show-dates__shows-headings-title-location');

    let button = document.createElement('button');
    button.classList.add('button', 'main-section__shows-button', 'main-section__shows-button--hidden');
    button.innerText = "BUY TICKETS";

    let showsContainer = document.querySelector('.show-dates__shows-container');

    showsContainer.appendChild(heading);
    heading.appendChild(headingsTitleDate);
    heading.appendChild(headingsTitleVenue);
    heading.appendChild(headingsTitleLocation);
    heading.appendChild(button);

    headingsTitleDate.innerText = titles[1];
    headingsTitleVenue.innerText = titles[2];
    headingsTitleLocation.innerText = titles[3];

    loadShowDates();
};



function loadShowDates() {
    axios.get(showsURL)
        .then(res => {

            res.data.forEach(res => {


                let showsList = document.createElement('div');
                showsList.classList.add('show-dates__shows');
                let showsTitle1 = document.createElement('p');
                showsTitle1.classList.add('show-dates__shows-content', 'show-dates__shows-title');
                let showsDate = document.createElement('p');
                showsDate.classList.add('show-dates__shows-content', 'show-dates__shows-date');
                let showsTitle2 = document.createElement('p');
                showsTitle2.classList.add('show-dates__shows-content', 'show-dates__shows-title');
                let showsVenue = document.createElement('p');
                showsVenue.classList.add('show-dates__shows-content', 'show-dates__shows-venue');
                let showsTitle3 = document.createElement('p');
                showsTitle3.classList.add('show-dates__shows-content', 'show-dates__shows-title');
                let showsLocation = document.createElement('p');
                showsLocation.classList.add('show-dates__shows-content', 'show-dates__shows-location');
                let button = document.createElement('button');
                button.classList.add('button', 'show-dates__button');
                button.innerText = "BUY TICKETS"
                let divider = document.createElement('div');
                divider.classList.add('divider', 'show-dates__shows-divider');

                let showsContainer = document.querySelector('.show-dates__shows-container');

                showsContainer.appendChild(showsList);
                showsList.appendChild(datesTitle);
                showsList.appendChild(showsDate);
                showsList.appendChild(venuesTitle);
                showsList.appendChild(showsVenue);
                showsList.appendChild(locationTitle);
                showsList.appendChild(showsLocation);
                showsList.appendChild(button);
                showsList.appendChild(divider);

                datesTitle.innerText = titles[0];
                showsDate.innerText = res.date.toLowerCase();
                venuesTitle.innerText = titles[2];
                showsVenue.innerText = res.place;
                locationTitle.innerText = titles[3];
                showsLocation.innerText = res.location;
            });
        })
        .catch(err => console.log(err));
};