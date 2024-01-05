import React from 'react';
import { Div } from './HeroBgAnimationStyle';

const HeroBgAnimation = () => (
  <Div>
    <svg
      className="BgAnimation__svg"
      viewBox="0 0 602 602"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      {/* Existing <g> and <path> elements remain unchanged */}

      {/* First animated dot */}
      <ellipse
        cx="50"
        cy="50"
        rx="1.57306"
        ry="1.57433"
        fill="#945DD6"
      >
        <animateMotion 
          dur="15s"
          repeatCount="indefinite"
          path="M0,0 C120,100 360,0 480,100"
        />
      </ellipse>

      {/* Second animated dot */}
      <ellipse
        cx="200"
        cy="200"
        rx="1.57306"
        ry="1.57433"
        fill="#46737"
      >
        <animateMotion 
          dur="10s"
          repeatCount="indefinite"
          path="M0,100 C150,-50 450,150 600,0"
          begin="1s"
        />
      </ellipse>

      {/* Third animated dot */}
      <ellipse
        cx="350"
        cy="300"
        rx="1.57306"
        ry="1.57433"
        fill="#F46737"
      >
        <animateMotion 
          dur="20s"
          repeatCount="indefinite"
          path="M0,50 C200,200 400,-100 600,50"
          begin="0s"
        />
      </ellipse>

      <ellipse
        cx="100"
        cy="100"
        rx="1.5"
        ry="1.5"
        fill="#FFC0CB" 
      >
        <animateMotion 
          dur="22s"
          repeatCount="indefinite"
          path="M0,0 C100,150 300,50 500,0"
          begin="0s"
        />
      </ellipse>

      <ellipse
        cx="450"
        cy="150"
        rx="2"
        ry="2"
        fill="#800080"  
      >
        <animateMotion 
          dur="18s"
          repeatCount="indefinite"
          path="M100,0 C200,200 400,0 600,200"
          begin="2s"
        />
      </ellipse>

      <ellipse
        cx="200"
        cy="400"
        rx="1"
        ry="1"
        fill="#FFC0CB"  
      >
        <animateMotion 
          dur="20s"
          repeatCount="indefinite"
          path="M0,200 C200,400 400,200 600,400"
          begin="4s"
        />
      </ellipse>

      <ellipse
        cx="300"
        cy="50"
        rx="1.2"
        ry="1.2"
        fill="#800080"  
      >
        <animateMotion 
          dur="16s"
          repeatCount="indefinite"
          path="M0,50 C150,250 350,50 550,250"
          begin="3s"
        />
      </ellipse>

      <ellipse
        cx="500"
        cy="350"
        rx="1.8"
        ry="1.8"
        fill="#FFC0CB"  
      >
        <animateMotion 
          dur="24s"
          repeatCount="indefinite"
          path="M50,0 C250,150 450,-50 650,100"
          begin="5s"
        />
      </ellipse>




      {/* Continue with other SVG elements as needed */}

    </svg>
  </Div>
);

export default HeroBgAnimation;
