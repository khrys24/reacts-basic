import React from "react";
import axios from "axios";
import Navbar from "./Navbar";
import SearchBar from "./SearchBar";
import ImageList from "./ImageList";

// BzqdmndCu8h92nHMvrI-ENLIQ2tqeYMVI6M8bmaRQ0U
// Authorization: Client-ID BzqdmndCu8h92nHMvrI-ENLIQ2tqeYMVI6M8bmaRQ0U
// https://api.unsplash.com/search/photos

class App extends React.Component {
    state = { images: [] };


    onSearchSubmit = async (term) => {
        // async / await
        const response = await axios.get(
            'https://api.unsplash.com/search/photos',
            {
                headers: {
                    Authorization: 'Client-ID BzqdmndCu8h92nHMvrI-ENLIQ2tqeYMVI6M8bmaRQ0U'
                },
                params: {
                    query: term,
                    per_page: 30
                }
            } 
        );
        this.setState({images: response.data.results});

        // Promisensyntax
    //     axios.get('https://api.unsplash.com/search/photos',
    //     { headers: {
    //         Authorization: 'Client-ID BzqdmndCu8h92nHMvrI-ENLIQ2tqeYMVI6M8bmaRQ0U'
    //     },
    //     params: {
    //         query: term
    //     }
    //     }
    //   ).then( (response) => {
    //     console.log(response.data.results);
    //   }
    //   );
    }

    render() {
        return (
            <div>
                <Navbar />
                <SearchBar onSubmit={this.onSearchSubmit} label="Image Search"/>
                <ImageList images={this.state.images} />
            </div>
        );
    }
}

export default App;
