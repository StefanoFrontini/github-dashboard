// import { timeFormat } from "d3";
import type { ScaleTime } from "d3";
import { format } from "date-fns";
// const formatTime = timeFormat("%d %b");

interface Props {
  xScale: ScaleTime<number, number>;
  innerHeight: number;
}

const AxisBottom: React.FC<Props> = ({ xScale, innerHeight }) => {
  const ticksBottom = xScale.ticks(5);
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
              className="text-[10px]"
              alignmentBaseline="hanging"
              textAnchor="middle"
              // fontSize="0.6rem"
              fill="#6B6C7D"
            >
              {format(tickValue, "dd MMM")}
            </text>
          </g>
        );
      })}
    </>
  );
};

export default AxisBottom;
