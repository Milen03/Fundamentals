function manigerMovies(arr) {
    let movies = []
    for (const commant of arr) {
        if (commant.includes('addMovie')) {
            let token = commant.split('addMovie ')

            let movieName = token[1]
            movies.push({ name: movieName })

        } else if (commant.includes('directedBy')) {

            let [movieName, movieDirecter] = commant.split(' directedBy ')

            let existingMovie = movies.find(moviesObj => moviesObj.name === movieName)
            if (existingMovie) {
                existingMovie.director = movieDirecter
            }

        } else if (commant.includes('onDate')) {

            let [movieName, movieOnDate] = commant.split(' onDate ')
            let existingMovie = movies.find(moviesObj => moviesObj.name === movieName)
            if (existingMovie) {
                existingMovie.date = movieOnDate
            }


        }
        
    }
    for (const movieObj of movies) {
        if (movieObj.name && movieObj.director && movieObj.date) {
            console.log(JSON.stringify(movieObj));
        }
    }
}
manigerMovies([

    'addMovie Fast and Furious',

    'addMovie Godfather',

    'Inception directedBy Christopher Nolan',

    'Godfather directedBy Francis Ford Coppola',

    'Godfather onDate 29.07.2018',

    'Fast and Furious onDate 30.07.2018',

    'Batman onDate 01.08.2018',

    'Fast and Furious directedBy Rob Cohen'

])