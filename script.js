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

mapboxgl.accessToken = '...'; // Add default public map token from your Mapbox account

const map = new mapboxgl.Map({
    container: 'campus-buildings', // map container ID
    style: 'mapbox://styles/kellykelly7/cm71hqor100tx01s18p9x503i', // style URL
    center: [-79.3908, 43.6593], // starting position [lng, lat]
    zoom: 14.5, // starting zoom level
});

map.on('load', () => {
    map.addSource('campus-buildings', {
        type: 'geojson',
        // link to my geojson file for campus buildings
        data: 'https://github.com/kellykelly7/ggr472-lab1/blob/main/campusbuildings.geojson' 
        });
});