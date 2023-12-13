import { byCategory } from "./byCategory.js";
import { getImages } from "./getImages.js";

export const featured = async () => {
  let featured = [];
  // getting the shows
  const movies = (await byCategory("movie", "upcoming"))?.shows.results;
  const tv = (await byCategory("tv", "popular"))?.shows.results;
  // sizing them
  const splitMovies = movies.slice(0, 3);
  const splitTv = tv.slice(0, 3);
  // adding some keys/values to each show
  const moviesWithLogos = await Promise.all(
    splitMovies.map(async (movie) => {
      try {
        const response = await getImages("movie", movie.id);
        const logos = response.logos.filter((logo)=> logo.iso_639_1 == "he" || logo.iso_639_1 == "en")
        const logo = logos[0];
        movie.backdrop_path = `https://image.tmdb.org/t/p/original${movie.backdrop_path}`
        movie.logo_url = `https://image.tmdb.org/t/p/original${logo.file_path}`;
        movie.type = "movie";
        return movie;
      } catch (error) {
        console.log(error);
      }
    })
  );
  const tvWithLogos = await Promise.all(
    splitTv.map(async (tv) => {
      try {
        const response = await getImages("tv", tv.id);
        const logo = response.logos[0];
        if (logo) {
          tv.logo_url = `https://image.tmdb.org/t/p/original${logo.file_path}`;
        }
        tv.backdrop_path = `https://image.tmdb.org/t/p/original${tv.backdrop_path}`
        tv.type = "tv";
        return tv;
      } catch (error) {
        console.log(error);
      }
    })
  );
  featured = moviesWithLogos.concat(tvWithLogos)
  return {success: true, featured}
};
