import { scaleBand, scaleLinear, max, timeFormatDefaultLocale } from "d3";
import locale from "../../../utils/locale";
timeFormatDefaultLocale(locale);
const xValue = (d) => d.size;
const yValue = (d) => d.value;
const margin = { top: 40, right: 100, bottom: 80, left: 80 };
const svgWidth = 870;
const svgHeight = 220;

const innerWidth = svgWidth - margin.left - margin.right;
const innerHeight = svgHeight - margin.top - margin.bottom;

const Bar = ({ data }) => {
  const xScale = scaleBand()
    .domain(["small", "medium", "large"])
    .range([0, innerWidth])
    .padding(0.5);
  const yScale = scaleLinear()
    .domain([0, max(data, yValue)])
    .range([innerHeight, 0]);
  return (
    <svg viewBox={`0 0 ${svgWidth} ${svgHeight}`}>
      {data.map((d) => {
        return (
          <rect
            key={xValue(d)}
            x={xScale(xValue(d))}
            y={yScale(yValue(d))}
            width={xScale.bandwidth()}
            height={innerHeight - yScale(yValue(d))}
            fill="black"
          />
        );
      })}
    </svg>
  );
};

export default Bar;
