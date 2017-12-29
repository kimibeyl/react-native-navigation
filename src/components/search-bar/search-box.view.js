import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { SearchBar } from 'react-native-elements';

export default class SearchBox extends Component {
    render() {
        return this.props.showSearchBox ? (
            <SearchBar
                onChangeText={this.props.onTextChange}
                placeholder={this.props.placeholderText}
                lightTheme
                clearIcon
            />
        ) : null;
    }
}

SearchBox.propTypes = {
    showSearchBox: PropTypes.bool,
    placeholderText: PropTypes.string,

    onTextChange: PropTypes.func
};
