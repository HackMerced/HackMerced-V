import React, { Component } from "react";
import InstagramEmbed from "react-instagram-embed";

import "./instagram.scss";

class Instagram extends Component {
  render() {
    return (
      <section id="instagram">
        <InstagramEmbed
          url="https://www.instagram.com/p/B9GmIWIAOss/"
          maxWidth={350}
          hideCaption={false}
          containerTagName="div"
          protocol=""
          injectScript
          onLoading={() => {}}
          onSuccess={() => {}}
          onAfterRender={() => {}}
          onFailure={() => {}}
        />
      </section>
    );
  }
}

export default Instagram;
