import React, { Component } from 'react'

export default class PokemonCard extends Component {
    state = {
        name: '',
        imageUrl:'',
        pokemonIndex:''
    };

    componentDidMount() {
        const { name, url } = this.props;
        const pokemonIndex = url.split('/')[6];
        const imageUrl = `https://github.com/jdiejim/pokedex-blog/blob/master/src/assets/sprites/${pokemonIndex}.png?raw=true`;

        this.setState({
           name,
           imageUrl,
        pokemonIndex 
        });
    }
    render(){ 
        return(
        <div className='col-md-3 col-sm-6 mb-5'>
            <div className="card">
            
                <h5 className='card-header'>{this.state.pokemonIndex}</h5>
                <div className="card-body">
                <h6 className="card-title mx-auto">{this.state.name}</h6></div>
            </div>
        </div>
        );
    }
}