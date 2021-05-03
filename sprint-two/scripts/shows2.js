let shows = [{
    date: 'Mon Sept 06 2021',
    venue: 'Ronald Lane',
    location: 'San Francisco, CA'
}, {
    date: 'Tue Sept 21 2021',
    venue: 'Pier 3 East',
    location: 'San Francisco, CA'
}, {
    date: 'Fri Oct 15 2021',
    venue: 'View Lounge',
    location: 'San Francisco, CA'
}, {
    date: 'Sat Nov 06 2021',
    venue: 'Hyatt Agency',
    location: 'San Francisco, CA'
}, {
    date: 'Fri Nov 26 2021',
    venue: 'Moscow Center',
    location: 'San Francisco, CA'
}, {
    date: 'Wed Dec 15 2021',
    venue: 'Pres Club',
    location: 'San Francisco, CA'
}];

let titles = ['DATES', 'VENUE', 'LOCATION'];



window.onload = parentFunction();

function parentFunction() {
    let parentElement = document.createElement('div');
    parentElement.classList.add('show-dates__shows-container');
    let parentParent = document.querySelector('.show-dates');
    parentParent.appendChild(parentElement);

    headings();
    loadData();
};




function headings() {
    let heading = document.createElement('div');
    heading.classList.add('show-dates__shows-headings');
    let headingsTitleDate = document.createElement('p');
    headingsTitleDate.classList.add('show-dates__shows-headings-title', 'show-dates__shows-headings-title-date');
    headingsTitleDate.innerHTML = titles[0];
    let headingsTitleVenue = document.createElement('p');
    headingsTitleVenue.classList.add('show-dates__shows-headings-title', 'show-dates__shows-headings-title-venue');
    headingsTitleVenue.innerHTML = titles[1];
    let headingsTitleLocation = document.createElement('p');
    headingsTitleLocation.classList.add('show-dates__shows-headings-title', 'show-dates__shows-headings-title-location');
    headingsTitleLocation.innerHTML = titles[2];

    let showsContainer = document.querySelector('.show-dates__shows-container');

    showsContainer.appendChild(heading);
    heading.appendChild(headingsTitleDate);
    heading.appendChild(headingsTitleVenue);
    heading.appendChild(headingsTitleLocation);
};



function loadData() {
    shows.forEach((data) => displayShows(data));
};

function displayShows(show) {
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
    button.classList.add('buttton', 'show-dates__button');
    button.innerText = "BUY TICKETS";
    let divider = document.createElement('div');
    divider.classList.add('divider', 'show-dates__shows-divider');

    let showsContainer = document.querySelector('.show-dates__shows-container');

    showsContainer.appendChild(showsList);
    showsList.appendChild(showsTitle1);
    showsList.appendChild(showsDate);
    showsList.appendChild(showsTitle2);
    showsList.appendChild(showsVenue);
    showsList.appendChild(showsTitle3);
    showsList.appendChild(showsLocation);
    showsList.appendChild(button);
    showsList.appendChild(divider);

    showsTitle1.innerText = titles[0];
    showsDate.innerText = show.date;
    showsTitle2.innerText = titles[1];
    showsVenue.innerText = show.venue;
    showsTitle3.innerText = titles[2];
    showsLocation.innerText = show.location;
};