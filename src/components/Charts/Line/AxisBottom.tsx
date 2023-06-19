// import { timeFormat } from "d3";
import type { ScaleTime } from "d3";
import { format } from "date-fns";
// const formatTime = timeFormat("%d %b");

interface Props {
  xScale: ScaleTime<number, number>;
  innerHeight: number;
  X: Date[];
  width: number;
}

const AxisBottom: React.FC<Props> = ({ xScale, innerHeight, X, width }) => {
  const ticksBottom = xScale.ticks(width < 600 ? 5 : X.length * 0.75);
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
              className="stroke-gray-200 dark:stroke-gray-700"
              // stroke="#ededed"
              strokeDasharray="4 1"
            ></line>
            <text
              className="text-[10px] fill-gray-500 dark:fill-gray-200"
              alignmentBaseline="hanging"
              textAnchor="middle"
              // fontSize="0.6rem"
              // fill="#6B6C7D"
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
