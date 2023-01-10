import * as d3 from 'd3';
import React, { useEffect, useRef } from 'react';
import styled from 'styled-components';

const getMaxValueIndex = (arr) => {
  let currentMaxValue = -1;
  let maxIdx = 0;
  arr.forEach((item, index) => {
    if (currentMaxValue < item) {
      currentMaxValue = item;
      maxIdx = index;
    }
  });
  return maxIdx;
};

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
        .attr('id', `rect-${index}`)
        .attr('width', 20)
        .attr('height', 0)
        .attr('x', index * 30)
        .attr('y', 200)
        .transition()
        .duration(500)
        .attr('height', element)
        .attr('y', 200 - element);

      d3.select(`#rect-${getMaxValueIndex(data)}`)
        .transition()
        .duration(1000)
        .style('fill', '#0000ff')
        .delay(500);

      svg
        .append('text')
        .text(element)
        .attr('x', index * 30)
        .attr('y', 190 - element);
    });
  }, []);

  return <div ref={canvasRef} />;
}
