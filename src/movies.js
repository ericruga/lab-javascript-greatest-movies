// The `movies` array from the file `src/data.js`.
const movies = require('./data');
console.log('movies: ', movies);


// Iteration 1: All directors? - Get the array of all directors.
// _Bonus_: It seems some of the directors had directed multiple movies so they will pop up multiple times in the array of directors.
// How could you "clean" a bit this array and make it unified (without duplicates)?
function getAllDirectors(arr) {

const allDirectors = arr.map((eachDirector) => {
return eachDirector.director;
});
  return allDirectors;
}

// Iteration 2: Steven Spielberg. The best? - How many drama movies did STEVEN SPIELBERG direct?
function howManyMovies(arr) {

let filteredAdd = arr.filter((eachElement) => {
  return eachElement.director === 'Steven Spielberg' && eachElement.genre.includes('Drama');
});
  return filteredAdd.length;
}

// Iteration 3: All scores average - Get the average of all scores with 2 decimals
function scoresAverage(arr) {

//COMPROBAR QUE EL ARRAY NO VIENE VACIO
  if( arr.length === 0){

    return 0;
  }

  let allscores = arr.reduce((acc,element) => {

    if(element.score){ 

      return acc + element.score;
      // AQUI QUEREMOS QUE ME DE EL SUMATORIO QUE TENIA HASTA AHORA = SUMA TOTAL
    }else {  return acc}

  }, 0);
  // ESTE 0 HACE REFERENCIA A LA SUMA DEL ACUMULADOR A LA HORA DE EMPEZAR
  let media = (allscores/arr.length).toFixed(2);
  //SIEMPRE QUE USAMOS UN TO FIX SE PASA A STRING, por eso ponemos el number linea siguiente

  return Number(media);

}

// Iteration 4: Drama movies - Get the average of Drama Movies
function dramaMoviesScore() {}

// Iteration 5: Ordering by year - Order by year, ascending (in growing order)
function orderByYear() {}

// Iteration 6: Alphabetic Order - Order by title and print the first 20 titles
function orderAlphabetically() {}

// BONUS - Iteration 7: Time Format - Turn duration of the movies from hours to minutes
function turnHoursToMinutes() {}

// BONUS - Iteration 8: Best yearly score average - Best yearly score average
function bestYearAvg() {}



// The following is required to make unit tests work.
/* Environment setup. Do not modify the below code. */
if (typeof module !== 'undefined') {
  module.exports = {
    getAllDirectors,
    howManyMovies,
    scoresAverage,
    dramaMoviesScore,
    orderByYear,
    orderAlphabetically,
    turnHoursToMinutes,
    bestYearAvg,
  };
}
