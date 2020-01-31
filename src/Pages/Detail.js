import React, { Component } from 'react';
import PropTypes from 'prop-types';

const API_KEY = 'f338b7e3';
export class Detail extends Component {
    state = { movie: {} }
    
    static propTypes = {
        id: PropTypes.string,
    }
    
    _goBack = (e) => {
        window.history.back()
    }

    _fetchMovie= (id) => {
        fetch(`http://www.omdbapi.com/?apikey=${ API_KEY }&i=${ id }
        `)
            .then( res => res.json() )
            .then( movie => { 
                console.log(movie , id) 
                this.setState({ movie })
            })
    }

    componentDidMount() {
        const { id } = this.props;
        this._fetchMovie( id )
    }
    
    render(){
        const { Title, Actors, Poster, Metascore, Plot } = this.state.movie

        return (
            <div>
                <button onClick={this._goBack}>Go back</button>
                <h1>{Title}</h1>
                <img src={Poster} alt={Title}/>
                <h3>{Actors}</h3>
                <span>{Metascore}</span>
                <p>{Plot}</p>
            </div>
        )
    }
}