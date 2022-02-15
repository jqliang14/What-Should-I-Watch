//Guided Practice
let horrorMovies = ["Midsommar", "Hereditary", "Get Out"];


$(".horror").click(function() {
    // write your forEach loop here
    horrorMovies.forEach(function(movie) {

        $('.horror-recommend').append(`<li>${movie}</li>`);

    });

});

let actionMovies = ["Avenger:End Game", "Once Upon A Time in China", "Vanguard"];


$(".action").click(function() {
    // write your forEach loop here
    actionMovies.forEach(function(movie) {

        $('.action-recommend').append(`<li>${movie}</li>`);

    });

});

let comedyMovies = ["KungFu Hustle", "My Lucky Star", "Vanguard"];


$(".comedy").click(function() {
    // write your forEach loop here
    comedyMovies.forEach(function(movie) {

        $('.comedy-recommend').append(`<li>${movie}</li>`);

    });

});
