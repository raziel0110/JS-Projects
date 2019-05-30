import React from "react";
import unsplash from "../api/unsplash";
import SearchBar from "./searchBar";
import ImageList from "./imageList";

class App extends React.Component {
  state = { images: [] };
  onSearchSubmit = async term => {
    const response = await unsplash.get("/search/photos/", {
      params: { query: term }
    });

    this.setState({ images: response.data.results });
    //=================================================================
    //using fetch
    // fetch("https://api.unsplash.com/search/photos/?query=" + term, {
    //   method: "GET",
    //   headers: {
    //     Authorization:
    //       "Client-ID ea0ffbf40f3e378873d7583f26634396469475494950ef06b4c329cb4e04b375"
    //   }
    // })
    //   .then(res => res.json())
    //   .then(response => console.log(response));
    //==================================================================
  };

  render() {
    return (
      <div className="ui container" style={{ margin: "10px" }}>
        <SearchBar onSubmit={this.onSearchSubmit} />
        <ImageList images={this.state.images} />
      </div>
    );
  }
}

export default App;
