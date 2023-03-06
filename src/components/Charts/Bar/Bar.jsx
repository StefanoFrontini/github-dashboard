import { useState } from "react";
import { scaleBand, scaleLinear, max, timeFormatDefaultLocale } from "d3";
import locale from "../../../utils/locale";
import { AxisLeft, AxisBottom, Tooltip } from "./index";
timeFormatDefaultLocale(locale);
const xValue = (d) => d.size;
const yValue = (d) => d.value;
const margin = { top: 60, right: 60, bottom: 50, left: 60 };
const svgWidth = 870;
const svgHeight = 420;

const innerWidth = svgWidth - margin.left - margin.right;
const innerHeight = svgHeight - margin.top - margin.bottom;

const Bar = ({ data, totalPullsBySize }) => {
  const [hoveredPoint, setHoveredPoint] = useState("");
  const xScale = scaleBand()
    .domain(["small", "medium", "large"])
    .range([0, innerWidth])
    .padding(0.1);
  const yScale = scaleLinear()
    .domain([0, max(data, yValue)])
    .range([innerHeight, 0]);
  const width = xScale.bandwidth();
  const showTooltip = (d) => {
    setHoveredPoint(d.size);
  };
  return (
    <svg viewBox={`0 0 ${svgWidth} ${svgHeight}`}>
      <g transform={`translate(${margin.left},${margin.top})`}>
        <AxisLeft yScale={yScale} innerWidth={innerWidth} />
        <AxisBottom xScale={xScale} innerHeight={innerHeight} width={width} />
        {data.map((d) => {
          return (
            <g key={xValue(d)}>
              <rect
                x={xScale(xValue(d))}
                y={yScale(yValue(d))}
                width={width}
                height={innerHeight - yScale(yValue(d))}
                fill="#4C9AFF"
                onMouseOver={() => showTooltip(d)}
                onMouseLeave={() => showTooltip("")}
              />
              <Tooltip
                width={width}
                xScale={xScale}
                yScale={yScale}
                xValue={xValue}
                yValue={yValue}
                d={d}
                hoveredPoint={hoveredPoint}
                totalPullsBySize={totalPullsBySize}
              />
            </g>
          );
        })}
      </g>
    </svg>
  );
};

export default Bar;
