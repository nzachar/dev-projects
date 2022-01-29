import React from 'react';
import { POSTER_SIZE, BACKDROP_SIZE, IMAGE_BASE_URL } from '../config';

import NoImage from '../images/no_image.jpg';
import apiSettings from '../API';
import { useHomeFetch } from '../hooks/useHomeFetch'
import HeroImage from './HeroImage';
import Grid from './Grid';
import Thumb from './Thumb';
import Spinner from './Spinner';
import SearchBar from './SearchBar';
import Button from './Button';

const Home = () => {
    const {
        state,
        loading,
        error,
        searchTerm,
        setSearchTerm,
        setIsLoadingMore
    } = useHomeFetch();

    if (error) return <div>Something went wrong</div>;

    const result = state?.results[0];

    return (
        <>
            {
                !searchTerm && state.results[0] ?
                    <HeroImage
                        image={`${IMAGE_BASE_URL}${BACKDROP_SIZE}${result.backdrop_path}`}
                        title={result.original_title}
                        text={result.overview} />
                    : null
            }
            <SearchBar setSearchTerm={setSearchTerm}></SearchBar>
            <Grid header={searchTerm ? 'Search Results' : 'Popular Movies'}>
                {state.results.map(movie => (
                    <Thumb
                        key={movie.id}
                        image={
                            movie.poster_path
                                ? IMAGE_BASE_URL + POSTER_SIZE + movie.poster_path
                                : NoImage
                        }
                        movieId={movie.id}
                    />

                ))}
            </Grid>
            {loading && <Spinner />}
            {state.page < state.total_pages && !loading && (
                <Button text='Load More' callback={()=> setIsLoadingMore(true)}/>
            )}
        </>
    )
}

export default Home;