import * as d3 from 'd3';
import React, { useEffect, useState } from 'react';
import Linechart from './LineChart';

const graphInfos = [
  { key: '평균최고기온(°C)', color: 'red' },
  { key: '평균최저기온(°C)', color: 'blue' },
  { key: '평균기온(°C)', color: 'green' },
];
export default function E5() {
  const [data, setData] = useState();

  useEffect(() => {
    d3.csv('/data/data.csv').then((data) => {
      setData(data);
    });
  }, []);

  return (
    <div>
      <Linechart graphInfos={graphInfos} data={data} />
    </div>
  );
}
