import React, { Component } from 'react';

const API_KEY = 'f338b7e3';
export class SearchForm extends Component {
    state = { inputMovie: '' }

    _handlerChange = (e) => {
        this.setState({ inputMovie: e.target.value })
    }

    _handlerSubmit = (e) => {
        e.preventDefault()
        fetch(`http://www.omdbapi.com/?apikey=${ API_KEY }&s=${ this.state.inputMovie }
        `)
            .then( res => res.json() )
            .then( results => {
                const { Search, totalResults } =  results  
                this.props.onResults(Search)
                console.log({ Search, totalResults }) 
            })
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