import React from 'react';

/*
This is a functional component - no state
const SearchBar = () => {
    return <input />;
};
*/

// But we need our component to have state
// So we use a class based component (has introspection)
class SearchBar extends React.Component {

    // First and only method when an instance is created
    // We call super(props) to execute React.Component 
    // constructore  
    constructor(props) {
        super(props);

        // We declare a state wich has a single propriety,
        // Called "term". We only change the state this way
        // inside the constructor function  
        this.state = { term: '' };
    }

    render() {

        return (
        <div className="search-bar">
            <input 
            value ={this.state.term}
            onChange={event => this.onInputChange(event.target.value)} />
        </div>
        );
    }

    // Event handler, is called when the input 
    // content changes
    // we could see the actual event using
    // console.log(event)  
    onInputChange(term) {
        this.setState({term})
        this.props.onSearchTermChange(term);
    }
}

// Makes SearchBar availible to other files
export default SearchBar;
