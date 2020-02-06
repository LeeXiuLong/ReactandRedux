import React, { Component } from 'react';
import { connect } from 'react-redux';
import { selectSong } from '../actions'

class SongList extends Component {
    renderList() {
        return this.props.songs.map((song) => {
            return (
                <div className="item" key={song.title}>
                    <div className="right floated content">
                        <button
                            className="ui button primary"
                            onClick={() => this.props.selectSong(song)}
                        >
                            Select
                        </button>
                    </div>
                    <div className="content">{song.title}</div>
                </div>
            );
        })
    }
    render() {
        return (
            <div className="ui divided list">{this.renderList()}</div>
        );
    }
}

const mapStateToProps = state => {
    return {
        songs: state.songs
    }
}

//The flow is the action creator does creates an action or an object, in the 
//case of our songSelect function it returns an object with type and payload(check actions/index.js)
//once the function is passed to connect connect takes the object from selectSong and passes it to
//each reducer and the reducers do different things with that action depending on what they are
//all the things that are returned from the reducers end up in state.
export default connect(mapStateToProps, { selectSong: selectSong })(SongList);
