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
    render() {
        return <input />;
    }
}

// Makes SearchBar availible to other files
export default SearchBar;
