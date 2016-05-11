/**
 * Created by leichen on 5/9/16.
 */
import React, { Component } from 'react';
import Flicker from './Flicker.jsx';
import { flikrSearch } from './PureModel'
export default class Main extends Component {

    //init state :: {error:: String}
    constructor(props) {
        super(props);
        this.state = {
            error: '',
            results:[]
        };
        this.showError = this.showError.bind(this);
        this.termChanged = this.termChanged.bind(this);
        this.searchClicked = this.searchClicked.bind(this);
        this.updateResults = this.updateResults.bind(this);
    }

    //showError :: String -> State Error
    showError(s) {
        this.setState({ error: s });
    }

    //termChanged :: Event -> State Term
    termChanged({ currentTarget: t }) {
        this.setState({ term: t.value });
    }

    //updateResults :: [url] -> State Results
    updateResults(xs) {
        console.log(xs)
        this.setState({ results: xs });
    }

    //searchClicked :: Event ->?
    searchClicked(_) {
       flikrSearch(this.state.term).fork(this.showError,this.updateResults)
    }

    render() {
        return (
            <div id="app">
                {this.state.error ? <p>{this.state.error}</p> : null}
                <Flicker
                    showError={this.showError}
                    termChanged={this.termChanged}
                    searchClicked={this.searchClicked}
                    results={this.state.results}
                />
            </div>
        );
    }
}

