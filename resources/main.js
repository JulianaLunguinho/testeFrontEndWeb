let dados = []

const mainCarousel = $("#highlights");
const lessCarousel = $("#carousel");

var highlightsMovies = [];
var carouselMovies = [];

fetch("https://sky-frontend.herokuapp.com/movies")
    .then(res => res.json())
    .then(data => {
        for (item of data) {
            dados.push(item)
        }

        var highlights = dados.filter(object => object.type == "highlights");
        var carousel = dados.filter(object => object.type == "carousel-portrait");

        highlightsMovies = highlights[0].items;
        carouselMovies = carousel[0].movies;

        addImgsMenu();
        
        addImgsCarolsel();

    }).catch((err) => console.log(err));

function addImgsCarolsel() {
    carouselMovies.forEach(movie => {
        let imgCarousel = document.createElement("img");
        imgCarousel.setAttribute("class", "img-carousel");
        imgCarousel.setAttribute("src", movie.images[0].url);
        imgCarousel.setAttribute("alt", movie.title);
        lessCarousel.append(imgCarousel);
    })
}

function addImgsMenu () {
    highlightsMovies.forEach(movie => {
        let imgCarousel = document.createElement("img");
        imgCarousel.setAttribute("class", "img-menu");
        imgCarousel.setAttribute("src", movie.images[0].url);
        imgCarousel.setAttribute("alt", movie.title);
        mainCarousel.append(imgCarousel);
    })
}
