import { Content, Wrapper } from "./MovieInfo.styles";
import Thumb from '../Thumb';
import { IMAGE_BASE_URL, POSTER_SIZE } from "../../config";
import NoImage from '../../images/no_image.jpg';
import { Text } from "./MovieInfo.styles";

const MovieInfo = ({ movie }) => (
    <Wrapper backdrop={movie.backdrop_path}>
        <Content>
            <Thumb
                image={
                    movie.poster_path
                        ? `${IMAGE_BASE_URL}${POSTER_SIZE}${movie.poster_path}`
                        : NoImage
                }
                clickable={false}
                alt='movie-thumb'
            ></Thumb>
            <Text>
                <h1>{movie.title}</h1>
                <h3>PLOT</h3>
                <p>{movie.overview}</p>
                <div className="rating-directors">
                    <div>
                        <h3>RATING</h3>
                        <div className="score">{movie.vote_average}</div>
                    </div>
                    <div className="director">
                        <h3>DIRECTOR{movie.direcotrs.length > 1 ? 'S' : ''}</h3>
                        {movie.direcotrs.map(direcotr => (
                            <p key={direcotr.credit_id}>
                                {direcotr.name}
                            </p>
                        ))}

                    </div>
                </div>
            </Text>
        </Content>
    </Wrapper>
);

export default MovieInfo;