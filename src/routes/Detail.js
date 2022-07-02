import React from "react";
import './Detail.css';

class Detail extends React.Component {
    componentDidMount() {
        const { location, history } = this.props;
        if (location.state === undefined) {
            history.push('/');
        }
    }

    render() {
        const { location } = this.props;
        if (location.state) {
        return <span className="detail">
            <img className="movieposter" src={location.state.poster} alt="poster"/><br/>
            <p className="yearfont"><strong>Year:</strong> {location.state.year}</p><br/>
            <p className="titlefont"><strong>Title:</strong> {location.state.title}</p><br/>
            <p className="summaryfont"><strong>Summary:</strong> {location.state.summary}</p><br/>
            <ul className="movie__genres">
            <strong>Genres:</strong>
            {location.state.genres.map((genre, index) => {
                return <li key={index} className="movie_genre">{genre}</li>;
            })}
            </ul>
            {/* <li key={'index'} className="genresfont">{location.state.genres}</li> */}
            {/* <ul className="genresfont"><strong>Genres:</strong> <li>{location.state.genres}</li></ul><br/> */}
            </span>;
    } else {
        return null;
    }
    }    
}

export default Detail;


