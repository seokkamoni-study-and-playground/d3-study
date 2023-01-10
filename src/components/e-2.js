import * as d3 from 'd3';
import React, { useEffect, useRef } from 'react';
import styled from 'styled-components';

export default function E2() {
  const canvasRef = useRef();
  const data = [100, 10, 30, 50, 110, 80];

  useEffect(() => {
    const canvas = d3.select(canvasRef.current);
    const svg = canvas
      .append('svg')
      .attr('width', 500)
      .attr('height', 500)
      .attr('style', 'background:#F9F9F9');
    data.forEach((element, index) => {
      svg
        .append('rect')
        .attr('width', 20)
        .attr('height', element)
        .attr('x', index * 30)
        .attr('y', 120 - element);
    });
  }, []);

  return <div ref={canvasRef} />;
}
