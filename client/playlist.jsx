import React from 'react';
import Button from 'react-toolbox/lib/button';
import { Card, CardMedia, CardTitle, CardText, CardActions } from 'react-toolbox/lib/card';
import ClassNames from 'classnames';
import style from './styles/toolbox-theme';

const Playlist = ({ playlist, removeCard }) => {
  let cards = playlist.map((track) =>
    <Card onClick={() => handleCardPlay(track)}
      key={track.contentId}
      className={ClassNames(style['card'])}
      style={{ width: '350px', height: '300px', margin: '15px' }}
    >
      <div className={ClassNames(style['image-container'])}>
        <CardTitle
          className={ClassNames(style['source-logo'])}
          avatar= {
            track.apiSource === 'SoundCloud' ? 'https://c1.staticflickr.com/9/8082/8292777643_65090144e9.jpg' :
              'https://cdn0.iconfinder.com/data/icons/social-networks-and-media-flat-icons/136/Social_Media_Socialmedia_network_share_socialnetwork_network-30-512.png'
          }
        />
        <CardMedia
          aspectRatio="wide"
          image={track.imagePath}
        />
      </div>
      <div className={ClassNames(style['card-title'])}>
      {track.songTitle}
      </div>
      <div className={ClassNames(style['card-overlay'])}>
      </div>
    </Card>
  );
  return (
    <div className="cardsContainer">
      {cards}
    </div>
  );
};

export default Playlist;