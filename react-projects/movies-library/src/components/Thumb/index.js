import { Link } from "react-router-dom";
import { Image } from "./Thumb.styles";


const Thumb = ({ image, movieId, clickable = true }) => (
    clickable ?
        <Link to={`/${movieId}`}>
            <Image src={image} alt='movie-thumb' />
        </Link>
        : <Image src={image} alt='movie-thumb' />
);

export default Thumb;