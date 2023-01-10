import * as d3 from 'd3';
import React, { useEffect, useRef } from 'react';
import styled from 'styled-components';

export default function E4() {
  const canvasRef = useRef();
  const data = [100, 10, 110, 50, 40, 80];

  useEffect(() => {
    const canvas = d3.select(canvasRef.current);
    const svg = canvas.append('svg').attr('width', 500).attr('height', 500);

    const arcGenerator = d3.arc().innerRadius(50).outerRadius(100);
    const pieGenerator = d3.pie();

    const g = svg.append('g').attr('transform', 'translate(150,150)');

    g.selectAll('path')
      .data(pieGenerator(data))
      .enter()
      .append('path')
      .attr('fill', (d) => {
        console.log(Math.max(...data));
        console.log(Math.min(...data));
        if (Math.max(...data) === d.data) {
          return 'red';
        }
        if (Math.min(...data) === d.data) {
          return 'blue';
        }
        return 'brown';
      })
      .attr('stroke', 'black')
      .attr('stroke-width', 4)
      .attr('d', arcGenerator);
  }, []);

  return <div ref={canvasRef} />;
}
