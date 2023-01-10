import * as d3 from 'd3';
import React, { useEffect, useRef } from 'react';

export default function LineChart({ graphInfos, data }) {
  const canvasRef = useRef();

  useEffect(() => {
    const canvas = d3.select(canvasRef.current);
    const svg = canvas.append('svg').attr('width', 500).attr('height', 500);

    const yScaleFunc = d3.scaleLinear().domain([5, 40]).range([0, 100]);
    d3.csv('/data/data.csv').then((data) => {
      graphInfos.forEach((info) => {
        const xFunc = (_, index) => index * 30;
        const yFunc = (yData) => yScaleFunc(40 - yData[info.key]);
        const lineGenerator = d3.line().x(xFunc).y(yFunc);

        svg
          .append('path')
          .attr('stroke', info.color)
          .attr('stroke-width', 4)
          .attr('d', lineGenerator(data))
          .attr('fill', 'none');
      });
    });
  }, []);

  return <div ref={canvasRef} />;
}
