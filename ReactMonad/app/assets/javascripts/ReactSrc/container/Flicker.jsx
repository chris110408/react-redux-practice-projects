/**
 * Created by leichen on 5/9/16.
 */
import React, { Component } from 'react';

export default class Flicker extends Component {

    //init state :: {term:: String}
    constructor(props) {
        super(props);
    }


    render() {
        this.termChanged=this.props.termChanged;
        this.searchClicked=this.props.searchClicked;
        const results  = this.props.results;
        const imgs = results.map(src=><img src={src} key={src}/>)
        return (
            <div id="flickr">
                <input onChange={this.termChanged} />
                <button onClick={this.searchClicked}>Search</button>
                <div id="results">{imgs}</div>
            </div>
        );
    }
}

