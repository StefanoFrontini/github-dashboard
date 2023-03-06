import { useState } from "react";
import {
  scaleBand,
  scaleLinear,
  max,
  timeFormatDefaultLocale,
  pointer,
  bisectCenter,
  map,
} from "d3";
import locale from "../../../utils/locale";
import { AxisLeft, AxisBottom } from "./index";
timeFormatDefaultLocale(locale);
const xValue = (d) => d.size;
const yValue = (d) => d.value;
const margin = { top: 60, right: 60, bottom: 50, left: 60 };
const svgWidth = 870;
const svgHeight = 420;

const innerWidth = svgWidth - margin.left - margin.right;
const innerHeight = svgHeight - margin.top - margin.bottom;

const Bar = ({ data, totalPullsBySize }) => {
  console.log(data);
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
    console.log(d);
    setHoveredPoint(d.size);
  };
  return (
    <svg viewBox={`0 0 ${svgWidth} ${svgHeight}`}>
      <g transform={`translate(${margin.left},${margin.top})`}>
        <AxisLeft yScale={yScale} innerWidth={innerWidth} />
        <AxisBottom xScale={xScale} innerHeight={innerHeight} width={width} />
        {data.map((d) => {
          return (
            <>
              <rect
                key={xValue(d)}
                x={xScale(xValue(d))}
                y={yScale(yValue(d))}
                width={xScale.bandwidth()}
                height={innerHeight - yScale(yValue(d))}
                fill="#4C9AFF"
                onMouseOver={() => showTooltip(d)}
                onMouseLeave={() => showTooltip("")}
              />
              <g opacity={hoveredPoint === d.size ? 1 : 0}>
                <rect
                  key={xValue(d) + "1"}
                  x={xScale(xValue(d)) + width / 6}
                  y={yScale(yValue(d)) - 60}
                  width={width / 1.5}
                  height={50}
                  fill="white"
                  className="drop-shadow"
                />
                <g key={d.size} transform={`translate(${width / 2}, 0)`}>
                  <text
                    fontSize={10}
                    x={xScale(xValue(d))}
                    y={yScale(yValue(d)) - 40}
                    // dx="1.52em"
                    textAnchor="middle"
                    fill="black"
                  >{`Average Time ${d.value}h`}</text>
                  <text
                    fontSize={10}
                    x={xScale(xValue(d))}
                    y={yScale(yValue(d)) - 20}
                    // dx="1.52em"
                    textAnchor="middle"
                    fill="black"
                  >{`Pulls Requests ${totalPullsBySize[d.size]}`}</text>
                </g>
              </g>
            </>
          );
        })}
      </g>
    </svg>
  );
};

export default Bar;
