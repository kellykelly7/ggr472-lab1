// establishing constant variables for all my buttons from the html page with IDs
const btn = document.getElementById("sidsmith_commons");
const bttn = document.getElementById("places_to_eat");
const acorn = document.getElementById("acorn");
const quercus = document.getElementById("quercus");
const artsci_cal = document.getElementById("artsci_calendar");
const ttb = document.getElementById("timetable_builder");
const utl = document.getElementById("utlibraries");

// adding a reaction to clicking on the buttons added to the html webpage
btn.addEventListener("click", () => {
    // opens a new window with the provided link, that is different per variable
    window.open("https://sidneysmithcommons.artsci.utoronto.ca/", "_blank");
});

bttn.addEventListener("click", () => {
    window.open("map.geojson", "_blank");
});

acorn.addEventListener("click", () => {
    window.open("https://acorn.utoronto.ca/", "_blank");
});

quercus.addEventListener("click", () => {
    window.open("https://q.utoronto.ca/", "_blank");
});

artsci_cal.addEventListener("click", () => {
    window.open("https://artsci.calendar.utoronto.ca/", "_blank");
});

ttb.addEventListener("click", () => {
    window.open("https://ttb.utoronto.ca/", "_blank");
});

utl.addEventListener("click", () => {
    window.open("https://onesearch.library.utoronto.ca/", "_blank");
});