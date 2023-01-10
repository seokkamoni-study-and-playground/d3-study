import * as d3 from 'd3';
import React, { useEffect, useRef } from 'react';
import styled from 'styled-components';

export default function E3() {
  const canvasRef = useRef();
  const data = [100, 10, 110, 50, 40, 80];

  useEffect(() => {
    const canvas = d3.select(canvasRef.current);
    const svg = canvas.append('svg').attr('width', 500).attr('height', 500);

    const xFunc = (data, index) => index * 30 + 1;
    const yFunc = (data) => 150 - data;

    const drawLineChartGenerator = d3
      .line()
      .x(xFunc)
      .y(yFunc)
      .curve(d3.curveBasis);

    const path = svg
      .append('path')
      .attr('d', drawLineChartGenerator(data))
      .attr('fill', 'none')
      .attr('stroke', 'red')
      .attr('stroke-width', 8)
      .attr('stroke-linecap', 'round');

    const length = path.node().getTotalLength();

    path
      .attr('stroke-dashoffset', length)
      .attr('stroke-dasharray', length)
      .transition()
      .ease(d3.easeSin)
      .duration(1000)
      .attr('stroke-dashoffset', 2);
  }, []);

  return <div ref={canvasRef} />;
}
