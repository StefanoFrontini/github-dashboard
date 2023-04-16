import { timeFormat } from "d3";
import type { ScaleTime } from "d3";
const formatTime = timeFormat("%d %b");

interface Props {
  xScale: ScaleTime<number, number>;
  innerHeight: number;
}

const AxisBottom: React.FC<Props> = ({ xScale, innerHeight }) => {
  const ticksBottom = xScale.ticks();
  const offset = 10;
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
              alignmentBaseline="hanging"
              textAnchor="middle"
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