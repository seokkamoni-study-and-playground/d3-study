import React from 'react';
import styled from '@emotion/styled';

// <rect x={0} y={0} width={100} height={200} /> {/* 네모 */}
//      <circle
//        cx={300}
//        cy={300}
//        r={80}
//        stroke="red"
//        strokeWidth={10}
//       fill="black"
//      />
//      <line x1={400} y1={50} x2={450} y2={100} strokeWidth={2} stroke="red" />
//      <text x={100} y={400}>
//        Hello World
//      </text>

function SnowmanBody() {
  return (
    <>
      <circle
        cx={250}
        cy={300}
        r={120}
        stroke="black"
        strokeWidth={14}
        fill="#fff"
      />
      <circle
        cx={250}
        cy={150}
        r={80}
        stroke="black"
        strokeWidth={14}
        fill="#fff"
      />
    </>
  );
}

function SonwmanEyes() {
  return (
    <>
      <circle
        className="left-eye"
        cx={225}
        cy={140}
        r={10}
        stroke="black"
        strokeWidth={4}
        fill="#000"
      />
      <circle
        cx={275}
        cy={140}
        r={10}
        stroke="black"
        strokeWidth={4}
        fill="#000"
      />
    </>
  );
}

function SnowmanArms() {
  return (
    <>
      <line
        x1={100}
        y1={180}
        x2={220}
        y2={300}
        stroke="black"
        strokeWidth={10}
      />
      <line
        x1={400}
        y1={180}
        x2={280}
        y2={300}
        stroke="black"
        strokeWidth={10}
      />
    </>
  );
}

function SnowmanHat() {
  return (
    <rect
      x={0}
      y={0}
      width={100}
      height={50}
      style={{ backgroundColor: '#000' }}
      transform="translate(270,25) rotate(30)"
    />
  );
}

function NameTag() {
  return (
    <text x={230} y={450}>
      눈사람
    </text>
  );
}

const Snowman = styled.svg`
  .left-eye {
    animation-duration: 0.5s;
    animation-name: blink;
    animation-iteration-count: infinite;
    animation-direction: alternate;
    transform-origin: 0 140px;
  }
  @keyframes blink {
    to {
      transform: scaleY(0.1);
    }
  }
`;

export default function Svg() {
  return (
    <Snowman width={900} height={900} style={{ backgroundColor: '#d9d9d9' }}>
      <SnowmanHat />
      <SnowmanArms />
      <SnowmanBody />
      <SonwmanEyes />
      <NameTag />
    </Snowman>
  );
}
