import * as d3 from 'd3';
import React, { useEffect, useRef } from 'react';
import styled from 'styled-components';

export default function E1() {
  const canvasRef = useRef();

  const Snowman = styled.div`
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

  const drawArms = (svg) => {
    svg
      .append('line')
      .attr('x1', 100)
      .attr('y1', 180)
      .attr('x2', 220)
      .attr('y2', 300)
      .attr('stroke', 'black')
      .attr('stroke-width', 10);
    svg
      .append('line')
      .attr('x1', 400)
      .attr('y1', 180)
      .attr('x2', 280)
      .attr('y2', 300)
      .attr('stroke', 'black')
      .attr('stroke-width', 10);
  };

  const drawBody = (svg) => {
    svg
      .append('circle')
      .attr('cx', 250)
      .attr('cy', 300)
      .attr('r', 120)
      .attr('stroke', 'black')
      .attr('stroke-width', 14)
      .attr('fill', '#fff');
    svg
      .append('circle')
      .attr('cx', 250)
      .attr('cy', 150)
      .attr('r', 80)
      .attr('stroke', 'black')
      .attr('stroke-width', 14)
      .attr('fill', '#fff');
  };

  const drawHat = (svg) => {
    svg
      .append('rect')
      .attr('x', 0)
      .attr('y', 0)
      .attr('width', 100)
      .attr('height', 50)
      .attr('backgroundColor', '#000')
      .attr('transform', 'translate(270,25) rotate(30)');
  };

  const drawEyes = (svg) => {
    // 눈사람 눈
    svg
      .append('circle')
      .attr('cx', 225)
      .attr('cy', 140)
      .attr('r', 10)
      .attr('stroke', 'black')
      .attr('stroke-width', 4)
      .attr('fill', '#000')
      .attr('class', 'left-eye');

    svg
      .append('circle')
      .attr('cx', 275)
      .attr('cy', 140)
      .attr('r', 10)
      .attr('stroke', 'black')
      .attr('stroke-width', 4)
      .attr('fill', '#000');
  };

  useEffect(() => {
    const canvas = d3.select(canvasRef.current);
    const svg = canvas
      .append('svg')
      .attr('width', 500)
      .attr('height', 500)
      .attr('style', 'background-color: #d9d9d9');

    drawArms(svg);
    drawBody(svg);
    drawHat(svg);
    drawEyes(svg);
  }, []);

  return <Snowman ref={canvasRef} />;
}
