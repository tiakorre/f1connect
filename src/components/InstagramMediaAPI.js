import React from 'react';
import './InstagramMedia.css';

const InstagramMedia = ({ media }) => {
  return (
    <div className="instagram-media" style={{ backgroundImage: `url(${media.image})` }}>
      <div className="caption">{media.caption}</div>
    </div>
  );
};

export default InstagramMedia;
