import { max, scaleBand, scaleLinear, timeFormatDefaultLocale } from "d3";
import { useState } from "react";
import { motion } from "framer-motion";
import locale from "../../../utils/locale";
import type {
  AveragePullBySizeObj,
  TotalPullsBySize,
} from "../../AverageMergeTimePRSize";
import { AxisBottom, AxisLeft, Tooltip } from "./index";

timeFormatDefaultLocale(locale);

const xValue = (d: AveragePullBySizeObj) => d.size;
const yValue = (d: AveragePullBySizeObj) => d.value;

const margin = { top: 50, right: 60, bottom: 50, left: 60 };

// const svgWidth = 870;
// const svgHeight = 420;

interface Props {
  data: AveragePullBySizeObj[];
  totalPullsBySize: TotalPullsBySize;
  width: number;
  height: number;
}

const Bar: React.FC<Props> = ({ data, totalPullsBySize, width, height }) => {
  const [hoveredPoint, setHoveredPoint] = useState("");
  const innerWidth = width - margin.left - margin.right;
  const innerHeight = height - margin.top - margin.bottom;

  const xScale = scaleBand()
    .domain(["small", "medium", "large"])
    .range([0, innerWidth])
    .padding(0.15);

  const yScale = scaleLinear()
    .domain([0, max(data, yValue)] as [number, number])
    .range([innerHeight, 0])
    .nice();

  const barWidth = xScale.bandwidth();

  const showTooltip = (d: AveragePullBySizeObj) => {
    setHoveredPoint(d.size);
  };

  return (
    <svg viewBox={`0 0 ${width} ${height}`}>
      <g transform={`translate(${margin.left},${margin.top})`}>
        <AxisLeft yScale={yScale} innerWidth={innerWidth} />
        <AxisBottom
          xScale={xScale}
          innerHeight={innerHeight}
          width={barWidth}
        />
        <line y1={0} y2={innerHeight} stroke="#ededed"></line>
        <line
          x1={innerWidth}
          x2={innerWidth}
          y1={0}
          y2={innerHeight}
          stroke="#ededed"
        ></line>
        {data.map((d) => {
          return (
            <g key={xValue(d)}>
              <motion.rect
                initial={{ y: innerHeight, height: 0 }}
                animate={{
                  y: yScale(yValue(d)),
                  height: innerHeight - yScale(yValue(d)),
                }}
                transition={{
                  // duration: 4,
                  // delay: 0.5,
                  type: "spring",
                  stiffness: 100,
                  damping: 30,
                  mass: 1,
                }}
                x={xScale(xValue(d))}
                // y={yScale(yValue(d))}
                width={barWidth}
                // height={innerHeight - yScale(yValue(d))}
                className="fill-sky-600"
                onMouseOver={() => showTooltip(d)}
                onMouseLeave={() => showTooltip({ size: "", value: 0 })}
              />
              <Tooltip
                barWidth={barWidth}
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
