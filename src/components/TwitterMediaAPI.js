import React from 'react';
import './TwitterMedia.css';

const TwitterMedia = ({ media }) => {
  return (
    <div className="twitter-media" style={{ backgroundImage: `url(${media.image})` }}>
      <div className="caption">{media.caption}</div>
    </div>
  );
};

export default TwitterMedia;
