import React from "react";

const SketchfabEmbed = () => {
  return (
    <div class="sketchfab-embed-wrapper">
      {" "}
      <iframe
        title="2024 Mercedes-Benz EQS 580"
        frameborder="0"
        allowfullscreen
        mozallowfullscreen="true"
        webkitallowfullscreen="true"
        allow="autoplay; fullscreen; xr-spatial-tracking"
        xr-spatial-tracking
        execution-while-out-of-viewport
        execution-while-not-rendered
        style={{backgroundColor: "transparent", border: "1px solid transparent"}}
        web-share
        src="https://sketchfab.com/models/b351c436890f4198b6aae86ffc9b0222/embed"
      ></iframe>
    </div>
  );
};

export default SketchfabEmbed;
