import { timeFormat } from "d3";
const formatTime = timeFormat("%d %b");

const AxisBottom = ({ xScale, innerHeight, ticks }) => {
  const ticksBottom = xScale.ticks();
  const offset = 10;
  const labels = (ind) => {
    if (ind === 0) return "start";
    else if (ind === ticksBottom.length - 1) return "end";
    else {
      return "middle";
    }
  };
  return (
    <>
      {ticksBottom.map((tickValue, index) => {
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
              textAnchor={labels(index)}
              fontSize="0.6rem"
              fill="#6B6C7D"
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
