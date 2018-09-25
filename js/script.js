
// function initMap() {
//     let loc = {lat: 53.394 ,lng: -1.529};  // Change this.
//     let map = new google.maps.Map(
//         document.getElementById('map-container-7'), {zoom: 4, center: loc});
//     let marker = new google.maps.Marker({position: loc, map: map});
//     console.info("hit");
//
//  }

leave_sites = [
    "https://www.amazon.co.uk",
    "https://www.bbc.co.uk/news"
    // need more "safe sites"
];

leave_url = leave_sites[Math.floor(Math.random()*leave_sites.length)];


// $('.carousel').carousel({
//     interval: 2000
// });

$("#leave").click(function () {
    window.location.href = leave_url;
});