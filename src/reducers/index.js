import { combineReducers } from 'redux';

const songsReducer = () => {
  return [
    { title: 'No Scrubs', duration: '4:05' },
    { title: 'Smells Like Teen Spirit', duration: '2:30' },
    { title: 'All Star', duration: '3:15' },
    { title: 'I Want It that Way', duration: '1:45' }
  ];
};

const selectedSongreducer = (selectedSong=null, action) => {
  if (action.type === 'SONG_SELECTED') {
    return action.payload;
  }

  return selectedSong;
};


export default combineReducers({
  songs: songsReducer,
  selectedSong: selectedSongreducer
});
