import _ from 'lodash';
import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import YTSearch from 'youtube-api-search';
import SearchBar from './components/search_bar';
import VideoList from './components/video_list';
import VideoDetail from './components/video_detail';
const API_KEY = 'AIzaSyBqw-lNFD51oib7nKak_vIR4XiFde7pkXU';

class App extends Component {
  constructor(props){
    super(props);

    this.state = {
      videos: [],
      selectedVideo: null
    };

    this.videoSearch('javascript');
  }

  videoSearch(term){
    YTSearch({key: API_KEY, term: term}, (videos) => {
      this.setState({
        videos: videos,
        selectedVideo: videos[0]
      });
    });
  }

  render(){
    const videoSearch = _.debounce((term) => { this.videoSearch(term) }, 300);



    return (
      <div>
        <SearchBar onSearchTermChange={videoSearch}/>
        <VideoDetail video={this.state.selectedVideo}/>
        <VideoList
        onVideoSelect={selectedVideo => this.setState({selectedVideo})}
        videos={this.state.videos} />
      </div>
    );
  }
}

ReactDOM.render(
    <App />,
    document.querySelector('.container')
);

/*

Explanation of Code:
1) Import React and ReactDOM as normal
2) Import the SearchBar & VideoList component
    a) SearchBar from './components/search_bar'
    b) VideoList from './components/video_list'
3) Declare a constant variable for our API keyword
4) Create a new class component called App
    a) On construction, import Component constructors (super), declare a state property called videos, with the value of an empty array
    b) On construction, run the YTSearch function, creating a object with the following properties:
        i) Pass the function our API KEY as 'key'
        ii) Enter our search term as 'term'
        iii) Our last argument being videos
        iv) Set the state videos of app to videos from the search
    c) Create our Render function for our App Component
        i) Create a container to hold our application(<div>)
        ii) Render the SearchBar (<SearchBar />)
            iia) This is reference to the importing of SearchBar at the top of the file
        iii) Render the VideoList with the property vidoes
            iiia) This is reference to the importing of VideoList at the top of the file
            iiib) Assign the property vidoes to the state of the App component property vidoes (<VideoList videos={this.state.videos} />)
5) Call ReactDOM.render
    a) Render our App component that we created in section 4
    b) Render it to the DOM
        i) Render to the div with the class "container"

*/
