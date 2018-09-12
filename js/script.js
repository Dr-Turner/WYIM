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