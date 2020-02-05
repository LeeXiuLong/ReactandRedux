import { combineReducers } from 'redux';


const songsReducer = () =>{
    return[
        { title: 'No Scrubs', duration: '4:05' },
        { title: 'Melodies of Life', duration: '3:00'},
        { title: 'Kakariko Village', duration: '2:30'},
        { title: 'Sword Search', duration: '4:20'}
    ];
};

const selectedSongReducer = (selectedSong = null, action) =>{
    if (action.type === 'SONG_SELECTED'){
        return action.payload;
    }

    return selectedSong;
};

export default combineReducers({
    songs: songsReducer,
    selectedSong: selectedSongReducer
});