import { ReactComponent as StartFullIcon } from 'assets/img/star-full.svg';
import { ReactComponent as StartHalfIcon } from 'assets/img/star-half.svg';
import { ReactComponent as StartEmptyIcon } from 'assets/img/star-empty.svg';
import './styles.css';

function MovieStars() {
    return (
        <div className="dsmovie-stars-container">
            <StartFullIcon />
            <StartFullIcon />
            <StartFullIcon />
            <StartHalfIcon />
            <StartEmptyIcon />
        </div>
    )
}

export default MovieStars;