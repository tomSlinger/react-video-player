import React, { Component } from 'react';

class SearchBar extends Component{
  constructor(props){
    super(props);

    this.state = {
      term: ''
    };
  }

  render(){
      return(
        <div className="search-bar">
          <input
            value={this.state.term}
            onChange={event => this.onInputChange(event.target.value)} />
        </div>
      );
  }

  onInputChange(term){
    this.setState({term});
    this.props.onSearchTermChange(term);
  }
}

export default SearchBar;

/*

Explanation of Code:
1) Import React as normal
2) Create a class called SearchBar
3) SearchBar has a constructor, setting a state value with an empty string
4) SearchBar Render function:
  a) Return an input box within a div
  b) The input has a onChange attribute
  c) onChange refers to a function, with updates the state value 'term' with the value of the input field
5) Export SearchBar so that it can be imported

*/
