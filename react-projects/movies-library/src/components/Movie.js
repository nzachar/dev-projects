import React from 'react';
import { useParams } from 'react-router-dom';
import useMovieFetch from '../hooks/useMovieFetch';

import NoImage from '../images/no_image.jpg'
import Actor from './Actor';
import BreadCrumb from './BreadCrumb';
import MovieInfo from './MovieInfo';
import MovieInfoBar from './MovieInfoBar';
import Spinner from './Spinner';
import Grid from './Grid';
import { IMAGE_BASE_URL, POSTER_SIZE } from '../config';


const Movie = () => {

    const { movieId } = useParams();
    const { state: movie, loading, error } = useMovieFetch(movieId);

    if (loading) return <Spinner />
    if (error) return <div>Something went wrong...</div>;

    console.log(movie);

    return (
        <>
            <BreadCrumb movieTitle={movie.original_title}></BreadCrumb>
            <MovieInfo movie={movie}></MovieInfo>
            <MovieInfoBar
                time={movie.runtime}
                budget={movie.budget}
                revenue={movie.revenue}
            ></MovieInfoBar>
            <Grid header='Actors'>
                {movie.actors.map(actor => (
                    <Actor
                        key={actor.credit_id}
                        name={actor.name}
                        imageUrl={actor.profile_path
                            ? `${IMAGE_BASE_URL}${POSTER_SIZE}${actor.profile_path}`
                            : NoImage}
                    ></Actor>
                ))}


            </Grid>
        </>
    )
}

export default Movie;