import React from 'react';
// import TwitterMedia from './TwitterMedia';
// import TikTokMedia from './TikTokMedia';
// import InstagramMedia from './InstagramMedia';
import './Home.css';

 

const Home = () => {
  return (
    <main className="home">
      <section className="media-section instagram">
        <h2>Instagram</h2>
        <div className="media-box">
          <img src="/instagram-placeholder.jpg" alt="Instagram" />
          <div className="caption">Instagram Photo Title</div>
        </div>
      </section>
      <section className="media-section twitter">
        <h2>Twitter</h2>
        <div className="media-box">
          <img src="/twitter-placeholder.png" alt="Twitter" />
          <div className="caption">Twitter News F1</div>
        </div>
      </section>
      <section className="media-section instagram">
        <h2>Instagram</h2>
        <div className="media-box">
          <img src="/instagram-placeholder.jpg" alt="Instagram" />
          <div className="caption">Instagram Photo Title</div>
        </div>
      </section>
    </main>
  );
};

export default Home;
