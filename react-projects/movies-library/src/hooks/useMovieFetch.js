import { useState, useEffect } from "react";
import API from '../API'
import { isPersistedState } from "../helpers";

export const useMovieFetch = movieId => {
    const [state, setState] = useState({});
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(false);


    const fetchMovie = async (movieId) => {
        try {
            setError(false);
            setLoading(true);

            const movie = await API.fetchMovie(movieId);
            const credits = await API.fetchCredits(movieId);
            const direcotrs = credits.crew.filter(
                member => member.job === 'Director');

            setState({
                ...movie,
                actors: credits.cast,
                direcotrs
            });

            setLoading(false);

        } catch (e) {
            setError(true);
        }
    };

    useEffect(() => {
        fetchMovie(movieId)

    }, [movieId]);

    return { state, loading, error };

}

export default useMovieFetch;