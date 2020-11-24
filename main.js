let moviesapi = [];
fetch("https://sky-frontend.herokuapp.com/movies")
    .then(res => res.json())
    .then(data => {
        for (movie of data) {
            moviesapi.push(movie)
        }
    }).catch((err) => console.log(err));

let filmes = Object.assign({}, moviesapi[2]);

console.log(filmes);