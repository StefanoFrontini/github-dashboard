import { useState } from "react";
import {
  line,
  scaleLinear,
  pointer,
  bisectCenter,
  max,
  scaleOrdinal,
  timeFormatDefaultLocale,
  extent,
  scaleTime,
  map,
  timeFormat,
} from "d3";
import locale from "../../../utils/locale";
import { AxisLeft, AxisBottom, LinePath, ColorLegend, Tooltip } from "./index";
timeFormatDefaultLocale(locale);
const formatTime = timeFormat("%B %d, %Y");

const xValue = (d) => d.date;
const yValue = (d) => d.value;
const margin = { top: 10, right: 20, bottom: 80, left: 45 };
const svgWidth = 870;
const svgHeight = 320;

const innerWidth = svgWidth - margin.left - margin.right;
const innerHeight = svgHeight - margin.top - margin.bottom;

const Line = ({ data, title }) => {
  const [hoveredPoint, setHoveredPoint] = useState([]);
  const yMax = Math.max(
    max(data[0].values, yValue),
    max(data[1].values, yValue),
    data[2] ? max(data[2].values, yValue) : null
  );
  const ticks = data[0].values.length;
  const ticksHeight = innerHeight / 50;
  // const ticksWidth = innerWidth / 50;
  // console.log(ticks);

  const xScale = scaleTime()
    .domain(extent(data[0].values, xValue))
    .range([0, innerWidth]);

  const yScale = scaleLinear().domain([0, yMax]).range([innerHeight, 0]).nice();

  const lineGenerator = line()
    .x((d) => xScale(xValue(d)))
    .y((d) => yScale(yValue(d)));
  const X = map(data[0].values, xValue);
  const midPointX = X.length / 2;

  const colorScale = scaleOrdinal()
    .domain(data.map((el) => el.name))
    .range([data[2] ? "#B209FF" : "#FF3A00", "#0EC600", "#FF3A00"]);
  const handleOnMouseMove = (e) => {
    const m = pointer(e);
    const im = [m[0] - margin.left, m[1] - margin.top];
    const date = xScale.invert(im[0]);
    if (im[0] < 0 || im[0] > innerWidth) {
      setHoveredPoint([]);
      return;
    }
    if (im[1] < 0 || im[1] > innerHeight) {
      setHoveredPoint([]);
      return;
    }
    const Yvalue = yScale.invert(im[1]);
    const i = bisectCenter(X, date);
    const findYValue = (arr, date) =>
      arr.find((el) => formatTime(el.date) === formatTime(date));
    const tooltipValues = data.map((el) => [
      el.name,
      findYValue(el.values, X[i]),
    ]);
    setHoveredPoint([X[i], Yvalue, tooltipValues, i]);
  };

  return (
    <svg
      viewBox={`0 0 ${svgWidth} ${svgHeight}`}
      onMouseMove={(e) => {
        handleOnMouseMove(e);
      }}
    >
      <g transform={`translate(${margin.left},${margin.top})`}>
        <line
          style={{
            stroke: "#999",
            strokeWidth: "0.5",
            strokeDasharray: "5 3",
          }}
          y2={innerHeight}
          y1={0}
          x1={xScale(hoveredPoint[0] ?? 0)}
          x2={xScale(hoveredPoint[0] ?? 0)}
        ></line>
        <g>
          <AxisLeft
            yScale={yScale}
            innerWidth={innerWidth}
            ticks={ticksHeight}
          />
          <AxisBottom xScale={xScale} innerHeight={innerHeight} ticks={ticks} />
          <line y1={0} y2={innerHeight} stroke="#ededed"></line>
          <line
            x1={innerWidth}
            x2={innerWidth}
            y1={0}
            y2={innerHeight}
            stroke="#ededed"
          ></line>
          <g>
            {data.map((group) => {
              return (
                <LinePath
                  key={group.name}
                  color={group.name}
                  lineGenerator={lineGenerator}
                  lineData={group.values}
                  colorScale={colorScale}
                  xScale={xScale}
                  yScale={yScale}
                  xValue={xValue}
                  yValue={yValue}
                  // hoveredValue={hoveredValue}
                  hoveredPoint={hoveredPoint}
                />
              );
            })}
          </g>

          <g
            transform={`translate(${innerWidth / 2 - 80}, ${innerHeight + 40})`}
          >
            <ColorLegend
              colorScale={colorScale}
              tickSpacing={70}
              tickTextOffset={10}
              tickSize={4}
            />
          </g>

          <g
            transform={`translate(${xScale(hoveredPoint[0] ?? 0)}, ${yScale(
              hoveredPoint[1] ?? 0
            )})`}
          >
            <Tooltip
              hoveredPoint={hoveredPoint}
              colorScale={colorScale}
              midPointX={midPointX}
              title={title}
            />
          </g>
        </g>
      </g>
    </svg>
  );
};

export default Line;
