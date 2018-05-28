// Go find the 'react' library and assign it to the
// variable 'React'
import _ from 'lodash'
import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import YTSearch from 'youtube-api-search';
import SearchBar from './components/search_bar';
import VideoList from './components/video_list';
import VideoDetail from './components/video_detail';
const API_KEY = 'AIzaSyCYNgJJHXUHoYIvKV8xrz5yP7Pnvse2M7s';

/*
Creates a new component that produces html
JSX transpiles to:
React.createElement("div", null, "Hi!")
We are actually creating a class, not an instance
This is like a factory for creating App functions.
= () => is the ES6 equivalent of
= function ()
*/
class App extends Component {
  constructor(props) {
    super(props);

    this.state = { 
      videos: [],
      selectedVideo: null
    };

    this.videoSearch('Huawei Carrier')
  }


videoSearch(term){
  YTSearch({ key: API_KEY, term}, (videos) => {
    // This is equivalent to this.setState ({ videos: videos})
    this.setState({ 
      videos : videos,
      selectedVideo: videos[0]
    });
  });
}

  render() {

    const videoSearch = _.debounce((term) => {this.videoSearch(term)}, 300)

    return (
      <div>
        <SearchBar onSearchTermChange={videoSearch}/>
        <VideoDetail video={this.state.selectedVideo}/>
        <VideoList 
          onVideoSelect={selectedVideo => this.setState({selectedVideo})}
          videos={this.state.videos}/>
      </div>
    );
  }
}

// Put the generated html and insert it on the DOM
// <App /> is an instance of App.
// We also need to tell ReactDOM the target DOM
// where App will be put
ReactDOM.render(<App />,
  document.querySelector('.app-container'));