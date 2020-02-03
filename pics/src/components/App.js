import React from 'react';
<<<<<<< HEAD
import unsplash from '../api/unsplash';
=======
import axios from 'axios';
>>>>>>> ee381097d0599322e73930ddfca4759970c73d13
import SearchBar from './SearchBar';
import ImageList from './ImageList';

class App extends React.Component {
<<<<<<< HEAD
    state = {images: [] };
    
    onSearchSubmit = async (term) =>{
        const response = await unsplash.get('/search/photos',{
            params: {query: term}
        });

        this.setState({images: response.data.results});
    }

    render(){
        return(
            <div className = "ui container" style={{marginTop: '10px'}}>
                <SearchBar onSubmit={this.onSearchSubmit} />
                <ImageList images={this.state.images}/>
            </div>
        );
    }

=======

    state = { images: [] };

    async onSearchSubmit(term) {
        const response = await axios.get('https://api.unsplash.com/search/photos', {
            params: { query: term },
            headers: {
                Authorization: 'Client-ID cf77429e1b4bb74f3a00d7a1bf0c4b45bba09fdbd6b8e5d3e441c5636cdde6dd'
            }
        });
        this.setState({ images: response.data.results });
    }

    render() {
        return (
            <div className="ui container" style={{ marginTop: '10px' }}>
                <SearchBar onSubmit={this.onSearchSubmit} />
                Found: {this.state.images.length} images
            </div>
        );
    }
>>>>>>> ee381097d0599322e73930ddfca4759970c73d13
}

export default App;