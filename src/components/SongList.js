import React from "react";
import { connect } from "react-redux";
import { selectSong } from "../actions";

class SongList extends React.Component {
  renderList = () => {
    return this.props.songs.map(song => {
      return (
        <div className="item" key={song.title}>
          <div className="right floated content">
            <button onClick={() => this.props.selectS(song)} className="ui button primary">Select</button>
          </div>
          <div className="content">{song.title}</div>
        </div>
      );
    });
  };

  render() {
    return <div className="ui divided list">{this.renderList()}</div>;
  }
}

const mapStateToProps = state => {
  console.log(state);
  return { songs: state.songs };
};

//segundo argumento é um objeto com uma key que recebe a action creator
export default connect(mapStateToProps, {selectS: selectSong})(SongList);
