import React, { Component } from 'react';

export class SearchForm extends Component {
    state = { inputMovie: '' }

    _handlerChange = (e) => {
        this.setState({ inputMovie: e.target.value })
    }

    _handlerSubmit = (e) => {
        const apiKey = 'f338b7e3';
        e.preventDefault()
        fetch(`http://www.omdbapi.com/?apikey=${ apiKey }&s=${ this.state.inputMovie }
        `)
            .then( res => res.json() )
            .then( results => console.log(results))
    }

    

    render(){
        return(
            <form onSubmit={this._handlerSubmit}>
                <div className="field has-addons">
                    <div className="control">
                        <input 
                            className="input" 
                            type="text" 
                            onChange={this._handlerChange}
                            placeholder="Find a movie" 
                        />
                    </div>
                    <div className="control">
                        <button className="button is-info">    
                            Search
                        </button>
                    </div>
                </div>
            </form>
        )
    }
}