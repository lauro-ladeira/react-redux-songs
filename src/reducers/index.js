import { combineReducers } from "redux";

const songs = () => {
  return [
    { title: "BYOB", duration: "3:05" },
    { title: "Hypnotize", duration: "2:42" },
    { title: "Toxicity", duration: "2:58" },
    { title: "Forest", duration: "4:55" }
  ];
};

const selectedSongReducer = (selectedSong = null, action) => {
  if (action.type === "SELECT_SONG") {
    return action.payload;
  }
  return selectedSong;
};

// as keys desse objeto são as keys do state object dentro da store
const reducers = combineReducers({
  songs: songs,
  selectedSong: selectedSongReducer
});

export default reducers;
