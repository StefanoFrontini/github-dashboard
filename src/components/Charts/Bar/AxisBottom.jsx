import { timeFormat } from "d3";
const formatTime = timeFormat("%d %b");

const AxisBottom = ({ xScale, innerHeight }) => {
  const ticks = xScale.ticks(4);
  const offset = 10;
  return (
    <>
      {ticks.map((tickValue, index) => {
        return (
          <g
            transform={`translate(${xScale(tickValue)}, ${
              innerHeight + offset
            })`}
            key={index}
          >
            <line
              y1={-innerHeight - offset}
              y2={-offset}
              stroke="#ededed"
              strokeDasharray="4 1"
            ></line>
            <text
              // x={xScale(tickValue)}
              // y={innerHeight + 24}
              alignmentBaseline="hanging"
              textAnchor="middle"
              fontSize="0.62rem"
            >
              {formatTime(tickValue)}
            </text>
          </g>
        );
      })}
    </>
  );
};

export default AxisBottom;